from pydantic import BaseModel
from typing import List, Optional

class Message(BaseModel):
    text: str
    sender: str

class ChatRequest(BaseModel):
    input: str
    context: Optional[dict] = None
    messages: List[Message]

class ChatResponse(BaseModel):
    response: str
    context: dict