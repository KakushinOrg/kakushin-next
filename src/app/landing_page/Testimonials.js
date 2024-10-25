"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote_left from "/public/icons/quote-left.svg";
import quote_right from "/public/icons/quote-right.svg";
import TestimonialCarousel from "../components/TestimonialCarousel/testimonialCarousel";

const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-0 md:top-1/2 -right-10 z-10 transform -translate-y-1/2 cursor-pointer"
      onClick={onClick}
    >
      <Image src="/icons/arrow-right.svg" alt="next" width={70} height={70} />
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute -bottom-[50px] md:bottom-[30%] -left-10 z-10 transform -translate-y-1/2 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src="/icons/arrow-left.svg"
        alt="previous"
        width={70}
        height={70}
      />
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "As a female founder, I've found working with Kakushin to be refreshingly empowering. Their innovative approach and steadfast support have taken my brand to new heights. Kakushin values the voices of female founders, making the collaboration both inspiring and empowering. Partnering with them has been a truly exceptional experience.",
      name: "Aisha",
    },
    {
      text: "Working with Kakushin was like embarking on a creative adventure. Their cool ideas and artsy vibes gave our brand a fresh new look, making it super relatable. The support they gave us throughout was solid, showing they're all about surpassing expectations.",
      name: "Ramneek",
    },
    {
      text: "Kakushin's approach is refreshingly client-focused. They totally got what our brand was all about, and the rebrand they pulled off really hit home with our audience. The smart ideas they tossed our way made the whole process a breeze.",
      name: "Ali",
    },
    {
      text: "My tenure as a full-stack developer with Kakushin is marked by a profound dedication to excellence. Across diverse projects encompassing app, extension, and website development, Kakushin upholds rigorous standards of innovation and precision.",
      name: "Zeeshan",
    },
    {
      text: "Kakushin's work was next level. Every design they did was spot-on, and their strategic guidance was smart. Their support team was just a message away, always there to guide us through the rebranding journey.",
      name: "Waseem",
    },
    {
      text: "The Kakushin squad put us first. They really listened to what we needed, and their support was super personalized. Their creative skills are off the charts, and our new brand identity is the coolest.",
      name: "James",
    },
    {
      text: "Kakushin isn't just about making things look good – they're all about crafting a brand story. Their consistent support and client-first approach made us feel valued. The quality of their work has set a new standard for us.",
      name: "Nick",
    },
    {
      text: "Working alongside Kakushin on our brand makeover was akin to embarking on a creative odyssey. Their innovative thinking and artistic approach breathed new life into our brand, making it more relevant and engaging. The support we received throughout the journey was steadfast, showcasing their dedication to not just meet, but exceed client expectations.",
      name: "Andreas",
    },
    {
      text: "Kakushin's client-centric approach was a breath of fresh air. They delved into the essence of our brand, engaged with our vision, and delivered a rebranding that resonates profoundly with our target audience. Their unwavering support and insightful suggestions made the process seamless and rewarding.",
      name: "Jenifer",
    },
    {
      text: "The quality of work delivered by Kakushin was unmatched. Every design element was meticulously crafted, and the strategic direction provided was insightful. Their support team was always on hand to provide guidance, making the rebranding journey an enlightening experience.",
      name: "Emma",
    },
    {
      text: "Our experience with Kakushin was a testament to their ability to bridge visions with reality. Their creativity was not just about aesthetic appeal but about crafting a brand narrative that speaks volumes. The continual support and customer-focused approach made us feel valued, and the quality of the deliverables has set a new benchmark for us.",
      name: "Antonio",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    lazyLoad: 'ondemand', // Enable lazy loading
    responsive: [
      {
        breakpoint: 1167,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div>
    <section className="p-10 md:px-20 py-40 bg-[#F7F7F7] relative overflow-hidden">
      <Image
        className="absolute -top-[10%] left-[1rem] w-auto rotate-[20deg] lg:h-[250px] md:h-[140px] hidden md:block"
        src={quote_right}
        alt="quote-right"
      />
      <Image
        className="absolute -top-[10%] right-[1rem] -rotate-[20deg] lg:h-[250px] md:h-[140px] w-auto hidden md:block"
        src={quote_left}
        alt="quote-left"
      />
      {/* text */}
      <div className="text-center mb-14 md:mb-32">
        <h1 className="largeText mb-4">Testimonials</h1>
        <h2 className="titleTextLG">What our clients say</h2>
      </div>
      {/* carousel */}
      <TestimonialCarousel />
    </section>
    </div>
  );
};

export default Testimonials;
