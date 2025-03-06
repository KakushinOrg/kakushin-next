"use client";

import { useState } from "react";
import { MicIcon, SendHorizontal } from "lucide-react";

export default function MessageInput({ onSendMessage, isExpanded }) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return; // Prevent sending empty messages
    onSendMessage(message);
    setMessage(""); // Clear input after sending
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div
      className={`w-[80%] flex items-center ${
        isExpanded ? "mb-2" : "mb-10"
      } p-2 bg-white border border-gray-300 rounded-lg  transition-all duration-300 ease-out`}
    >
      {/* <button className="px-4 py-2 rounded-full">
                <MicIcon size={18} />
            </button> */}
      {/* <div className="h-6 w-px bg-gray-300 mx-2"></div> */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Hello! What brings you to Kakushin today?"
        className="flex-1 p-2 outline-none"
      />
      <div className="h-6 w-px bg-gray-300 mx-2"></div>
      <button
        className="px-4 py-2 rounded-full disabled:opacity-50"
        onClick={handleSendMessage}
        disabled={!message.trim()} // Disable button when input is empty
      >
        <SendHorizontal size={18} />
      </button>
    </div>
  );
}
