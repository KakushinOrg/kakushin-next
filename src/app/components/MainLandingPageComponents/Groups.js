"use client";

import { useState } from "react";
import { MoreHorizontalIcon } from "lucide-react";

export default function GroupsComponent() {
    const [message, setMessage] = useState("");
    const [activeTab, setActiveTab] = useState("Groups");
    const [menuOpen, setMenuOpen] = useState(null);

    const tabContent = {
        "Groups": [
            { name: "This is a test group" },
            { name: "Can be anything just a menu" },
            { name: "Blockchain Security" },
            { name: "Data Analytics Platform" },
            { name: "Web3 Integration" },
        ]
    };

    return (

        <aside className="w-1/4 bg-white p-4 border-r overflow-auto">
            <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border rounded mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{activeTab}</h3>
            <div className="space-y-4">
                {tabContent[activeTab].map((item, index) => (
                    <div
                        key={index}
                        className="relative flex items-center p-2 border rounded shadow-sm cursor-pointer hover:bg-gray-200"
                    >
                        {activeTab === "Chat List" && (
                            <>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                                <span className="text-xs text-gray-500 absolute bottom-1 right-12">
                                    {item.time}
                                </span>
                                <div className="relative">
                                    <button
                                        onClick={() =>
                                            setMenuOpen(menuOpen === index ? null : index)
                                        }
                                        className="absolute top-1 right-2 p-2"
                                    >
                                        <MoreHorizontalIcon size={16} />
                                    </button>
                                    {menuOpen === index && (
                                        <div className="absolute right-0 mt-6 w-24 bg-white shadow-lg border rounded">
                                            <button className="w-full text-left px-3 py-1 text-sm hover:bg-gray-200">
                                                Edit
                                            </button>
                                            <button className="w-full text-left px-3 py-1 text-sm hover:bg-gray-200">
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                        {activeTab !== "Chat List" && <h3 className="font-semibold">{item.name}</h3>}
                    </div>
                ))}
            </div>
        </aside>
    );
}
