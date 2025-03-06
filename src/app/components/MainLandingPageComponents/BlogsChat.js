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
    "Blogs Chat questions? 1":
      "At Kakushin, our AI integration services are designed to empower startups by enhancing their technological capabilities. We focus on embedding AI into various business functions such as automated customer service, data analysis, and predictive analytics. Our approach involves understanding your specific business needs, designing an AI solution that fits those needs, and then implementing the solution while ensuring seamless integration with your existing systems. This process helps in optimizing operations, improving decision-making, and creating personalized customer experiences. We also provide ongoing support to ensure the AI systems evolve with your business.",
    "Blogs Chat questions? 2":
      "Developing a Minimum Viable Product (MVP) with Kakushin involves a structured and iterative process tailored to bring your startup idea to life efficiently. First, we start with a discovery phase where we define the core functionalities that address the main customer pain points. Next, we move into the design and prototyping phase, where we create the initial version of the product with essential features. This is followed by user testing, where feedback is gathered to refine the product. After implementing the necessary adjustments, we help you launch the MVP to the market. Throughout the process, our team ensures that the MVP not only meets market needs but also stays within budget and timeline constraints.",
    "Blogs Chat questions? 3":
      "Certainly! We have a range of successful projects across various industries that showcase our expertise. For instance, we recently helped a tech startup integrate AI into their operations, resulting in a 40% increase in efficiency. Another project involved developing an MVP for a fintech company, which has now secured its second round of funding due to the product’s success. We also assisted a health tech company in redesigning their digital platform, which dramatically improved user engagement. Details of these projects are available on our website, where you can explore case studies and testimonials from our clients.",
    "Blogs Chat questions? 4":
      "We would be delighted to discuss your project and see how Kakushin can assist you. You can schedule a meeting directly through our website by selecting a date and time that works best for you. During our meeting, we will discuss your project in detail, explore your specific needs, and determine how our services can best align with your goals. Please prepare any relevant materials or questions you may have, so we can make the most of our time together.",
    "Blogs Chat questions? 4":
      "The costs associated with our branding services can vary depending on the scope and complexity of your project. Typically, our branding packages start from $5,000 for basic branding, which includes logo design, color palette, and typography. For more comprehensive services that involve full brand strategy, identity design, and marketing materials, prices can range from $10,000 to $50,000. We offer customized quotes based on your specific requirements, ensuring that we provide a solution that fits your budget and meets your branding needs. Feel free to reach out for a detailed quote tailored to your project.",
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

  return (
    <>
      <main className="relative flex-1 flex flex-col justify-around items-center text-center lg:pt-0 pt-[3rem]">
        <div className="w-full lg:px-4 px-2">
          <Navbar />
        </div>

        <div className="lg:mt-6">
          <h1 className="text-xl font-bold">Hello and welcome to Kakushin!</h1>
          <p className="text-gray-600 my-2">
            In This section you will can learn about the services that we provide, what we do you can ask
            more question if you have any
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

      <aside className="w-1/4 bg-white mr-16 p-4 border-r h-full overflow-y-auto custom-scrollbar hidden lg:block">
        <ChatList selectedCategory="blogs" />
      </aside>
    </>
  );
}
