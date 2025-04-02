"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import MessageInput from "./MessageInput";
import Navbar from "@/app/components/Navbar";
import ChatList from "./ChatList";
import { motion, AnimatePresence } from "framer-motion";

export default function InnovationInsightsChat() {
  const [messages, setMessages] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const messagesEndRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const questionsAndResponses = {
    "What are the biggest technology trends shaping startups today?":
      "AI, no-code tools, personalization, automation, and user-centric design are leading the charge. Want to stay ahead of the curve? Let us help you tap into these trends strategically.",
    "How is AI changing the business world?":
      "From smarter operations to better customer experiences, AI is becoming a business essential. We help you integrate it without overwhelm, starting from your real needs.",
    "How important is sustainability for startups?":
      "It’s no longer optional. Investors, users, and partners are all looking at impact. We help you align your digital strategy with sustainability, without greenwashing.",
    "What are the biggest challenges for startups today?":
      "Standing out, scaling smart, and staying lean. We’ve seen them all and we’re here to help you navigate them with the right support.",
    "Any tips for pitching to investors?":
      "Yes: clarity wins. Make sure you clearly communicate the problem you're solving, your solution, traction so far, and your long-term vision. We also help you craft compelling pitch decks and prepare with realistic mockups and practice sessions including the most common investor questions so you can pitch with confidence.",
    "How can I prepare my business for funding?":
      "Start with your foundation: strong brand, clear value, and a working product. We’ll help you get funding-ready with a clean roadmap, compelling visuals, and an investor-focused MVP.",
  };

  const generalResponses = [
    "Thanks for reaching out! Can you specify a bit more about which service you’re interested in? That way, I can provide the exact information you need.",
    "I’d love to help with that! Could you please provide more details about your project or the specific service you are looking into?",
    "Absolutely, we can assist with that. Our services are tailored to bring your ideas to life in the most efficient way possible. What’s your vision?",
    "That’s a great question. Our services cover everything from AI integration to full-scale development. What aspect are you most interested in?",
    "We’re here to help. Our team specializes in transforming startups. Which part of your business are you looking to enhance?",
    "Thank you for your interest in our services! We offer customized solutions in various domains. Which particular area would you like to learn more about?",
    "We appreciate your query. Our expertise is broad, so we’re confident we have just the service you need. Could you tell me a bit more about your requirements?",
    "That’s exactly what we’re here for. We offer tailored support for every stage of your startup journey. What stage is your business currently at?",
    "Our services are designed to help you succeed. From initial concept to market launch, how can we assist in making your venture a success?",
    "We can definitely assist with that. Kakushin is all about innovation and growth. What challenges are you currently facing that we can help with?",
  ];

  const funResponses = [
    "Interesting question! While that’s not directly related to Kakushin, here’s something fun: Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!",
    "That’s quite a unique query! Not exactly in our usual realm, but here’s a fun fact: A day on Venus is longer than a year on Venus. It takes 243 Earth days to rotate once but only 225 days to complete an orbit around the Sun.",
    "I love where your head’s at! That’s not something we cover at Kakushin, but let me entertain you with this: Octopuses have three hearts and blue blood. They use two of the hearts to pump blood to the gills, while the third pumps it to the rest of the body.",
    "You’ve piqued my curiosity too! It’s not our expertise, but just for fun: The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
    "That’s out of our wheelhouse, but let’s not let that stop the fun. Did you know that the Eiffel Tower can be 15 cm taller during the summer? When the iron heats up, it expands.",
    "We don’t deal with that at Kakushin, but we still like to have a little fun! Here’s something you might enjoy: Cows have best friends and get stressed when they are separated.",
    "I’m all for a good side track! That’s not related to our services, but here’s a fun piece of trivia: A group of flamingos is called a 'flamboyance.'",
    "Off the beaten path, I see! We don’t handle that here, but for a fun break: The unicorn is the national animal of Scotland, symbolizing purity and power in Celtic mythology.",
    "That’s a bit outside our scope, but let’s lighten the mood with this fun tidbit: Bananas are berries, but strawberries aren’t. Botanically, a berry has seeds on the inside and comes from a single flower with one ovary.",
    "Oh, that’s an interesting topic! Not something we cover, but let’s dive into something amusing: Watermelon snow exists! It's a phenomenon where algae turn mountain snow pink, giving it a watermelon-like appearance.",
  ];

  // Mobile detection useEffect
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // For testing purposes: clear chat messages
  const clearMessages = () => {
    setMessages([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("chatMessages");
    }
    setIsExpanded(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMessages = localStorage.getItem("chatMessages");
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && messages.length > 0) {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }

    if (messages.length > 0) {
      setIsExpanded(true);
      chatContainerRef.current?.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const getRandomResponse = (array) =>
    array[Math.floor(Math.random() * array.length)];

  const findClosestMatch = (input) => {
    const lowerInput = input.toLowerCase();
    for (let question of Object.keys(questionsAndResponses)) {
      if (lowerInput.includes(question.toLowerCase().slice(0, 10))) {
        return questionsAndResponses[question];
      }
    }

    const randomResponse =
      Math.random() > 0.5
        ? getRandomResponse(generalResponses)
        : getRandomResponse(funResponses);

    return (
      <>
        {randomResponse}
        <br />
        <a href="#contact" className="text-blue-600 underline">
          Contact Us
        </a>
      </>
    );
  };

  const handleUserMessage = (text, event) => {
    if (event) event.preventDefault();
    if (!text.trim()) return;

    const newMessage = { text, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);

    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);
      const response = findClosestMatch(text);
      setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
    }, 1500);
  };

  const chatContainerRef = useRef(null);

  return (
    <>
      <main className="relative flex-1 md:h-full h-screen flex flex-col justify-around items-center text-center lg:pt-0 pt-[1rem] px-4 md:px-8">
        <div className="w-full lg:px-4 px-2">
          <Navbar />
        </div>
        <AnimatePresence>
          {messages.length === 0 && (
            <motion.div
              key="Innovation-insights-message"
              variants={{
                initial: { opacity: 1, y: 0 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-white"
            >
              <div className="lg:block hidden">
                <h4 className="text-xl font-bold">
                  Hello and welcome to Kakushin!
                </h4>
                <h6 className="text-white my-2">
                  I'm here to help you explore how we can boost your startup’s
                  success with our innovative solutions.
                </h6>
              </div>
              <div className="lg:hidden">
                <h4 className="text-xl font-bold">
                  Hello and welcome to Kakushin!
                </h4>
                <h6 className="text-white my-2 h-[9rem]">
                  I'm here to help you explore how we can boost your startup’s
                  success with our innovative solutions.
                </h6>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          ref={chatContainerRef}
          className={`w-full lg:h-[60%] ${
            isExpanded ? "h-[30rem]" : "h-[16rem]"
          } mt-6 py-4 px-4 2xl:px-20 lg:px-12 overflow-auto transition-all duration-300`}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              } items-start`}
            >
              <div
                className={`p-2 rounded-lg lg:my-[10px] my-[5px] w-[80%] lg:w-[60%] ${
                  msg.sender === "user"
                    ? "text-gray-300 font-bold"
                    : "text-gray-300 "
                } flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                } items-start `}
              >
                <p>
                  <b>{msg.sender === "user" ? "" : "Kakushin AI: "}</b>
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
          {isThinking && (
            <div className="flex justify-start mt-2">
              <span className="animate-bounce">🤖</span>
              <p className="text-gray-500">Kakushin AI is thinking...</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Desktop view: inline question buttons */}
        {!isMobile && (
          <div className="mt-10 mb-5 flex flex-wrap gap-4 justify-center h-40 overflow-y-auto sm:h-auto sm:flex-wrap">
            {Object.keys(questionsAndResponses).map((text, index) => (
              <button
                key={index}
                onClick={(e) => handleUserMessage(text, e)}
                className={`px-4 py-2 rounded-full shadow ${
                  isThinking
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#404559] hover:bg-[#576685] text-[#DCE0F9]"
                }`}
                disabled={isThinking}
              >
                {text}
              </button>
            ))}
          </div>
        )}

        {/* Mobile view: popup modal with questions */}
        {isMobile && showPopup && (
          <AnimatePresence>
            <motion.div
              key="mobile-popup"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex justify-center items-center z-50"
            >
              <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={() => setShowPopup(false)}
              ></div>
              <div className="bg-[#0A192E] p-6 rounded-lg shadow-lg z-10 max-w-sm mx-auto">
                <h2 className="text-xl font-bold mb-4 text-white">
                  Select a question
                </h2>
                <div className="flex flex-col gap-2 h-[30rem] overflow-y-auto2">
                  {Object.keys(questionsAndResponses).map((text, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        handleUserMessage(text, e);
                        setShowPopup(false);
                      }}
                      className="px-4 py-2 border rounded-full shadow bg-[#2E323B] hover:bg-[#464e5f] text-[#E1E4EB] hover:text-[#bec0c7]"
                      disabled={isThinking}
                    >
                      {text}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-4 text-white underline"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        <button
          onClick={() => setShowPopup(true)}
          className="text-white my-5 p-2 block lg:hidden border-white border-[2px] rounded-lg"
        >
          Questions
        </button>
        <MessageInput
          onClear={clearMessages}
          hasMessages={messages.length > 0}
          onSendMessage={handleUserMessage}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setIsExpanded(messages.length > 0)}
        />
      </main>

      <aside className="w-full lg:w-[27.5%] px-4 md:px-10 py-4 h-full overflow-y-auto custom-scrollbar bg-[#161B29]">
        <ChatList selectedCategory="innovation" />
      </aside>
    </>
  );
}
