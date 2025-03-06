import { useState, useEffect, useRef } from "react";
import { useBlogs } from "@/app/context/blogContext";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import "./boxMorph.css";
import AsideAboutus from "@/app/components/AsideComponents/asideAboutus";

export default function ChatList({ selectedCategory }) {
  const { blogs, loading } = useBlogs();
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredId, setHoveredId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  if (loading) {
    return <div>Loading blogs...</div>;
  }

  const categoryMap = {
    innovation: "Innovation insights",
    aboutus: "About us",
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
      {/* todo: we could put the heading here so that it just dynamically changes */}
      <h1 className="titleTextLG text-center mb-5">
        {categoryMap[selectedCategory] || ""}
      </h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <div className="space-y-4">
        {selectedCategory === "aboutus" ? (
          <AsideAboutus />
        ) : (
          <>
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((item) => (
                <div
                  key={item.id}
                  className="boxWhiteMorph relative flex items-center p-3 bg-white border rounded-2xl shadow-md w-full"
                  onMouseEnter={() => {
                    setHoveredId(item.id);
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setTimeout(() => setHoveredId(null), 500);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover transition-transform duration-300"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="font-semibold text-gray-800 w-[95%]">
                      {item.title}
                    </h3>
                    {/* Always render the full text and let CSS control the visibility */}
                    <p className="text-sm text-gray-500 blog-description w-[95%]">
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
