"use client";

import { useEffect, useState } from "react";
import AnimatedPopup from "../components/MainLandingPageComponents/AnimatedPopup";
import Contact from "./Contact";
import Footer from "../components/Footer";
import RightSideNavigation from "../components/MainLandingPageComponents/RightSideNavigation";
import { X, Menu } from "lucide-react";
import UnifiedComponent from "../components/MainLandingPageComponents/UnifiedComponent";

export default function MainLandingPage() {
  const [showPopup, setShowPopup] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedChat, setSelectedChat] = useState("innovation");

  useEffect(() => {
      setSelectedChat("innovation")
      }, []);

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

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {showPopup && <AnimatedPopup onClose={() => setShowPopup(false)} />}
      {selectedChat === "contact" ? (
        <div className="w-full h-full relative">
          <p className="mt-2 mb-5 text-gray-600">
            <Contact />
            <Footer />
          </p>
        </div>
      ) : (
        <UnifiedComponent key={selectedChat} title={selectedChat} generalResponses={generalResponses} funResponses={funResponses} serviceKeywords={serviceKeywords} />
      )}

      <div className="bg-white">
        <button
          className="lg:hidden fixed top-4 bg-gray-800 text-white p-2 rounded-full z-[1000] transition-all duration-300"
          onClick={() => setShowSidebar(!showSidebar)}
          style={{ right: showSidebar ? "calc(1rem + 2.5rem)" : "1rem" }}
        >
          {showSidebar ? <X size={24} /> : <Menu size={24} />}
        </button>

        <aside
          className={`md:w-16 bg-white flex flex-col items-center border-l z-[999] right-0 top-0 h-full fixed transition-transform duration-300 
                ${showSidebar ? "translate-x-0" : "translate-x-full"
            } lg:translate-x-0`}
        >
          <RightSideNavigation setSelectedChat={setSelectedChat} />
        </aside>
      </div>
    </div>
  );
}
