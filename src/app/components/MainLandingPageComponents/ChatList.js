"use client";

import { useState } from "react";
import { useBlogs } from "@/app/context/blogContext";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import "./boxMorph.css";
import AsideAboutus from "@/app/components/AsideComponents/asideAboutus";

export default function ChatList({ selectedCategory }) {
  const { blogs, loading } = useBlogs();
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) {
    return <div>Loading blogs...</div>;
  }

  const categoryMap = {
    innovation: "Innovation Insights",
    aboutus: "About Us",
    services: "Our Services",
    industry: "Industry Vertical",
    blogs: "Blogs",
  };

  const formattedBlogs = blogs.map((blog) => ({
    id: blog.blogID,
    title: blog.title,
    category: blog.category?.toLowerCase(),
    description: documentToPlainTextString(blog.blogBody),
    slug: blog.slug,
    image: blog.blogMedia.fields.file.url.startsWith("//")
      ? `https:${blog.blogMedia.fields.file.url}`
      : blog.blogMedia.fields.file.url,
  }));

  const filteredBlogs = formattedBlogs.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1 className="text-xl mb-3">
        {categoryMap[selectedCategory] || "Innovation Insights"}
      </h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <div className="space-y-4">
        {/* Show different content based on selected category */}
        {selectedCategory === "aboutus" ? (
          <AsideAboutus />
        ) : (
          <>
            {/* Show filtered blogs for all other categories */}
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((item) => (
                <div
                  key={item.id}
                  className="boxWhiteMorph relative bg-white shadow-lg rounded-3xl flex items-center p-3 w-full cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 ml-4">
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 description">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No results found.</p>
            )}
          </>
        )}
      </div>
    </>
  );
}
