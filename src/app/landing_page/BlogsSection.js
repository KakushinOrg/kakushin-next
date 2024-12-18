import { fetchBlogs } from "@/app/lib/getBlogData";
import Image from "next/image";
import { BLOCKS } from "@contentful/rich-text-types";
import BlogsCarousel from "../components/BlogsCarousel/BlogsCarousel";
import Link from "next/link";

const extractText = (richTextDocument) => {
  const texts = [];
  richTextDocument.content.forEach((node) => {
    if (node.nodeType === BLOCKS.PARAGRAPH) {
      texts.push(node.content.map((n) => n.value).join(" "));
    }
  });
  return texts.join(" ");
};

const truncateWords = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const BlogBox = ({ blogBoxImage, blogBoxTitle, blogBoxBody, slug }) => {
  const plainTextBody = extractText(blogBoxBody);
  const truncatedBody = truncateWords(plainTextBody, 20);

  return (
    <div className="w-[20rem] h-[27rem] flex flex-col justify-left items-center shadow-md md:p-8 p-6">
      <Image
        width={250}
        height={250}
        src={blogBoxImage}
        alt={blogBoxTitle}
        className="h-[150px] w-full object-fill"
        loading="lazy" 
      />
      <div className="flex flex-col justify-left items-center gap-4 mt-2">
        <h5 className="text-lg font-semibold text-left w-full">
          {truncateWords(blogBoxTitle, 6)}
        </h5>
        <p className="text-md text-left line-clamp-5 max-w-full">
          {truncatedBody}
        </p>
      </div>
      <div className="flex justify-end items-end h-full w-full mt-4 underline font-semibold">
      <Link
          href={`/blogs/${slug}`}
          aria-label={`Read more about ${blogBoxTitle}`}
          className="underline font-semibold"
        >
          Read More about {truncateWords(blogBoxTitle, 3)}
        </Link>

      </div>
    </div>
  );
};

export default async function BlogsSection() {
  const blogData = await fetchBlogs();
  const blogs = blogData.map((blog) => ({
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
      <BlogsCarousel blogs={blogs} />

    </section>
  );
}
