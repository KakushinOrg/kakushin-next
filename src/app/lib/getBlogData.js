require("dotenv").config();
import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const fetchBlogs = async () => {
  const res = await client.getEntries({
    content_type: "blogPost",
    select: "fields.slug,fields.blogMedia,fields.title,fields.blogBody",
  });

  return res.items.map((item) => ({
    blogID: item.sys.id,
    slug: item.fields.slug,
    blogMedia: item.fields.blogMedia,
    title: item.fields.title,
    blogBody: item.fields.blogBody,
  }));
};

export default fetchBlogs;
