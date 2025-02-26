"use client";

import { useState } from "react";
import { MoreHorizontalIcon } from "lucide-react";

export default function ChatList() {
    const [menuOpen, setMenuOpen] = useState(null);

    const chatItems = [
        {
            title: "Harnessing AI for Smarter Startup Decisions",
            description: "Explore how artificial intelligence can transform decision-making processes.",
            image: "../../icons/heart.svg",
        },
        {
            title: "Innovations Shaping Remote Operations",
            description: "Delve into the technologies and trends redefining remote work.",
            image: "../../icons/heart.svg"
        },
        {
            title: "Sustainable Practices for the Modern Enterprise",
            description: "Discuss the importance of integrating sustainability into business models.",
            image: "../../icons/heart.svg",
        },
        {
            title: "Blockchain Beyond Bitcoin",
            description: "Examine the use of blockchain technology beyond cryptocurrency.",
            image: "../../icons/heart.svg",
        },
        {
            title: "Harnessing AI for Smarter Startup Decisions",
            description: "Explore how artificial intelligence can transform decision-making processes.",
            image: "../../icons/heart.svg",
        },
        {
            title: "Innovations Shaping Remote Operations",
            description: "Delve into the technologies and trends redefining remote work.",
            image: "../../icons/heart.svg"
        },
        {
            title: "Sustainable Practices for the Modern Enterprise",
            description: "Discuss the importance of integrating sustainability into business models.",
            image: "../../icons/heart.svg",
        },
        {
            title: "Blockchain Beyond Bitcoin",
            description: "Examine the use of blockchain technology beyond cryptocurrency.",
            image: "../../icons/heart.svg",
        },
        {
            title: "Harnessing AI for Smarter Startup Decisions",
            description: "Explore how artificial intelligence can transform decision-making processes.",
            image: "../../icons/heart.svg",
        },
        {
            title: "Innovations Shaping Remote Operations",
            description: "Delve into the technologies and trends redefining remote work.",
            image: "../../icons/heart.svg"
        },
        {
            title: "Sustainable Practices for the Modern Enterprise",
            description: "Discuss the importance of integrating sustainability into business models.",
            image: "../../icons/heart.svg",
        },
        {
            title: "Blockchain Beyond Bitcoin",
            description: "Examine the use of blockchain technology beyond cryptocurrency.",
            image: "../../icons/heart.svg",
        },
    ];

    return (
        <>
            <h1 className="text-xl mb-3">Innovation Insights</h1>
            <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border rounded mb-4"
            />
            <div className="space-y-4">
                {chatItems.map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-white border rounded-2xl shadow-md">
                        {/* Image */}
                        <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg object-cover" />

                        {/* Content */}
                        <div className="flex-1 ml-4">
                            <h3 className="font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.description}</p>
                        </div>

                        {/* More Options Button */}
                        <div className="relative">
                            <button
                                onClick={() => setMenuOpen(menuOpen === index ? null : index)}
                                className="p-2"
                            >
                                <MoreHorizontalIcon size={20} className="text-gray-500" />
                            </button>
                            {menuOpen === index && (
                                <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg border rounded-lg">
                                    <button className="w-full text-left px-3 py-1 text-sm hover:bg-gray-200">
                                        Edit
                                    </button>
                                    <button className="w-full text-left px-3 py-1 text-sm hover:bg-gray-200">
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
