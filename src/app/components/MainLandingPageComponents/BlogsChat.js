"use client";

import { useState, useEffect, useRef } from "react";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";
import Navbar from "@/app/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogsChat() {
  const [messages, setMessages] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Mobile detection and modal state
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      setIsExpanded(true);
      chatContainerRef.current?.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

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

  const serviceKeywords = [
    "service",
    "project",
    "solution",
    "branding",
    "integration",
    "startup",
    "requirement",
    "consultation",
    "business",
  ];

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
    "Interesting question! While that’s not directly related to our core services, here's something fun: did you know that honey never spoils?",
    "That’s quite unique! Not exactly in our usual realm, but here’s a fun fact: a day on Venus is longer than a year on Venus.",
    "I love your curiosity! Not something we cover, but fun trivia: octopuses have three hearts and blue blood.",
    "You've got a fun side! While that's not our area, here's a fun tidbit: the shortest war in history lasted only 38 minutes.",
    "That's out of the box! Not our typical subject, but did you know that the Eiffel Tower can be 15 cm taller during the summer?",
    "We don’t usually get that question, but here's something amusing: cows have best friends and get stressed when separated.",
    "That's a fun one! Not our main focus, but a group of flamingos is called a 'flamboyance.'",
    "Interesting! While it's not in our wheelhouse, here's a fun fact: Scotland's national animal is the unicorn.",
    "That’s off-topic, but did you know that bananas are berries, whereas strawberries aren’t?",
    "Here's a quirky fact: watermelon snow is a natural phenomenon where snow turns pink due to algae.",
  ];

  const getRandomResponse = (array) =>
    array[Math.floor(Math.random() * array.length)];

  const findClosestMatch = (input) => {
    const lowerInput = input.toLowerCase();

    // First, check if the input matches any of our pre-defined questions.
    for (let question of Object.keys(questionsAndResponses)) {
      if (lowerInput.includes(question.toLowerCase().slice(0, 10))) {
        return questionsAndResponses[question];
      }
    }

    // If the input contains any service-related keywords, return a general response.
    if (serviceKeywords.some((keyword) => lowerInput.includes(keyword))) {
      return getRandomResponse(generalResponses);
    } else {
      // Otherwise, return a fun response with a "Contact Us" link.
      const randomResponse = getRandomResponse(funResponses);
      return (
        <>
          {randomResponse}
          <br />
          <a href="contact" className="text-blue-600 underline">
            Contact Us
          </a>
        </>
      );
    }
  };

  const handleUserMessage = (text, event) => {
    if (event) event.preventDefault();
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { text, sender: "user" }]);
    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);
      const response = findClosestMatch(text);
      setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
    }, 1500);
  };

  return (
    <>
      <main className="relative flex-1 flex flex-col justify-around items-center text-center lg:pt-0 pt-[1rem] bg-[#0A192E] px-4 md:px-8">
        <div className="w-full lg:px-4 px-2">
          <Navbar />
        </div>

        <AnimatePresence>
          {messages.length === 0 && (
            <motion.div
              key="blog-message"
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
                <h1 className="text-xl font-bold">
                  Hello and welcome to Kakushin!
                </h1>
                <p className="text-white my-2">
                  In this section, you will hear all about us and what we do.
                  You can ask more questions if you have any.
                </p>
              </div>
              <div className="lg:hidden">
                <h1 className="text-xl font-bold">
                  Hello and welcome to Kakushin!
                </h1>
                <p className="text-white my-2">
                  In this section, you will hear all about us and what we do.
                  You can ask more questions if you have any.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          ref={chatContainerRef}
          className={`w-full ${
            isExpanded || messages.length > 0
              ? "lg:h-[60%] h-[37rem]"
              : "lg:h-2/4 h-[27rem]"
          }  mt-6 py-4 px-4 2xl:px-20 lg:px-12 overflow-auto transition-all duration-300`}
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
        </div>

        {/* Desktop view: inline question buttons */}
        {!isMobile && (
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            {Object.keys(questionsAndResponses).map((text, index) => (
              <button
                key={index}
                onClick={(e) => handleUserMessage(text, e)}
                className={`px-4 py-2 border rounded-full shadow ${
                  isThinking
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-white hover:bg-gray-200"
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
                <div className="flex flex-col gap-2">
                  {Object.keys(questionsAndResponses).map((text, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        handleUserMessage(text, e);
                        setShowPopup(false);
                      }}
                      className="px-4 py-2 border rounded-full shadow bg-white hover:bg-gray-200"
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

        {/* Mobile view: button to trigger the popup */}
        {isMobile && (
          <button
            onClick={() => setShowPopup(true)}
            className="text-white my-5 p-2 block lg:hidden border-white border-[2px] rounded-lg"
          >
            Questions
          </button>
        )}

        <MessageInput
          onSendMessage={handleUserMessage}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setIsExpanded(messages.length > 0)}
        />
      </main>

      <aside className="w-full lg:w-[27.5%] bg-[#0a192e] mr-16 p-4 border-r h-full overflow-y-auto custom-scrollbar border-[#114074]">
        <ChatList selectedCategory="blogs" />
      </aside>
    </>
  );
}
