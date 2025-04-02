"use client";

import { useState, useEffect, useRef } from "react";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";
import Navbar from "@/app/components/Navbar";
import OurServices from "@/app/landing_page/OurServices";
import {
  FetchOurServicesQandA,
  FetchServiceGeneralInquiries,
} from "@/app/lib/getBlogData";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesChat() {
  const [messages, setMessages] = useState([]);
  const [generalResponses, setGeneralResponses] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);

  // Mobile detection and modal state
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Mobile detection effect
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getRandomResponse = (array) =>
    array[Math.floor(Math.random() * array.length)];

  const questionsAndResponses = {
    "What services do you offer?":
      "We offer full-stack digital growth solutions. From MVP development and AI integration to UX/UI design, branding, marketing, and pitch decks — if it helps you grow, we’ve got it covered.",
    "What’s the process for working with Kakushin?":
      "Simple and collaborative. 1) Discovery call → 2) Strategy session → 3) Proposal → 4) Execution → 5) Review & Launch. We involve you at every step so you're always in the loop and confident in the outcome.",
    "Can you help me build an MVP?":
      "Absolutely. We’ve developed MVPs that got funded and scaled. We build with speed and strategy — not fluff. You’ll walk away with a functional product ready for users or investors.",
    "Do you do branding or marketing?":
      "Yes, and we go beyond logos. We craft brand identities, voice, visuals, and campaigns that connect with your audience and make you unforgettable. Whether you’re starting fresh or rebranding, we’ll make you shine.",
    "What AI services do you provide?":
      "Smart solutions for modern businesses. Think automation, personalization, intelligent dashboards, and digital transformation tools. We help you unlock the power of AI even if you’re not a tech company.",
  };

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

  const findClosestMatch = (input) => {
    const lowerInput = input.toLowerCase();
    for (let question of Object.keys(questionsAndResponses)) {
      if (lowerInput.includes(question.toLowerCase().slice(0, 10))) {
        return questionsAndResponses[question];
      }
    }

    const randomResponse =
      generalResponses.length > 0
        ? getRandomResponse(generalResponses)
        : getRandomResponse(funResponses);

    return (
      <>
        {randomResponse}
        <br />
        <a href="contact" className="text-blue-600 underline">
          Contact Us
        </a>
      </>
    );
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
      <main className="relative flex-1 md:h-full h-screen flex flex-col justify-around items-center text-center lg:pt-0 pt-[1rem] px-4 md:px-8">
        <div className="w-full lg:px-4 px-2">
          <Navbar />
        </div>

        <AnimatePresence>
          {messages.length === 0 && (
            <motion.div
              key="Service-chat-message"
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
                  In this section you will hear all about our services. You can
                  ask more questions if you have any.
                </h6>
              </div>
              <div className="lg:hidden">
                <h4 className="text-xl font-bold">
                  Hello and welcome to Kakushin!
                </h4>
                <h6 className="text-white my-2 h-[9rem]">
                  In this section you will hear all about our services. You can
                  ask more questions if you have any.
                </h6>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          ref={messagesEndRef}
          className={`w-full lg:h-[60%] ${
            isExpanded ? "h-[30rem]" : "h-[14rem]"
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
        </div>

        {/* Desktop view: inline question buttons */}
        {!isMobile && (
          <div className="mt-10 flex flex-wrap gap-4 justify-center mb-4 mx-3">
            {Object.keys(questionsAndResponses).length > 0 ? (
              Object.keys(questionsAndResponses).map((question, index) => (
                <button
                  key={index}
                  onClick={(e) => handleUserMessage(question, e)}
                  className={`px-4 py-2 text-[#DCE0F9] rounded-full shadow  ${
                    isThinking
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-[#404559] hover:bg-[#576685] text-[#DCE0F9]"
                  }`}
                  disabled={isThinking}
                >
                  {question}
                </button>
              ))
            ) : (
              <p>Loading questions...</p>
            )}
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
                  {Object.keys(questionsAndResponses).length > 0 ? (
                    Object.keys(questionsAndResponses).map(
                      (question, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            handleUserMessage(question, e);
                            setShowPopup(false);
                          }}
                          className="px-4 py-2 border rounded-full shadow bg-[#2E323B] hover:bg-[#464e5f] text-[#E1E4EB] hover:text-[#bec0c7]"
                          disabled={isThinking}
                        >
                          {question}
                        </button>
                      )
                    )
                  ) : (
                    <p className="text-white">Loading questions...</p>
                  )}
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

      <aside className="w-full lg:w-[27.5%] px-4 md:px-10 py-4 h-full overflow-y-auto custom-scrollbar bg-[#161B29]">
        <h2 className="titleTextLG text-center mx-5 mb-14 lg:mb-5 text-gray-300 mt-4">
          What We Do
        </h2>
        <OurServices />
      </aside>
    </>
  );
}
