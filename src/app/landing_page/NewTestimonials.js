"use client";
import Image from "next/image";
import quote_left from "/public/icons/quote-left.svg";
import quote_right from "/public/icons/quote-right.svg";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const CARD_SIZE_LG = 460;
const CARD_SIZE_SM = 390;

const BORDER_SIZE = 2;
const CORNER_CLIP = 50;
const CORNER_LINE_LEN = Math.sqrt(
  CORNER_CLIP * CORNER_CLIP + CORNER_CLIP * CORNER_CLIP
);

const ROTATE_DEG = 2.5;

const STAGGER = 15;
const CENTER_STAGGER = -65;

const SECTION_HEIGHT = 700;

export const Testimonial = () => {
  const [cardSize, setCardSize] = useState(CARD_SIZE_LG);

  const [testimonials, setTestimonials] = useState(TESTIMONIAL_DATA);

  const handleMove = (position) => {
    const copy = [...testimonials];

    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();

        if (!firstEl) return;

        copy.push({ ...firstEl, tempId: Math.random() });
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();

        if (!lastEl) return;

        copy.unshift({ ...lastEl, tempId: Math.random() });
      }
    }

    setTestimonials(copy);
  };

  useEffect(() => {
    const { matches } = window.matchMedia("(min-width: 640px)");

    if (matches) {
      setCardSize(CARD_SIZE_LG);
    } else {
      setCardSize(CARD_SIZE_SM);
    }

    const handleSetCardSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");

      if (matches) {
        setCardSize(CARD_SIZE_LG);
      } else {
        setCardSize(CARD_SIZE_SM);
      }
    };

    window.addEventListener("resize", handleSetCardSize);

    return () => window.removeEventListener("resize", handleSetCardSize);
  }, []);

  return (

    <div>
      <section className="py-32 bg-[#F7F7F7] relative overflow-hidden">
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

        <div className="text-center mb-14 md:mb-32">
          <h2 className="largeText mb-4">Testimonials</h2>
          <h2 className="titleTextLG">What our clients say</h2>
        </div>

          <div
          className="relative w-full overflow-hidden"
          style={{
            height: SECTION_HEIGHT,
          }}
        >
          {testimonials.map((t, idx) => {
            let position = 0;

            position = idx - Math.floor(testimonials.length / 2);


            return (
              <TestimonialCard
                key={t.tempId}
                testimonial={t}
                handleMove={handleMove}
                position={position}
                cardSize={cardSize}
              />
            );
          })}
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-8">
            <button
              onClick={() => handleMove(-1)}
              className="mt-8 grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
            >
              <GoArrowLeft />
            </button>
            <button
              onClick={() => handleMove(1)}
              className=" mt-8 grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
            >
              <GoArrowRight />
            </button>
          </div>
        </div>


      </section>

    </div>
  );
};

