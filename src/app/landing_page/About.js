import React from "react";

const About = () => {
  return (
    <section className="p-10 md:p-20 bg-[#f4f4f7]" id="about">
      <div className="flex flex-col gap-5 items-center justify-center mt-10 md:my-20 ">
        <h2 className="largeText mb-4 text-center">
          Where dreams become innovations
        </h2>
        <h2 className="titleTextLG text-center mb-4">Who We Are</h2>
        <p className="paragraph">
          Our expertise extends across diverse sectors, including health tech,
          EdTech, and environmental initiatives. We’re passionate about
          supporting organizations that prioritize social impact,
          sustainability, and innovation. Whether you’re launching a startup,
          scaling a project, or pivoting your strategy, Kakushin partners with
          you every step of the way to deliver measurable results.{" "}
        </p>
        <p className="paragraph">
          With a commitment to environmental awareness and socially responsible
          practices, we believe in creating value not only for businesses but
          also for the communities and ecosystems they serve. At Kakushin,
          innovation meets purpose to transform visions into success stories.{" "}
        </p>
      </div>
      {/* <div className="flex flex-col gap-5 items-center justify-center mt-10 md:my-20 ">
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
      </div> */}
    </section>
  );
};

export default About;
