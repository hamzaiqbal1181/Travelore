import React, { useState } from "react";
import { chatWithGemini } from "../api/geminiApi";

const GEM_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Ask me about historical places in Lahore, Pakistan!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const prompt = `You are an expert on Lahore, Pakistan. Only answer questions about historical places in Lahore. User: ${input}`;
      const botReply = await chatWithGemini(prompt, GEM_API_KEY);
      setMessages((msgs) => [...msgs, { from: "bot", text: botReply }]);
    } catch (e) {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "Sorry, I couldn't get a response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#23272f] rounded-lg p-4 max-w-lg mx-auto">
      <div className="h-64 overflow-y-auto mb-4 bg-[#1e1f22] rounded p-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${msg.from === "user" ? "text-right" : "text-left"}`}
          >
            <span
              className={`inline-block px-3 py-2 rounded ${
                msg.from === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-100"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <div className="text-gray-400">Gemini is typing...</div>}
      </div>
      <div className="flex">
        <input
          className="flex-1 rounded-l px-3 py-2 bg-[#3a3f4b] text-white focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask about Lahore's historical places..."
        />
        <button
          className="bg-blue-600 px-4 py-2 rounded-r text-white hover:bg-blue-700"
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
