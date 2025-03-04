"use client";

import { useBlogs } from "@/app/context/blogContext";
import BlogsCarousel from "../components/BlogsCarousel/BlogsCarousel";

export default function BlogsSection() {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return <div>Loading blogs...</div>;
  }

  const formattedBlogs = blogs.map((blog) => ({
    id: blog.blogID,
    title: blog.title,
    body: blog.blogBody,
    slug: blog.slug,
    image: blog.blogMedia.fields.file.url.startsWith("//")
      ? `https:${blog.blogMedia.fields.file.url}`
      : blog.blogMedia.fields.file.url,
  }));

  return (
    <section className="py-16 sm:px-20" id="blogs">
      <div className="w-full flex flex-col md:mb-20 mb-10">
        <h2 className="largeText mb-4 text-center">Latest news</h2>
        <h2 className="titleTextLG text-center">Blogs</h2>
      </div>
      <BlogsCarousel blogs={formattedBlogs} />
    </section>
  );
}
