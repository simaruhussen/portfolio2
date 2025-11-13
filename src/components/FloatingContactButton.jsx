// src/components/FloatingContactButton.jsx
import { FaPhoneAlt, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const FloatingContactButton = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      
      {/* WhatsApp */}
      <div className="relative group flex items-center justify-end">
        <span className="absolute right-16 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp
        </span>
        <a
          href="https://wa.me/251938698149" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      {/* Telegram */}
      <div className="relative group flex items-center justify-end">
        <span className="absolute right-16 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Telegram
        </span>
        <a
          href="https://t.me/andualem28" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-500 hover:bg-sky-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          <FaTelegramPlane size={23} />
        </a>
      </div>
    </div>
  );
};

export default FloatingContactButton;
