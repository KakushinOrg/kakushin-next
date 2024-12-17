import { motion } from "framer-motion";

const ScrollingTestimonials = () => {
  return (
    <div className="bg-white py-12">
      <div className="text-center mb-14 md:mb-32">
        <h2 className="largeText mb-4">Testimonials</h2>
        <h2 className="titleTextLG">What our clients say</h2>
      </div>
      <div className="p-4 overflow-x-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 " />

        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
        </div>
        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
        </div>

        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 " />
      </div>
    </div>
  );
};

const TestimonialList = ({ list, reverse = false, duration = 50 }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className="shrink-0 w-[300px] md:w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative h-[11.5rem] drop-shadow-[0px_0px_5px_rgba(28,108,168,0.2)] bg-gradient-to-r from-[#fff] via-[#fff] to-[#fff] bg-[45deg]"
          >
            <div className="text-gray-700 p-4 flex flex-col w-[300px] md:w-[500px]">
              <span className="block font-semibold text-lg mb-1">{t.name}</span>
              <span className="block mb-3 text-sm font-medium">{t.title}</span>
              <span className="block text-sm text-gray-700">{t.info}</span>
            </div>
            <span className="text-7xl absolute top-2 right-2 text-gray-700">
              "
            </span>
          </div>
        );
      })}
    </motion.div>
  );
};

const testimonials = {
  top: [
    {
      id: 1,
      name: "Aisha",
      title: "Female Founder",
      info: "As a female founder, I've found working with Kakushin to be refreshingly empowering. Their innovative approach and steadfast support have taken my brand to new heights. Kakushin values the voices of female founders, making the collaboration both inspiring and empowering. Partnering with them has been a truly exceptional experience.",
    },
    {
      id: 2,
      name: "Ramneek",
      title: "Creative Partner",
      info: "Working with Kakushin was like embarking on a creative adventure. Their cool ideas and artsy vibes gave our brand a fresh new look, making it super relatable. The support they gave us throughout was solid, showing they're all about surpassing expectations.",
    },
    {
      id: 3,
      name: "Ali",
      title: "Client-Focused Partner",
      info: "Kakushin's approach is refreshingly client-focused. They totally got what our brand was all about, and the rebrand they pulled off really hit home with our audience. The smart ideas they tossed our way made the whole process a breeze.",
    },
    {
      id: 4,
      name: "Zeeshan",
      title: "Full-Stack Developer",
      info: "My tenure as a full-stack developer with Kakushin is marked by a profound dedication to excellence. Across diverse projects encompassing app, extension, and website development, Kakushin upholds rigorous standards of innovation and precision.",
    },
    {
      id: 5,
      name: "Waseem",
      title: "Rebranding Enthusiast",
      info: "Kakushin's work was next level. Every design they did was spot-on, and their strategic guidance was smart. Their support team was just a message away, always there to guide us through the rebranding journey.",
    },
  ],
  middle: [
    {
      id: 6,
      name: "James",
      title: "Personalized Supporter",
      info: "The Kakushin squad put us first. They really listened to what we needed, and their support was super personalized. Their creative skills are off the charts, and our new brand identity is the coolest.",
    },
    {
      id: 7,
      name: "Nick",
      title: "Story-Driven Visionary",
      info: "Kakushin isn't just about making things look good – they're all about crafting a brand story. Their consistent support and client-first approach made us feel valued. The quality of their work has set a new standard for us.",
    },
    {
      id: 8,
      name: "Andreas",
      title: "Creative Odyssey Partner",
      info: "Working alongside Kakushin on our brand makeover was akin to embarking on a creative odyssey. Their innovative thinking and artistic approach breathed new life into our brand, making it more relevant and engaging. The support we received throughout the journey was steadfast, showcasing their dedication to not just meet, but exceed client expectations.",
    },
    {
      id: 9,
      name: "Jenifer",
      title: "Client-Centric Advocate",
      info: "Kakushin's client-centric approach was a breath of fresh air. They delved into the essence of our brand, engaged with our vision, and delivered a rebranding that resonates profoundly with our target audience. Their unwavering support and insightful suggestions made the process seamless and rewarding.",
    },
    {
      id: 10,
      name: "Antonio",
      title: "Narrative Crafter",
      info: "Our experience with Kakushin was a testament to their ability to bridge visions with reality. Their creativity was not just about aesthetic appeal but about crafting a brand narrative that speaks volumes. The continual support and customer-focused approach made us feel valued, and the quality of the deliverables has set a new benchmark for us.",
    },
  ],
};

export default ScrollingTestimonials;
