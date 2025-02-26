"use client";

import { useState, useEffect, useRef } from "react";
import ChatList from "../components/MainLandingPageComponents/ChatList";
import RightSideNavigation from "../components/MainLandingPageComponents/RightSideNavigation";
import MessageInput from "../components/MainLandingPageComponents/MessageInput";
import AnimatedPopup from "../components/MainLandingPageComponents/AnimatedPopup";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function MainLandingPage() {
    const [messages, setMessages] = useState([]);
    const [isThinking, setIsThinking] = useState(false);
    const [showPopup, setShowPopup] = useState(true);
    const [navigate, setNavigate] = useState(false);
    const router = useRouter();
    const messagesEndRef = useRef(null);
    const [showSidebar, setShowSidebar] = useState(false);

    const questionsAndResponses = {
        "Tell me more about your AI integration services.": "Our AI integration services help businesses automate tasks and optimize workflows using cutting-edge AI models.",
        "I need help with developing an MVP. What’s the process?": "We follow a structured MVP development process, starting from ideation to prototyping and testing before final launch.",
        "Can I see examples of successful projects?": "Sure! We have successfully built AI-driven platforms, SaaS solutions, and blockchain-based applications.",
        "I want to schedule a meeting to discuss my project.": "You can schedule a meeting through our booking page or contact us directly to set up a time.",
        "What are the typical costs associated with your branding services?": "Branding costs depend on the scope, but we offer flexible pricing tailored to startups and enterprises alike.",
    };

    const findClosestMatch = (input) => {
        const lowerInput = input.toLowerCase();
        for (let question of Object.keys(questionsAndResponses)) {
            if (lowerInput.includes(question.toLowerCase().slice(0, 10))) {
                return questionsAndResponses[question];
            }
        }
        return (
            <>
                Please add more details so that we can get back to you on your question.
                <a href="#contact" className="text-blue-600 underline">Contact Us</a>
            </>
        );
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleUserMessage = (text) => {
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
        <div className="flex h-screen bg-gray-100 relative">
            <main className="relative flex-1 flex flex-col justify-center items-center text-center px-8">
                {showPopup && <AnimatedPopup onClose={() => setShowPopup(false)} />}
                <h1 className="text-xl font-bold">Hello and welcome to Kakushin!</h1>
                <p className="text-gray-600 my-2">
                    I'm here to help you explore how we can boost your startup’s success
                    with our innovative solutions.
                </p>
                <div className="w-full h-2/4 mt-6 p-4 overflow-auto">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} item-start`}
                        >
                            <div
                                className={`p-2 rounded-lg w-2/5 ${msg.sender === "user"
                                    ? "bg-blue-100 text-blue-900 self-start border rounded-full"
                                    : "bg-gray-100 text-gray-900 self-end border rounded-full"
                                    }`}
                            >

                                <p><b>{msg.sender === "user" ? "" : "Kakushin AI: "}</b> {msg.text} </p>
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
                            onClick={() => handleUserMessage(text)}
                            className="px-4 py-2 bg-white border rounded-full shadow hover:bg-gray-200"
                        >
                            {text}
                        </button>
                    ))}
                </div>




                <MessageInput onSendMessage={handleUserMessage} />
            </main>

            <aside className="w-1/4 bg-white mr-16 p-4 border-r h-full overflow-y-auto hover:overflow-y-auto custom-scrollbar hidden md:block">
                <ChatList />
            </aside>
            <div className="bg-white">
                <button
                    className="md:hidden fixed top-4 right-4 bg-gray-800 text-white p-2 rounded-full z-[1000]"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    {showSidebar ? <X size={24} /> : <Menu size={24} />}
                </button>

                <aside
                    className={`w-16 bg-white flex flex-col items-center border-l z-[999] right-0 top-0 h-full fixed transition-transform duration-300 
                ${showSidebar ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
                >
                    <RightSideNavigation />
                </aside>
            </div>


        </div>
    );
}
