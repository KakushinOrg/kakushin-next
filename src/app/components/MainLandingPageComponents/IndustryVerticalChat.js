"use client";

import { useState, useEffect, useRef } from "react";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";
import Navbar from "@/app/components/Navbar";
import OurProjects from "@/app/landing_page/OurProjects";
import BlogPostCarousel from "../ProjectsCarousel/EmblaCarousel";
import { motion, AnimatePresence } from "framer-motion";

export default function IndustryVerticalChat() {
  const [messages, setMessages] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Mobile detection and modal state
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
  let projects = [
    {
      title: "RAID",
      src: "/images/Projects/raid.png",
      description:
        "RAID is an AI safety tool that monitors models in real-time, detecting and managing rogue behaviors to ensure reliable performance. It supports popular language models like GPT-4 and LLaMA, offering essential protection for applications in customer service, content generation, and more.",
    },
    {
      title: "Dinabite",
      src: "/images/Projects/dinabite.jpg",
      description:
        "Dinabite makes social media management easy for small businesses, providing AI-powered tools to streamline posting, scheduling, and cross-platform sharing. It keeps all your messages and posts in one place and simplifies engagement, so you can focus on growing your business.",
    },
    {
      title: "My BNB",
      src: "/images/Projects/myBnb.png",
      description:
        "Mybnb offers seamless food delivery, personalized recommendations, and exclusive guest services. With tools for hosts to manage multiple locations, every stay becomes a comfortable and unique experience.",
    },
    {
      title: "L3arn",
      src: "/images/Projects/l3arn.png",
      description:
        "L3arn is an all-in-one educational platform powered by AI, connecting students with expert tutors and interactive learning tools. It offers personalized tutoring, collaborative sessions, and smart resources to make learning engaging and effective.",
    },
    {
      title: "Debate-z",
      src: "/images/Projects/debate.png",
      description:
        "Debatez is an interactive platform where users join debates on diverse topics every 30 minutes. With profile and social features, it’s perfect for connecting with like-minded individuals while engaging in lively, time-boxed discussions.",
    },
    {
      title: "Kinex AI",
      src: "/images/Projects/kinexaiApp.png",
      description:
        "Kinex AI is pioneering biomechanical analysis with advanced technology, offering real-time insights into muscle movement and performance. Designed for athletes and researchers, Kinex AI’s Medical Sleeve delivers precision feedback to enhance training and recovery.",
    },
    {
      title: "My Sizer",
      src: "/images/Projects/mySizer.png",
      description:
        "MySizer uses advanced algorithms to deliver a perfect fit, transforming your measurements into a personalized size guide across brands and styles. Shop with confidence, knowing each fit feels tailored just for you.",
    },
    {
      title: "Riddl3",
      src: "/images/Projects/riddl3.png",
      description:
        "Riddl3 is a brain-teasing app offering daily riddles and challenges to test your wit. Compete on the leaderboard, solve riddles, and share your progress with friends for a fun and engaging mental workout.",
    },
    {
      title: "Urban",
      src: "/images/Projects/urban.png",
      description:
        "Urban is a lifestyle app that curates personalized experiences in city environments. It helps users discover local events, exclusive dining options, and hidden gems, making urban exploration easy and enriching.",
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

  const OPTIONS = { slidesToScroll: "auto" };

  return (
    <>
      <main className="relative flex-1 flex flex-col justify-around items-center text-center lg:pt-0 pt-[1rem] px-4 md:px-8">
        <div className="w-full lg:px-4 px-2">
          <Navbar />
        </div>
        <AnimatePresence>
          {messages.length === 0 && (
            <motion.div
              key="Industry-vertical-message"
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
                  In this section you can learn about the services that we
                  provide, what we do, and you can ask more questions if you
                  have any.
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
          <div ref={messagesEndRef} />
        </div>

        {/* Desktop view: inline question buttons */}
        {!isMobile && (
          <div
            className="mt-10 flex flex-wrap gap-4 justify-center mb-4 mx-3 overflow-y-auto"
            style={{ maxWidth: "60%", maxHeight: "200px" }}
          >
            {Object.keys(questionsAndResponses).map((text, index) => (
              <button
                key={index}
                onClick={(e) => handleUserMessage(text, e)}
                disabled={isThinking}
                className={`w-fit px-4 py-2 rounded-full shadow ${
                  isThinking
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#404559] hover:bg-[#576685] text-[#DCE0F9]"
                }`}
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

      <aside className="w-full lg:w-[27.5%] px-10 py-4 h-full overflow-y-auto custom-scrollbar bg-[#161B29]">
        <h2 className="titleTextLG text-center mx-5 mb-14 lg:mb-5 text-gray-300">
          Industry Verticals
        </h2>
        <BlogPostCarousel projects={projects} options={OPTIONS} />
        {/* <ChatList selectedCategory="industry" /> */}
      </aside>
    </>
  );
}