const TestimonialCard = ({ position, testimonial, handleMove, cardSize }) => {
  const isActive = position === 0;
  

  return (
    <motion.div
      initial={false}
      onClick={() => handleMove(position)}
      className={`
      absolute left-1/2 top-1/2 cursor-pointer border-black p-8 text-black transition-colors duration-500 ${
        isActive ? "z-10 bg-indigo-600" : "z-0 bg-white"
      }
      `}
      style={{
        borderWidth: BORDER_SIZE,
        clipPath: `polygon(${CORNER_CLIP}px 0%, calc(100% - ${CORNER_CLIP}px) 0%, 100% ${CORNER_CLIP}px, 100% 100%, calc(100% - ${CORNER_CLIP}px) 100%, ${CORNER_CLIP}px 100%, 0 100%, 0 0)`,
      }}
      animate={{
        width: cardSize,
        height: cardSize,
        x: `calc(-50% + ${position * (cardSize / 1.5)}px)`,
        y: `calc(-50% + ${
          isActive ? CENTER_STAGGER : position % 2 ? STAGGER : -STAGGER
        }px)`,
        rotate: isActive ? 0 : position % 2 ? ROTATE_DEG : -ROTATE_DEG,
        boxShadow: isActive ? "0px 8px 0px 4px black" : "0px 0px 0px 0px black",
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-black object-cover"
        style={{
          right: -BORDER_SIZE,
          top: CORNER_CLIP - BORDER_SIZE,
          width: CORNER_LINE_LEN,
          height: BORDER_SIZE,
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`Testimonial image for ${testimonial.by}`}
        className={`mb-4 h-14 w-12 bg-neutral-600 object-cover object-top ${
            isActive ? "" : "opacity-60"
          }`}
        style={{
          boxShadow: "3px 3px 0px white",
        }}
      />
      <h3
        className={`text-base sm:text-xl ${
          isActive ? "text-white" : "text-black opacity-10"
        }`}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic ${
          isActive ? "text-indigo-200" : "text-neutral-700 opacity-10"
        }`}
      >
        - {testimonial.by}
      </p>
    </motion.div>
  );
};

const TESTIMONIAL_DATA = [
    {
      tempId: 0,
      testimonial: "As a female founder, I've found working with Kakushin to be refreshingly empowering. Their innovative approach and steadfast support have taken my brand to new heights. Kakushin values the voices of female founders, making the collaboration both inspiring and empowering. Partnering with them has been a truly exceptional experience.",
      by: "Aisha, CEO at COMPANY",
      imgSrc: "/images/Growth_Navigator.jpg",
    },
    {
      tempId: 1,
      testimonial: "Working with Kakushin was like embarking on a creative adventure. Their cool ideas and artsy vibes gave our brand a fresh new look, making it super relatable. The support they gave us throughout was solid, showing they're all about surpassing expectations.",
      by: "Ramneek, CEO at COMPANY",
      imgSrc: "/images/Growth_Navigator.jpg",
    },
    {
      tempId: 2,
      testimonial: "Kakushin's approach is refreshingly client-focused. They totally got what our brand was all about, and the rebrand they pulled off really hit home with our audience. The smart ideas they tossed our way made the whole process a breeze.",
      by: "Ali, CEO at COMPANY",
      imgSrc: "/images/Growth_Navigator.jpg",
    },
    {
      tempId: 3,
      testimonial: "My tenure as a full-stack developer with Kakushin is marked by a profound dedication to excellence. Across diverse projects encompassing app, extension, and website development, Kakushin upholds rigorous standards of innovation and precision.",
      by: "Zeeshan, CEO at COMPANY",
      imgSrc: "/images/Growth_Navigator.jpg",
    },
    {
      tempId: 4,
      testimonial: "Kakushin's work was next level. Every design they did was spot-on, and their strategic guidance was smart. Their support team was just a message away, always there to guide us through the rebranding journey.",
      by: "Waseem, CEO at COMPANY",
      imgSrc: "/images/Growth_Navigator.jpg",
    },
    {
      tempId: 5,
      testimonial: "The Kakushin squad put us first. They really listened to what we needed, and their support was super personalized. Their creative skills are off the charts, and our new brand identity is the coolest.",
      by: "James, CEO at COMPANY",
      imgSrc: "/images/Growth_Navigator.jpg",
    },
    {
      tempId: 6,
      testimonial: "Kakushin isn't just about making things look good – they're all about crafting a brand story. Their consistent support and client-first approach made us feel valued. The quality of their work has set a new standard for us.",
      by: "Nick, CEO at COMPANY",
      imgSrc: "/images/Growth_Navigator.jpg",
    },
    {
      tempId: 7,
      testimonial: "Working alongside Kakushin on our brand makeover was akin to embarking on a creative odyssey. Their innovative thinking and artistic approach breathed new life into our brand, making it more relevant and engaging. The support we received throughout the journey was steadfast, showcasing their dedication to not just meet, but exceed client expectations.",
      by: "Andreas, CEO at COMPANY",
      imgSrc: "/images/Growth_Navigator.jpg",
    },
    {
      tempId: 8,
      testimonial: "Kakushin's client-centric approach was a breath of fresh air. They delved into the essence of our brand, engaged with our vision, and delivered a rebranding that resonates profoundly with our target audience. Their unwavering support and insightful suggestions made the process seamless and rewarding.",
      by: "Jenifer, CEO at COMPANY",
      imgSrc: "/images/Growth_Navigator.jpg",
    },
    {
      tempId: 9,
      testimonial: "The quality of work delivered by Kakushin was unmatched. Every design element was meticulously crafted, and the strategic direction provided was insightful. Their support team was always on hand to provide guidance, making the rebranding journey an enlightening experience.",
      by: "Emma, CEO at COMPANY",
      imgSrc: "/images/Growth_Navigator.jpg",
    },
    {
      tempId: 10,
      testimonial: "Our experience with Kakushin was a testament to their ability to bridge visions with reality. Their creativity was not just about aesthetic appeal but about crafting a brand narrative that speaks volumes. The continual support and customer-focused approach made us feel valued, and the quality of the deliverables has set a new benchmark for us.",
      by: "Antonio, CEO at COMPANY",
      imgSrc: "/images/Growth_Navigator.jpg",
    },
  ];
  