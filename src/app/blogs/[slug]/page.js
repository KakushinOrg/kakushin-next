import { fetchBlogs } from "@/app/lib/getBlogData";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

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
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
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
