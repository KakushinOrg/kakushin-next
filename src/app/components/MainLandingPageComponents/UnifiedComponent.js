"use client";

import { useState, useEffect, useRef } from "react";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";
import Navbar from "@/app/components/Navbar";
import { FetchWhoWeAreQandA } from "@/app/lib/getBlogData";
import {
  FetchOurServicesQandA,
  FetchServiceGeneralInquiries,
} from "@/app/lib/getBlogData";

export default function UnifiedComponent({
  title,
  generalResponses,
  funResponses,
  serviceKeywords,
}) {
  const [messages, setMessages] = useState([]);
  const [questionsAndResponses, setQuestionsAndResponses] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [pageInfo, setPageInfo] = useState([]);

  useEffect(() => {
    setPageInfo(getPageData(title));
    console.log("Page clicked Title: ", pageInfo.title);
    loadQnA();
  }, []);

  const getRandomResponse = (array) =>
    array[Math.floor(Math.random() * array.length)];

  const pageData = [
    {
      title: "about",
      name: "About Us",
      description:
        "About Us In this section you will hear all about us and what we do. You can ask more questions if you have any.",
    },
    {
      title: "blogs",
      name: "Blogs",
      description:
        "Blogs In this section you can learn about the services that we provide. Ask any questions if you have any!",
    },
    {
      title: "innovation",
      name: "Innovation and Insights",
      description:
        "Innovation Insights In this section you can learn about the services that we provide. Ask any questions if you have any!",
    },
    {
      title: "services",
      name: "Services",
      description:
        "Services In this section you can learn about the services that we provide. Ask any questions if you have any!",
    },
    {
      title: "industry",
      name: "industry-vertical",
      description:
        "industry-vertical In this section you can learn about the services that we provide. Ask any questions if you have any!",
    },
  ];
  const getPageData = (pageTitle) => {
    return (
      pageData.find((page) => page.title === pageTitle) || {
        title: "notitle",
        name: "Page Not Found",
        description: "No description available.",
      }
    );
  };

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

  async function loadQnA() {
    let data;
    if (title == "services") {
      data = await FetchOurServicesQandA();
    } else if (title == "about") {
      data = await FetchWhoWeAreQandA();
    } else {
      data = await FetchWhoWeAreQandA();
    }

    const qnaObj = {};
    data.forEach((item) => {
      qnaObj[item.Question] = item.Answer;
    });
    setQuestionsAndResponses(qnaObj);
  }

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
  const messagesEndRef = useRef(null);
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

  return (
    <>
      <main className="relative flex-1 flex flex-col justify-around items-center text-center lg:pt-0 pt-[3rem]">
        <div className="w-full lg:px-4 px-2">
          <Navbar />
        </div>

        <div className="lg:mt-6">
          <h1 className="text-xl font-bold">Hello and welcome to Kakushin!</h1>
          <p className="text-gray-600 my-2">{pageInfo.description}</p>
        </div>

        <div
          ref={chatContainerRef}
          className={`w-full ${
            isExpanded || messages.length > 0 ? "lg:h-[60%]" : "h-1/4"
          } lg:h-2/4 mt-6 py-4 px-4 2xl:px-20 lg:px-12 overflow-auto transition-all duration-300`}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              } items-start`}
            >
              <div
                className={`p-2 rounded-lg w-2/5 ${
                  msg.sender === "user"
                    ? "bg-blue-100 text-blue-900 border rounded-full"
                    : "bg-gray-100 text-gray-900 border rounded-full"
                }`}
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

        <div className="mt-10 flex flex-wrap gap-4 justify-center mb-4 mx-3 max-h-[150px] max-w-[70rem] overflow-y-auto custom-scrollbar">
          {Object.keys(questionsAndResponses).length > 0 ? (
            Object.keys(questionsAndResponses).map((question, index) => (
              <button
                key={index}
                onClick={(e) => handleUserMessage(question, e)}
                className={`px-4 py-2 border text-gray-800 text-[14px] rounded-full shadow ${
                  isThinking
                    ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-gray-200"
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

        <MessageInput
          onClear={clearMessages}
          hasMessages={messages.length > 0}
          onSendMessage={handleUserMessage}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setIsExpanded(messages.length > 0)}
        />
      </main>

      <aside className="w-[30%] bg-white mr-16 p-4 border-r h-full overflow-y-auto custom-scrollbar hidden lg:block">
        <ChatList selectedCategory={title} key={title} />
      </aside>
    </>
  );
}
