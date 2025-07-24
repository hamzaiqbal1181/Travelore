import React, { useState } from "react";
import { chatWithGemini } from "../api/geminiApi";
import ReactMarkdown from "react-markdown";

const GEM_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Ask me about historical places in Lahore, Pakistan!",
    },
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
    <div
      className="rounded-lg w-full max-w-3xl mx-auto"
      style={{
        backgroundImage: "url('/assets/chatbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "32rem",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      }}
    >
      {/* Remove the gray/white overlay and use only a transparent chat area */}
      <div
        className="h-[24rem] overflow-y-auto mb-6 rounded p-4"
        style={{
          background: "rgba(255,255,255,0.15)", // subtle glass effect for readability
          backdropFilter: "blur(2px)",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${
              msg.from === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-3 py-2 rounded ${
                msg.from === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white/80 text-gray-800"
              }`}
            >
              {msg.from === "bot" ? (
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              ) : (
                msg.text
              )}
            </span>
          </div>
        ))}
        {loading && <div className="text-gray-400">Gemini is typing...</div>}
      </div>
      <div className="flex p-2 gap-2">
        <input
          className="flex-1 rounded-l px-5 py-3 bg-white/90 text-gray-800 focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask about Lahore's historical places..."
        />
        <button
          className="bg-blue-600 px-6 py-3 rounded-r text-white hover:bg-blue-700"
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
