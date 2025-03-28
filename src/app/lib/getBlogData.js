// todo: rename file to something like getContentfulData.js
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

export const FetchWhoWeAreQandA = async () => {
  const res = await client.getEntries({
    content_type: "whoWeAreQandA",
    select: "fields.question,fields.answer",
  });

  return res.items.map((item) => ({
    QuestionID: item.sys.id,
    Question: item.fields.question,
    Answer: item.fields.answer,
  }));
};

export const FetchOurServicesQandA = async () => {
  const res = await client.getEntries({
    content_type: "ourServicesQandA",
    select: "fields.title,fields.answer",
  });

  return res.items.map((item) => ({
    QuestionID: item.sys.id,
    Question: item.fields.title,
    Answer: item.fields.answer,
  }));
};

export const FetchServiceGeneralInquiries = async () => {
  const res = await client.getEntries({
    content_type: "generalServiceRelatedInquiries",
    select: "fields.generalInquiries",
  });

  return res.items.map((item) => ({
    id: item.sys.id,
    generalInquiries: item.fields.generalInquiries,
  }));
};
