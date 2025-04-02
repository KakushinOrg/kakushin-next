"use client";

import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import { FaRedo } from "react-icons/fa";

export default function MessageInput({
  onSendMessage,
  isExpanded,
  onClear,
  hasMessages,
}) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return;
    onSendMessage(message);
    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div
      className={`w-full flex items-center p-2 bg-[#fcfcfc] border border-gray-300 rounded-lg transition-all duration-300 ease-out my-5`}
    >
      {/* <button className="px-4 py-2 rounded-full">
                <MicIcon size={18} />
            </button>
       <div className="h-6 w-px bg-gray-300 mx-2"></div> */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Hello! What brings you to Kakushin today?"
        className="flex-1 p-2 outline-none"
      />
      <div className="h-6 w-px bg-gray-300 mx-2"></div>
      <div className="flex items-center justify-center">
        {hasMessages && (
          <button
            onClick={onClear}
            className="flex items-center justify-center gap-2 px-4 py-1 bg-red-50 hover:bg-red-100 text-red-500 rounded-full text-sm font-medium transition-colors"
          >
            <FaRedo size={14} />
            <span className="hidden sm:block">Clear</span>
          </button>
        )}
        <button
          className="px-4 py-2 rounded-full disabled:opacity-50"
          onClick={handleSendMessage}
          disabled={!message.trim()}
        >
          <SendHorizontal size={18} />
        </button>
      </div>
    </div>
  );
}
