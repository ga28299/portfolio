import React, { useState, useEffect, useRef } from 'react';
import chat_bot from '../assets/chat_bot.svg'


type Sender = 'bot' | 'user';

interface Message {
  text: string;
  sender: Sender;
}

interface Context {
  relevant_info: string;
  timestamp: string;
}

const backendUrl=import.meta.env.VITE_BACKEND_URL as string;


export const FloatChat: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [context, setContext] = useState<any>(null);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
  
    const newMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    console.log('history:', messages);
  
    try {
      const response = await fetch(`${backendUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input, context, messages }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let botResponse = '';
  
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');
          
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') {
                setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
                break;
              } else {
                botResponse += data;
                // Update the UI with the partial response
                setMessages(prev => {
                  const newMessages = [...prev];
                  if (newMessages[newMessages.length - 1].sender === 'bot') {
                    newMessages[newMessages.length - 1].text = botResponse;
                  } else {
                    newMessages.push({ text: botResponse, sender: 'bot' });
                  }
                  return newMessages;
                });
              }
            }
          }
        }
      } else {
        // Handle case where response.body is null
        throw new Error('Response body is null');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { text: 'Sorry, an error occurred. Please try again.', sender: 'bot' }]);
    }
  };
  

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-gray-800 rounded-lg shadow-lg w-[33vw] h-[50vh] flex flex-col">
          <div className="flex justify-between items-center p-2 bg-gray-700 rounded-t-lg">
            <span>Chat with my AI Wingman</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
              ✕
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender} mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-700'}`}>
                  {message.text}
                </span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="p-2 bg-gray-700 rounded-b-lg">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-grow p-2 rounded-l-lg bg-gray-600 text-white focus:outline-none"
                placeholder="Type a message..."
              />
              <button 
                onClick={handleSendMessage}
                className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className=" text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        >
          <img src={chat_bot} alt="Chat" className='w-8 h-8 object-contain'/>
        </button>
      )}
    </div>
  );
};