"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarouselArrowButton";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import Link from "next/link";
import { BLOCKS } from "@contentful/rich-text-types";

const extractText = (richTextDocument) => {
  const texts = [];
  if (richTextDocument && richTextDocument.content) {
    richTextDocument.content.forEach((node) => {
      if (node.nodeType === BLOCKS.PARAGRAPH) {
        texts.push(node.content.map((n) => n.value).join(" "));
      }
    });
  }
  return texts.join(" ");
};

const truncateWords = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};

const BlogCarousel = (props) => {
  const { blogs, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="blog-embla">
      <div className="blog-embla__viewport px-4" ref={emblaRef}>
        <div className="blog-embla__container my-4">
          {blogs.map((blog, index) => {
            const plainTextBody = extractText(blog.body);
            const truncatedBody = truncateWords(plainTextBody, 20);

            return (
              <div className="blog-embla__slide" key={index}>
                <div className=" bg-gray-100/80 p-6 rounded-lg shadow-md h-full flex flex-col justify-between transform transition-transform duration-300 hover:scale-105">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={300}
                    height={150}
                    className="blog-embla__image rounded-md mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                  <p className="text-sm mb-4">{truncatedBody}</p>
                  <Link href={`/blogs/${blog.slug}`} className="text-blue-500 font-semibold mt-auto ">
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="blog-embla__controls px-4">
        <div className="blog-embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="blog-embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`blog-embla__dot ${index === selectedIndex ? 'blog-embla__dot--selected' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
