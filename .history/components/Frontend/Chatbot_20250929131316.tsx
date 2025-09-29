'use client';
import React, { useState, useEffect, useRef } from 'react';
// dotenv को यहां इम्पोर्ट करने की आवश्यकता नहीं है क्योंकि Next.js इसे बिल्ड टाइम पर हैंडल करता है
// और क्लाइंट-साइड पर .env फ़ाइल सीधे नहीं पढ़ी जाती।

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "👋 Hi! I'm MediBot. Ask me anything health-related." }
  ]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Gemini API key को सीधे process.env से एक्सेस करें
  const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  // Gemini API एंडपॉइंट: 'gemini-pro' मॉडल का उपयोग करें
  // 'gemini-2.5-pro' पब्लिकली उपलब्ध नहीं है, इसलिए इसे 'gemini-pro' में बदलें।
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${GEMINI_API_KEY}`;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    if (!GEMINI_API_KEY) {
      setMessages(prev => [...prev, { sender: 'bot', text: '❌ API Key not configured. Please check .env file.' }]);
      return;
    }

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Gemini API के लिए सही रिक्वेस्ट बॉडी फॉर्मेट
          contents: [{ parts: [{ text: input }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 512,
          },
        }),
      });

      // API रिस्पॉन्स को ठीक से हैंडल करें
      if (!res.ok) {
        const errorData = await res.json();
        console.error("Gemini API Error Response:", errorData);
        throw new Error(`API error: ${res.status} ${res.statusText} - ${JSON.stringify(errorData)}`);
      }

      const data = await res.json();
      console.log("Gemini API Full Response Data:", data); // पूरा रिस्पॉन्स देखें

      // Gemini API से टेक्स्ट निकालने का तरीका
      // candidates -> content -> parts -> text
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text ||
                    "🤖 Sorry, I couldn't understand that or received an unexpected response.";

      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    } catch (err: any) {
      console.error("Fetch or API processing error:", err.message);
      setMessages(prev => [...prev, { sender: 'bot', text: `❌ Error reaching AI: ${err.message}. Please try again later.` }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 hidden lg:block z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="cursor-pointer bg-gradient-to-br from-green-500 to-blue-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse"
            aria-label="Open Chat"
          >
            💬
          </button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 hidden lg:flex flex-col w-[380px] h-[520px] bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50 animate-fadeIn">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 text-white flex justify-between items-center rounded-t-xl">
            <h2 className="font-bold">MediBot</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl cursor-pointer hover:text-red-300 transition"
              aria-label="Close Chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-slideIn`}>
                <div className={`max-w-[75%] p-3 rounded-xl text-sm ${
                  msg.sender === 'user'
                    ? 'bg-blue-500 text-white rounded-br-none'
                    : 'bg-green-500 text-white rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 animate-pulse">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t dark:border-gray-700 bg-white dark:bg-gray-900 flex gap-2">
            <input
              className="flex-1 px-3 py-2 border rounded-lg text-sm dark:bg-gray-800 dark:text-white focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={!input || loading}
              className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 transition"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.25s ease;
        }
      `}</style>
    </>
  );
};

export default Chatbot;