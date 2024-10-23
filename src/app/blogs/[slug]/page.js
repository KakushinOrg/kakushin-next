import { fetchBlogs } from "@/app/lib/getBlogData";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blogData = await fetchBlogs();
  const blogPost = blogData.find((blog) => blog.slug === slug);

  if (!blogPost) {
    return { title: "Blog not found" };
  }

  const { title, blogMedia, publishedDate, author } = blogPost;
  const imageUrl = blogMedia.fields.file.url.startsWith("//")
    ? `https:${blogMedia.fields.file.url}`
    : blogMedia.fields.file.url;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": author,
    },
    "datePublished": publishedDate,
    "url": `https://www.kakushin.io/blogs/${slug}`,
  };

  return {
    title,
    description: `${title} - Kakushin Blog Post`,
    openGraph: {
      title,
      description: `${title} - Kakushin Blog Post`,
      images: [imageUrl],
      url: `https://www.kakushin.io/blogs/${slug}`,
    },
    additionalMetaTags: [
      {
        name: "application-name",
        content: "Kakushin",
      },
    ],
    jsonLd: blogSchema,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  const blogData = await fetchBlogs();
  const blogPost = blogData.find((blog) => blog.slug === slug);

  if (!blogPost) {
    return <div>Blog not found</div>;
  }

  const { title, blogMedia, blogBody } = blogPost;
  const imageUrl = blogMedia.fields.file.url.startsWith("//")
    ? `https:${blogMedia.fields.file.url}`
    : blogMedia.fields.file.url;

  return (
    <div className="mx-auto px-[4rem] lg:px-[13rem] 2xl:px-[15rem] py-10 mt-16 md:mt-32">
      <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>
      <Image
        src={imageUrl}
        width={500}
        height={400}
        alt={title}
        className="w-[90%] h-full lg:h-[35rem] mb-6 mx-auto object-contain"
      />
      <div className="prose max-w-full">
        {documentToReactComponents(blogBody)}
      </div>
    </div>
  );
}
