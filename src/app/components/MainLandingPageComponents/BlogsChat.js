"use client";

import { useState, useEffect, useRef } from "react";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";
import Navbar from "@/app/components/Navbar";

export default function BlogsChat() {
  const [messages, setMessages] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);

  const questionsAndResponses = {
    "What are the biggest technology trends shaping startups today?":
      "The startup ecosystem is evolving rapidly, driven by key technology trends that are reshaping industries. Artificial Intelligence (AI) and Machine Learning are enhancing automation, predictive analytics, and customer personalization. Blockchain and Web3 are revolutionizing finance, data security, and decentralized applications. The Internet of Things (IoT) is enabling smarter, connected devices in healthcare, logistics, and smart cities. Sustainable innovation is also gaining traction, with businesses adopting green technologies, circular economy models, and eco-friendly solutions. The rise of digital transformation in all sectors means startups that embrace these technologies early gain a significant competitive advantage.",

    "How is AI transforming industries beyond tech startups?":
      "AI is no longer just a tool for tech companies—it’s driving innovation across diverse industries. In healthcare, AI-powered diagnostics and predictive analytics are improving patient outcomes. Finance is leveraging AI for fraud detection, automated trading, and personalized banking services. Retail and e-commerce are using AI-driven recommendation engines and chatbots to enhance customer experiences. AI is also optimizing manufacturing with smart automation and predictive maintenance. Even in education, AI-based learning platforms are personalizing student experiences. Startups that integrate AI into traditional sectors are driving some of the most significant industry transformations today.",

    "What role does sustainability play in modern startups?":
      "Sustainability is becoming a core business strategy rather than just a trend. Consumers and investors are increasingly favoring startups that prioritize eco-friendly solutions, carbon reduction, and ethical supply chains. Green technologies, such as AI-powered energy optimization, biodegradable packaging, and circular economy business models, are becoming critical areas for innovation. Governments are also providing incentives and funding for startups working on clean energy and sustainable practices. Companies that integrate sustainability into their business model from the start not only future-proof their operations but also attract funding and build stronger brand loyalty.",

    "What are the major challenges startups face in today’s digital economy?":
      "While technology opens up vast opportunities, startups also face significant challenges. Market saturation means startups must differentiate themselves with unique value propositions. Access to funding is becoming more competitive, requiring clear business models and scalable strategies. Data privacy regulations such as GDPR and AI ethics concerns require businesses to adopt transparent, compliant practices. Additionally, talent shortages in key areas like AI, blockchain, and cybersecurity make hiring the right team more challenging. Despite these hurdles, startups that focus on innovation, agility, and customer-centric solutions continue to thrive in the digital economy.",
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

  const chatContainerRef = useRef(null);

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
      <main className="relative flex-1 flex flex-col justify-around items-center text-center lg:pt-0 pt-[3rem]">
        <div className="w-full lg:px-4 px-2">
          <Navbar />
        </div>

        <div className="lg:mt-6">
          <h1 className="text-xl font-bold">Hello and welcome to Kakushin!</h1>
          <p className="text-gray-600 my-2">
            In this section you can learn about the services that we provide.
            Ask any questions if you have any!
          </p>
        </div>

        <div
          ref={chatContainerRef}
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

        <MessageInput
          onSendMessage={handleUserMessage}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setIsExpanded(messages.length > 0)}
        />
      </main>

      <aside className="w-[25%] bg-white mr-16 p-4 border-r h-full overflow-y-auto custom-scrollbar hidden lg:block">
        <ChatList selectedCategory="blogs" />
      </aside>
    </>
  );
}
