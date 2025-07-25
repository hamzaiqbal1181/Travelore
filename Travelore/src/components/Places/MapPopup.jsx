import React from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const MapPopup = ({ place, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-xl shadow-2xl w-full max-w-3xl h-[70vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-gray-700">
            Directions to {place.title}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black">
            <IoClose size={28} />
          </button>
        </header>
        <div className="flex-grow">
          <iframe
            src={place.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${place.title}`}
          ></iframe>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MapPopup;
