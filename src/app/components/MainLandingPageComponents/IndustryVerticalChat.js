"use client";

import { useState, useEffect, useRef } from "react";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";
import Navbar from "@/app/components/Navbar";
import BlogPostCarousel from "../ProjectsCarousel/EmblaCarousel";
import { motion, AnimatePresence } from "framer-motion";

export default function IndustryVerticalChat() {
  const [messages, setMessages] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const questionsAndResponses = {
    "How can Kakushin help my startup grow faster?":
      "By focusing on what matters most: traction, clarity, and scalability. We help you make the right tech and brand decisions to support rapid, sustainable growth and avoid expensive mistakes early on.",
    "How do you use AI to solve business challenges?":
      "We turn your data into actions. Whether it’s automating tasks, predicting trends, or improving user experiences, we build AI tools that make your operations smarter, not just flashier.",
    "Do you work with healthcare or medtech companies?":
      "Yes, we’ve worked with health tech startups and medical platforms. We’ve designed patient dashboards, wearable integration tools, and HIPAA-aligned systems. We understand the importance of compliance and usability in health innovation.",
    "How can you help me build a strong digital brand?":
      "We align design with emotion and purpose. We help you define your story, stand out visually, and stay consistent across platforms so your users remember you and come back for more.",
    "Do you work with NGOs or social impact startups?":
      "Absolutely! We love working on purpose-driven missions. We’ve helped nonprofits and impact-driven startups use digital tools to grow their reach, funding, and influence. Let’s amplify your cause together.",
  };

  const generalResponses = [
    "Thanks for reaching out! Can you specify a bit more about which service you’re interested in?",
    "I’d love to help with that! Could you please provide more details about your project or the specific service?",
    "Absolutely, we can assist with that. What’s your vision?",
    "Our services cover everything from AI integration to full-scale development. What aspect interests you most?",
    "Which part of your business are you looking to enhance?",
  ];

  const funResponses = [
    "Honey never spoils! Archaeologists found pots of it in tombs that are still edible after 3000 years.",
    "A day on Venus is longer than its year!",
    "Octopuses have three hearts and blue blood.",
    "Shortest war? Britain vs. Zanzibar — 38 minutes long.",
    "The Eiffel Tower grows taller in summer by up to 15 cm.",
  ];

  const projects = [
    {
      title: "RAID",
      src: "/images/Projects/raid.png",
      description:
        "RAID monitors models in real-time, detecting rogue behaviors. It supports GPT-4, LLaMA, and more.",
    },
    {
      title: "Dinabite",
      src: "/images/Projects/dinabite.jpg",
      description:
        "Dinabite makes social media management easy with AI tools for posting, scheduling, and engagement.",
    },
    {
      title: "My BNB",
      src: "/images/Projects/myBnb.png",
      description:
        "Mybnb offers food delivery and guest services with host tools for managing multiple locations.",
    },
  ];

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
    setMessages((prev) => [...prev, { text, sender: "user" }]);
    setIsThinking(true);
    setTimeout(() => {
      setIsThinking(false);
      const response = findClosestMatch(text);
      setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
    }, 1500);
  };

  const clearMessages = () => {
    setMessages([]);
    setIsExpanded(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("chatMessages");
    }
  };

  return (
    <>
      <section
        id="IndustryVertical"
        className="relative flex-1 md:h-full h-screen flex flex-col justify-around items-center text-center lg:pt-0 pt-[1rem] px-4 md:px-8"
      >
        <div className="w-full lg:px-4 px-2">
          <Navbar />
        </div>

        <AnimatePresence>
          {messages.length === 0 && (
            <motion.div
              key="Industry-intro"
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
                  Hi there! Welcome to Kakushin, your partner in innovation.
                </h4>
                <h6 className="text-white my-2 max-w-[65ch] mx-auto">
                  We help startups and businesses build digital products, design
                  standout brands, and integrate AI solutions tailored to their
                  needs. Want to know how it works? Just click a question below
                  or type your own.
                </h6>
              </div>
              <div className="lg:hidden">
                <h4 className="text-xl font-bold">
                  Hi there! Welcome to Kakushin, your partner in innovation.
                </h4>
                <h6 className="text-white my-2">
                  We help startups and businesses build digital products, design
                  standout brands, and integrate AI solutions tailored to their
                  needs. Want to know how it works? Just click a question below
                  or type your own.
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
                className={`p-2 rounded-xl lg:my-[10px] my-[5px] ${
                  msg.sender === "user"
                    ? "text-gray-300 font-bold bg-[#2a3647] w-fit px-4"
                    : "text-gray-300 w-[80%] lg:w-[60%]"
                } flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                } items-start`}
              >
                <p className="w-fit">
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
              />
              <div className="bg-[#0A192E] p-6 rounded-lg shadow-lg z-10 max-w-sm mx-auto">
                <h2 className="text-xl font-bold mb-4 text-white">
                  Select a question
                </h2>
                <div className="flex flex-col gap-2 h-[30rem] overflow-y-auto">
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

        {isMobile && (
          <button
            onClick={() => setShowPopup(true)}
            className="text-white my-5 p-2 block lg:hidden border-white border-[2px] rounded-lg"
          >
            Questions
          </button>
        )}

        <MessageInput
          onClear={clearMessages}
          hasMessages={messages.length > 0}
          onSendMessage={handleUserMessage}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setIsExpanded(messages.length > 0)}
        />
      </section>

      <aside className="w-full lg:w-[27.5%] px-4 md:px-10 py-4 h-full overflow-y-auto custom-scrollbar bg-[#161B29]">
        <h2 className="titleTextLG text-center mx-5 mb-14 lg:mb-5 text-gray-300 mt-4">
          Industry Verticals
        </h2>
        <BlogPostCarousel
          projects={projects}
          options={{ slidesToScroll: "auto" }}
        />
      </aside>
    </>
  );
}
