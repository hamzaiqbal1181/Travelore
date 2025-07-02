import React from "react";
import { IoClose } from "react-icons/io5";
import Chatbot from "../Chatbot";

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center pt-20 z-50">
      <div className="bg-[#1e1f22] text-white rounded-xl shadow-lg w-full max-w-4xl relative animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close popup"
        >
          <IoClose size={28} />
        </button>
        <Chatbot />
      </div>
    </div>
  );
};

export default Popup;
