import os
from datetime import datetime, timedelta
from typing import List, Optional
import re

from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from schemas import *
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import traceback

from pinecone import Pinecone
import google.generativeai as genai
import cohere


# Load environment variables
load_dotenv()

# Initialize FastAPI
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174","http://localhost:5173"],  # Adjust this to match your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


cohere_client=cohere.Client(os.getenv("COHERE_API_KEY"))

pc=Pinecone(api_key=os.getenv("PINE_API_KEY"))

index=pc.Index(os.getenv("PINE_INDEX"))

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel('gemini-1.5-flash')


SYSTEM_PROMPT = """
You are an AI assistant for a personal portfolio website. Your responses should be:
1. Professional and courteous
2. Relevant to the context of a data science/machine learning/backend portfolio (projects, skills, experience)
3. Concise but informative
4. Encouraging further conversation about the portfolio owner's work and skills
Always maintain a positive and helpful tone. If asked about specific projects or skills, 
use the provided context to give accurate information. Provided context will be resume/projects infomation which should be used to answer user queries in addition to previous conversations.
After that the current query by the user will be provided.
"""



def need_new_context(context:Optional[dict], input:str)->bool:
    if context is None:
        return True
    


def get_meta_from_pine(input:str)->dict:
    embeddings=cohere_client.embed(texts=[input],model="embed-english-v3.0",input_type="search_query").embeddings
    response = index.query(vector=embeddings,top_k=1,include_metadata=True)
    return response['matches'][0]['metadata']

async def get_gemini_response(input:str,context:Optional[dict],messages:List[Message])->str:
    conversation_history = "\n".join([f"{m.sender}: {m.text}" for m in messages])
    if "info" in context:
        relevent_text=context["info"]
    
    prompt=f"""
        {SYSTEM_PROMPT}

        Context:{relevent_text}

        Conversation history:
        {conversation_history}

        Human: {input}
        AI: 
        """



    
    return model.generate_content(
        prompt, stream=True
    )


@app.post("/api/chat")
async def chat(request: ChatRequest):
    try:
        
        request.context= get_meta_from_pine(request.input)

        response_stream =await get_gemini_response(request.input,request.context,request.messages)
        print(response_stream)
        
        def generate(response_stream):
            for chunk in response_stream:
                print(chunk)
                yield f"data: {chunk.text}"
            

        return StreamingResponse(generate(response_stream), media_type="text/event-stream")
    except Exception as e:
        error_msg = f"An error occurred: {str(e)}\n{traceback.format_exc()}"
        print(error_msg)  
        raise HTTPException(status_code=500, detail=str(e))