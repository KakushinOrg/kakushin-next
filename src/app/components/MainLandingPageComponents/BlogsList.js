import { useState, useEffect } from "react";
import "./boxMorph.css";
import { fetchBlogs } from "@/app/lib/getBlogData";
export default function BlogsList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState([]);

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

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1 className="titleTextLG text-center mb-5">Our Blogs</h1>

      <div className="space-y-4 md:px-20 px-5 py-4">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog.blogID}
              className="boxWhiteMorph relative flex flex-col bg-white border rounded-[27px] shadow-md"
            >
              {/* Blog Media (Image) */}
              {blog.blogMedia &&
              blog.blogMedia.fields &&
              blog.blogMedia.fields.file ? (
                <img
                  src={blog.blogMedia.fields.file.url}
                  alt={blog.title}
                  className="w-full h-auto mx-auto object-contain rounded-[25px] transition-transform duration-300"
                />
              ) : (
                <p className="text-gray-400">No Image Available</p>
              )}

              {/* Blog Title */}
              <p className="text-lg font-semibold text-center mt-2">
                {blog.title}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </>
  );
}
