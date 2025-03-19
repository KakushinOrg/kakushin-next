"use client";

import { useState, useEffect, useRef } from "react";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";
import Navbar from "@/app/components/Navbar";
import OurProjects from "@/app/landing_page/OurProjects";
import BlogPostCarousel from "../ProjectsCarousel/EmblaCarousel";

export default function IndustryVerticalChat() {
  const [messages, setMessages] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);

  const questionsAndResponses = {
    "How can Kakushin help startups develop and scale their products efficiently?":
      "At Kakushin, we specialize in transforming ideas into scalable, market-ready products. Our approach includes AI-driven market analysis, proof-of-concept development, and strategic roadmap creation to guide startups from ideation to execution. Whether you're developing an MVP or looking to optimize an existing product, we provide full-stack development, API integration, DevOps, and expert QA services to ensure efficiency and reliability. Our Elevate12 program further supports startups by offering mentorship, funding strategies, and product refinement to help you scale effectively.",

    "How does Kakushin leverage AI to drive innovation across industries?":
      "AI is at the core of many of our solutions, enabling businesses to streamline operations, optimize decision-making, and deliver personalized user experiences. We develop custom AI models for various applications, from predictive analytics in finance to intelligent automation in healthcare. Our expertise extends to natural language processing (NLP), computer vision, and generative AI, allowing businesses to build smarter, more adaptive systems. By integrating AI with IoT and blockchain, we create cutting-edge solutions that enhance efficiency and open new market opportunities.",

    "What role does Kakushin play in developing advanced HealthTech solutions?":
      "Kakushin is redefining healthcare through technology by integrating AI, IoT, and predictive analytics into patient care and diagnostics. We have developed solutions such as AI-driven knee health monitoring algorithms, IoT-powered remote patient monitoring, and interactive diagnostic tools for medical education. These innovations help improve patient outcomes, enhance early detection, and support healthcare professionals with real-time data insights. Our HealthTech projects focus on making healthcare more accessible, data-driven, and patient-centric.",

    "How does Kakushin support businesses in building a strong digital presence and brand identity?":
      "A strong digital presence is essential for modern businesses, and Kakushin helps brands establish and amplify their identity through AI-enhanced branding strategies, UI/UX design, and multi-channel marketing approaches. We blend AI-powered analytics with creative design to optimize customer engagement, enhance brand recognition, and position businesses effectively in their markets. From logo design to digital storytelling, our expertise ensures that brands not only stand out but also connect deeply with their target audiences.",

    "How does Kakushin support startups in integrating blockchain and Web3 technologies?":
      "Kakushin helps startups harness the power of blockchain and Web3 by developing secure, decentralized applications (dApps), smart contracts, and tokenized ecosystems. Our blockchain solutions enhance transparency, security, and efficiency in industries ranging from finance to supply chain management. Whether you need DeFi platforms or blockchain-based identity verification, we provide tailored solutions that align with your business goals. We also guide startups through regulatory compliance and strategic adoption of decentralized technologies to ensure long-term scalability.",

    "How can Kakushin help businesses leverage FinTech innovations?":
      "The financial sector is rapidly evolving, and Kakushin is at the forefront of FinTech innovation. We develop AI-powered fraud detection systems, blockchain-based payment solutions, and embedded finance platforms that empower businesses to optimize financial operations. Our expertise extends to building seamless digital wallets, peer-to-peer lending platforms, and automated investment tools that enhance financial accessibility. By integrating cutting-edge security measures and regulatory compliance frameworks, we ensure FinTech solutions that are both innovative and trustworthy.",

    "How does Kakushin contribute to the transformation of education through technology?":
      "Education is evolving, and Kakushin is driving this transformation through AI-powered learning platforms, interactive tools, and adaptive educational experiences. Our solutions include AI-based tutoring systems, gamified learning apps, and AR/VR-enhanced simulations for immersive education. We help institutions, edtech startups, and training organizations build scalable, engaging, and personalized learning environments that cater to diverse learners. By integrating data analytics and machine learning, we optimize curriculum development and student engagement strategies.",

    "How does Kakushin empower social impact initiatives and NGOs through technology?":
      "Kakushin is committed to leveraging technology for social good. We develop AI-powered data analysis tools, digital outreach platforms, and blockchain-based transparency solutions to help NGOs and social enterprises maximize their impact. Our work includes environmental sustainability projects, community development initiatives, and digital transformation for non-profits. By integrating smart data-driven solutions, we enable organizations to track progress, optimize resource allocation, and enhance engagement with their communities and stakeholders.",
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
      <main className="relative flex-1 flex flex-col justify-around items-center text-center lg:pt-0 pt-[3rem] bg-[#0A192E] px-4 md:px-8">
        <div className="w-full lg:px-4 px-2">
          <Navbar />
        </div>

        <div className="lg:mt-6 text-white">
          <h1 className="text-xl font-bold">Hello and welcome to Kakushin!</h1>
          <p className="text-white my-2">
            In This section you will can learn about the services that we
            provide, what we do you can ask more question if you have any
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
          <div ref={messagesEndRef} />
        </div>
        <div
          className="mt-10 flex flex-wrap gap-4 justify-center mb-4 mx-3 overflow-y-auto"
          style={{ maxWidth: "60%", maxHeight: "200px" }} // Adjust as needed
        >
          {Object.keys(questionsAndResponses).map((text, index) => (
            <button
              key={index}
              onClick={(e) => handleUserMessage(text, e)}
              disabled={isThinking}
              className={`w-fit px-4 py-2 border rounded-full shadow ${
                isThinking
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white hover:bg-gray-200"
              }`}
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

      <aside className="w-[27.5%] bg-[#0a192e] mr-16 p-4 border-r h-full overflow-y-auto custom-scrollbar hidden lg:block border-[#114074]">
        <h2 className="titleTextLG text-center mx-5 mb-5 text-white">
          Industry Verticals
        </h2>
        <BlogPostCarousel projects={projects} options={OPTIONS} />
        {/* <ChatList selectedCategory="industry" /> */}
      </aside>
    </>
  );
}
