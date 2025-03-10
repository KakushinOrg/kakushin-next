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

  const leftColumn = [];
  const rightColumn = [];
  filteredBlogs.forEach((item, index) => {
    if (index % 2 === 0) {
      leftColumn.push(item);
    } else {
      rightColumn.push(item);
    }
  });

  return (
    <>
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
              <div className="flex gap-4">
                {/* Left Column */}
                <div className="flex-1 space-y-4">
                  {leftColumn.map((item) => (
                    <div
                      key={item.id}
                      className="boxWhiteMorph relative flex flex-col p-3 bg-white border rounded-2xl shadow-md"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 object-cover rounded-lg transition-transform duration-300 mb-3"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 blog-description">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Right Column */}
                <div className="flex-1 space-y-4">
                  {rightColumn.map((item) => (
                    <div
                      key={item.id}
                      className="boxWhiteMorph relative flex flex-col p-3 bg-white border rounded-2xl shadow-md"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 object-cover rounded-lg transition-transform duration-300 mb-3"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 blog-description">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-500">No results found.</p>
            )}
          </>
        )}
      </div>
    </>
  );
}
