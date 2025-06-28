import React from "react";
import { IoClose, IoAddCircleOutline } from "react-icons/io5";

// This array holds the data for the suggestion cards, making the code cleaner.
const suggestions = [
  {
    title: "Native speech generation",
    description: "Generate high quality text to speech with Gemini",
  },
  {
    title: "Live audio-to-audio dialog",
    description:
      "Try Gemini's natural, real-time dialog with audio and video inputs",
  },
  {
    title: "Native image generation",
    description:
      "Interleaved text-and-image generation with the new Gemini 2.0 Flash",
  },
  {
    title: "Explore and co-develop apps",
    description: "See Gemini in action with interactive, open source examples",
  },
];

const Popup = ({ onClose }) => {
  return (
    // Main overlay: fixed position, covers the whole screen, centers content
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center pt-20 z-50 p-4">
      {/* Popup container: styled to match the AI Studio design */}
      <div className="bg-[#1e1f22] text-white rounded-xl shadow-lg p-6 md:p-8 w-full max-w-4xl relative animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close popup"
        >
          <IoClose size={28} />
        </button>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Welcome to AI Studio
        </h1>

        {/* Input Area */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Generate a collection of elementary math worksheet for addition and subtracti..."
            className="w-full bg-[#3a3f4b] rounded-full py-3 pl-6 pr-40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute inset-y-0 right-3 flex items-center space-x-2 md:space-x-4">
            <IoAddCircleOutline
              size={24}
              className="text-gray-400 cursor-pointer hover:text-white"
            />
            <button className="bg-[#3a3f4b] py-2 px-4 md:px-6 rounded-full hover:bg-gray-600 transition-colors text-sm md:text-base">
              Run <span className="hidden sm:inline text-gray-400">Ctrl+↵</span>
            </button>
          </div>
        </div>

        {/* "What's new" section */}
        <div className="mt-8">
          <h2 className="text-xl text-gray-400 mb-4">What's new</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestions.map((item, index) => (
              <div
                key={index}
                className="bg-[#3a3f4b] p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
              >
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
