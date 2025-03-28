// require("dotenv").config();
// import { createClient } from "contentful";

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

// export const fetchInnovationInsights = async () => {
//   const res = await client.getEntries({
//     content_type: "innovationInsights",
//     select: "fields.slug,fields.blogMedia,fields.title,fields.blogBody",
//   });

//   return res.items.map((item) => ({
//     blogID: item.sys.id,
//     slug: item.fields.slug,
//     blogMedia: item.fields.blogMedia,
//     title: item.fields.title,
//     blogBody: item.fields.blogBody,
//   }));
// };

// export default fetchInnovationInsights;
