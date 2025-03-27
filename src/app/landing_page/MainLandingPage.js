"use client";

import { useState } from "react";
import AnimatedPopup from "../components/MainLandingPageComponents/AnimatedPopup";
import Contact from "./Contact";
import Footer from "../components/Footer";
import RightSideNavigation from "../components/MainLandingPageComponents/RightSideNavigation";
import InnovationInsightsChat from "../components/MainLandingPageComponents/InnovationInsightsChat";
import ServicesChat from "../components/MainLandingPageComponents/ServicesChat";
import AboutUsChat from "../components/MainLandingPageComponents/AboutUsChat";
import IndustryVerticalChat from "../components/MainLandingPageComponents/IndustryVerticalChat";
import BlogsChat from "../components/MainLandingPageComponents/BlogsChat";
// import { X, Menu } from "lucide-react";

export default function MainLandingPage() {
  const [showPopup, setShowPopup] = useState(true);
  // const [showSidebar, setShowSidebar] = useState(false);
  const [selectedChat, setSelectedChat] = useState("about");

  return (
    <div
      className="flex lg:flex-row flex-col relative lg:h-screen gap-12"
      style={{
        backgroundImage:
          "linear-gradient(to right, #171F2E 20%, #1A2033 70%, #171F2E 90%)",
      }}
    >
      {showPopup && (
        <AnimatedPopup
          onClose={() => setShowPopup(false)}
          onContact={(chat) => setSelectedChat(chat)}
        />
      )}
      {selectedChat === "innovation" && (
        <InnovationInsightsChat showPopup={showPopup} />
      )}
      {selectedChat === "services" && <ServicesChat />}
      {selectedChat === "about" && <AboutUsChat />}
      {selectedChat === "industry-vertical" && <IndustryVerticalChat />}
      {selectedChat === "blogs" && <BlogsChat />}

      {selectedChat === "contact" && (
        <div id="contact" className="w-full h-full relative">
          <div className="mt-2 mb-5 text-gray-600">
            <Contact />
            <Footer />
          </div>
        </div>
      )}
      <RightSideNavigation
        setSelectedChat={setSelectedChat}
        selectedChat={selectedChat}
      />
      {/* <div className="bg-white lg:hidden">
        <button
          className="lg:hidden fixed top-4 bg-gray-800 text-white p-2 rounded-full z-[1000] transition-all duration-300"
          onClick={() => setShowSidebar(!showSidebar)}
          style={{ right: showSidebar ? "calc(1rem + 2.5rem)" : "1rem" }}
        >
          {showSidebar ? <X size={24} /> : <Menu size={24} />}
        </button>

        <aside
          className={`md:w-16 bg-[#0a192e] flex flex-col items-center border-l border-[#114074] z-[999] right-0 top-0 h-full fixed transition-transform duration-300 
                ${
                  showSidebar ? "translate-x-0" : "translate-x-full"
                } lg:translate-x-0`}
        >
         
        </aside>
      </div> */}
    </div>
  );
}
