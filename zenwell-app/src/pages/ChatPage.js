import React, { useState } from 'react';

/**
 * Chat page component. Provides a simple chat interface. At present the AI
 * responses are placeholder messages. Integrating with an API like OpenAI's
 * GPT will require server-side functionality.
 */
function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const placeholderResponses = [
    "I'm here to support you. Tell me more.",
    "That sounds challenging. How are you feeling about it?",
    "Remember to breathe and be kind to yourself.",
    "Focusing on small steps can make a big difference.",
  ];

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMessage = { id: Date.now(), sender: 'user', text: trimmed };
    // Add user message
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    // Generate AI response after a short delay
    const aiMessage = {
      id: Date.now() + 1,
      sender: 'ai',
      text:
        placeholderResponses[
          Math.floor(Math.random() * placeholderResponses.length)
        ],
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, aiMessage]);
    }, 600);
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Zen Chat</h2>
      <div className="flex-1 overflow-y-auto p-4 bg-white border rounded-md space-y-4">
        {messages.length === 0 && (
          <p className="text-gray-500">Start a conversation and I'll respond with some guidance.</p>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={
              'max-w-xs px-3 py-2 rounded-lg shadow ' +
              (msg.sender === 'user'
                ? 'bg-indigo-600 text-white ml-auto'
                : 'bg-gray-200 text-gray-800 mr-auto')
            }
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') sendMessage();
          }}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatPage;