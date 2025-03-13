import { useState, useEffect } from "react";
import "./boxMorph.css";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { useBlogs } from "@/app/context/blogContext";

export default function BlogsList() {
  const { blogs, loading } = useBlogs();
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch blogs on component mount
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const blogData = await fetchBlogs();
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    getBlogs();
  }, []);

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
      <h1 className="titleTextLG text-center mb-5">Our Blogs</h1>
      <>
        {filteredBlogs.length > 0 ? (
          <div className=" gap-4">
            {/* Left Column */}
            <div className=" space-y-4">
              {filteredBlogs.map((item) => (
                <div
                  key={item.id}
                  className="boxWhiteMorph relative flex flex-col p-3 bg-white border rounded-2xl shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 mb-3"
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
    </>
  );
}
