import React from "react";

const About = () => {
  return (
    <section className="p-10 md:p-20 bg-[#F7F7F7]" id="about">
      <div className="flex flex-col gap-5 items-center justify-center mt-10 md:my-20 ">
        <h2 className="largeText mb-4 text-center">
          Where dreams become innovations
        </h2>
        <h2 className="titleTextLG text-center mb-4">Kakushin</h2>
        <p className="paragraph">
          Kakushin is dedicated to transforming startup dreams into tangible
          successes. Our comprehensive suite of services, including BrandCraft
          Tailored Triumph, LaunchPad Blitz, MVP Forge, and PivotPro Guidance,
          ensures that every aspect of a startup's journey from concept to
          market is meticulously catered to.{" "}
        </p>
        <p className="paragraph">
          We believe in the potential of every idea to innovate and disrupt, and
          we commit ourselves fully to turn these ideas into reality.
        </p>
        <p className="paragraph">
          By blending creativity with strategic execution, Kakushin acts as a
          relentless ally to startups, helping them navigate challenges and
          seize opportunities with precision and passion. We don't just support
          startups; we elevate them, making their vision for innovation and
          success a shared mission.{" "}
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center mt-10 md:my-20 ">
        <h2 className="titleTextLG text-center mb-4">Our Team</h2>
        <p className="paragraph">
          In the fast-paced startup ecosystem, our professionals—ranging from
          strategic planners and tech innovators to research specialists and
          communication mavens—collaborate seamlessly to elevate startups from
          nascent ideas to market-ready successes.
        </p>
        <p className="paragraph">
          Our unique blend of skills ensures a comprehensive approach to each
          phase of startup development, from conceptualization and market entry
          strategies to operational support and growth acceleration.
        </p>
        <p className="paragraph">
          By integrating diverse expertise with a unified goal, we turn complex
          challenges into scalable opportunities, making Kakushin the go-to
          partner for startups aiming to disrupt and lead in their industries.
        </p>
      </div>
    </section>
  );
};

export default About;
