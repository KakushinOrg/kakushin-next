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

export default function ServicesChat() {
  const [messages, setMessages] = useState([]);
  const [questionsAndResponses, setQuestionsAndResponses] = useState({});
  const [generalResponses, setGeneralResponses] = useState([]); // Will be fetched from Contentful
  const [isExpanded, setIsExpanded] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    async function loadQnA() {
      const data = await FetchOurServicesQandA();
      const qnaObj = {};
      data.forEach((item) => {
        qnaObj[item.Question] = item.Answer;
      });
      setQuestionsAndResponses(qnaObj);
    }
    loadQnA();
  }, []);

  // todo: might need to add it to 1 useEffect
  useEffect(() => {
    async function loadGeneralInquiries() {
      const data = await FetchServiceGeneralInquiries();
      if (data && data.length > 0) {
        setGeneralResponses(data[0].generalInquiries);
      }
    }
    loadGeneralInquiries();
  }, []);

  const getRandomResponse = (array) =>
    array[Math.floor(Math.random() * array.length)];

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
      <main className="relative flex-1 flex flex-col justify-around items-center text-center lg:pt-0 pt-[3rem] bg-[#0A192E] px-4 md:px-8">
        <div className="w-full lg:px-4 px-2">
          <Navbar />
        </div>

        <div className="lg:mt-6 text-white">
          <h1 className="text-xl font-bold">Hello and welcome to Kakushin!</h1>
          <p className="text-white my-2">
            In this section you will hear all about our services. You can ask
            more questions if you have any.
          </p>
        </div>

        <div
          ref={messagesEndRef}
          className={`w-full ${
            isExpanded || messages.length > 0 ? "lg:h-[60%]" : "h-1/4"
          } lg:h-2/4 mt-6 p-4 overflow-auto transition-all duration-300`}
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
        </div>

        <div className="mt-10 flex flex-wrap gap-4 justify-center mb-4 mx-3">
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
          onSendMessage={handleUserMessage}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setIsExpanded(messages.length > 0)}
        />
      </main>

      <aside className="w-[27.5%] bg-[#0a192e] mr-16 p-4 border-r h-full overflow-y-auto custom-scrollbar hidden lg:block border-[#114074]">
        <h2 className="titleTextLG text-center mx-5 mb-5 text-white">
          What We Do
        </h2>
        <OurServices />
      </aside>
    </>
  );
}
