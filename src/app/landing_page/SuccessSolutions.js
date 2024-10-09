import React from "react";
import Image from "next/image";

const SuccessSolutions = () => {
  const solutions = [
    {
      title: "Web Development Wizardry",
      icon: "/icons/basic_icon.svg",
      subtitle: "Scope",
      description:
        "From sleek websites to robust web apps, our development team crafts digital experiences that don’t just look good—they convert. Built for performance and scalability, our code is as clean as our designs are bold. Ready to level up your online presence? We’re here to make it happen.",
    },
    {
      title: "QA That Never Sleeps",
      icon: "/icons/middle_icon.svg",
      subtitle: "Scope",
      description:
        "We’re obsessed with quality—every click, swipe, and scroll is tested to perfection. Our QA team digs deep to find what others might miss, ensuring your product doesn’t just work; it wows. Think of us as your digital bodyguard, ensuring nothing slips through the cracks.",
    },
    {
      title: "Branding Brilliance",
      icon: "/icons/full_icon.svg",
      subtitle: "Scope",
      description:
        "Your brand should be as bold as your vision. From unforgettable logos to storytelling that sells, we create brands that not only stand out but stick around. Let’s build a brand that not only talks the talk but walks the walk in a crowded market.",
    },
    {
      title: "Business Consultation Goldmine",
      icon: "/icons/custom_icon.svg",
      subtitle: "Scope",
      description:
        "Think of us as your secret weapon for growth. Whether it’s fine-tuning your strategy, optimizing operations, or prepping for investment, our business consulting doesn’t just guide you—it drives you. We’re all about actionable insights that turn potential into profit.",
    },
    {
      title: "AI That Knows What’s Next",
      icon: "/icons/ai_icon.svg",
      subtitle: "Scope",
      description:
        "Why guess when you can know? Our AI solutions turn data into your business’s secret sauce—predicting trends, automating tasks, and delivering insights that keep you ahead of the game. Ready to make your startup smarter? Let’s teach your tech some tricks.",
    },
  ];

  return (
    <section>
      {/* Title */}
      <div className="relative z-10 text-center text-white md:p-32 p-4">
        <h1 className="largeText mb-4">Choose Excellence with Us </h1>
        <h2 className="titleTextLG">Kakushin Success Solutions</h2>
      </div>
      {/* Boxes */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:mt-20 mt-10 items-center justify-center p-10 md:p-20 bg-no-repeat bg-center bg-cover bg-fixed"
        style={{ backgroundImage: "url('/images/leaf-background.jpg')" }}
      >
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="p-6 bg-white/90 shadow-md rounded-lg flex flex-col items-center justify-center text-center m-auto"
          >
            <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
            <Image
              width={20}
              height={20}
              src={solution.icon}
              alt={solution.title}
              className="mb-4"
            />
            <h5 className="titleTextSM mb-6">{solution.subtitle}</h5>
            <p className="paragraph">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessSolutions;
