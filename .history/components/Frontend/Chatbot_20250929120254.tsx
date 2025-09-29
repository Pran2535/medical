import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I’m MediBot. Ask me anything health-related." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_GEMINI_API_KEY",
        {
          contents: [{ parts: [{ text: input }] }]
        }
      );
      const reply =
        res?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I didn't understand that.";
      setMessages([...newMessages, { sender: "bot", text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages([...newMessages, { sender: "bot", text: "Oops! Something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {/* Floating Button */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-br from-green-500 to-blue-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
          >
            💬
          </button>
        )}
      </div>

      {/* Chatbox */}
      {isOpen && (
        <div className="hidden lg:flex flex-col fixed bottom-6 right-6 w-[350px] h-[500px] bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <h2 className="font-semibold text-lg">MediBot</h2>
            <button onClick={() => setIsOpen(false)} className="text-white text-xl font-bold">×</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-100 dark:bg-blue-800 self-end ml-auto text-right"
                    : "bg-green-100 dark:bg-green-800 self-start mr-auto text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <p className="text-sm text-gray-500">Typing...</p>}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
