'use client';
import React, { useState, useEffect, useRef } from "react";

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "👋 Hi! I'm MediBot. Ask me anything health-related." }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: input }] }] })
      });

      const data = await res.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ Sorry, I couldn't understand that.";

      setMessages([...updatedMessages, { sender: 'bot', text: reply }]);
    } catch (error) {
      console.error(error);
      setMessages([...updatedMessages, { sender: 'bot', text: "❌ Error connecting to AI. Try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-br from-emerald-500 to-cyan-500 p-4 rounded-full text-white shadow-xl hover:scale-110 transition-all"
            aria-label="Open MediBot"
          >
            💬
          </button>
        )}
      </div>

      {/* Chatbox */}
      {isOpen && (
        <div className="hidden lg:flex flex-col fixed bottom-6 right-6 w-[370px] h-[500px] bg-white dark:bg-gray-900 rounded-xl shadow-2xl z-50 overflow-hidden border border-gray-300 dark:border-gray-700">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-4 text-white flex justify-between items-center">
            <span className="font-semibold">MediBot</span>
            <button onClick={() => setIsOpen(false)} className="text-xl font-bold">×</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-gray-50 dark:bg-gray-800">
            {messages.map((msg, idx) => (
              <div key={idx} className={`text-sm p-3 rounded-lg max-w-[80%] ${msg.sender === 'user' ? 'bg-blue-100 ml-auto text-right' : 'bg-green-100 mr-auto text-left'} dark:text-black`}>
                {msg.text}
              </div>
            ))}
            {loading && <p className="text-xs text-gray-400">Typing...</p>}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t dark:border-gray-700 bg-white dark:bg-gray-900 flex gap-2">
            <input
              type="text"
              className="flex-1 p-2 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 disabled:opacity-50"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
