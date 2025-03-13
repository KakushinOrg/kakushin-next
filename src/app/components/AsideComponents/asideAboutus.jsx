import React from "react";
import { Achievements } from "@/app/landing_page/Achievements";

const AsideAboutus = () => {
  return (
    <section className="flex justify-center items-center flex-col">
      <div className="flex xl:flex-col flex-row w-full">
        <div className="relative shrink-0 cursor-pointer transition-all ease-out hover:-translate-y-1 bg-gray-50 drop-shadow-[0px_0px_7px_rgba(28,108,168,0.2)] p-4 m-4 rounded-[25px]">
          <div className=" flex flex-col gap-5 items-start justify-center md:mb-10">
            <h2 className="titleTextLG mb-4">Our story</h2>
            <p className="paragraph">
              At Kakushin, we specialize in empowering{" "}
              <span className="font-semibold text-[18px]">
                startups, Non-Profit,
              </span>{" "}
              and businesses to thrive by providing{" "}
              <span className="font-semibold text-[18px]">
                tailored solutions
              </span>{" "}
              that drive{" "}
              <span className="font-semibold text-[18px]">innovation</span> and
              <span className="font-semibold text-[18px]">
                {" "}
                sustainable growth.
              </span>{" "}
            </p>
            <p className="paragraph">
              From MVP development and{" "}
              <span className="font-semibold text-[18px]">AI-driven </span>
              projects to branding and business strategy, we help turn ideas
              into impactful realities.
            </p>
          </div>
        </div>
        <div className="relative shrink-0 cursor-pointer transition-all ease-out hover:-translate-y-1 bg-gray-50 drop-shadow-[0px_0px_7px_rgba(28,108,168,0.2)] p-4 m-4 rounded-[25px]">
          <div className="flex flex-col gap-5 items-start justify-center ">
            <h2 className="titleTextLG mb-4">Who we are</h2>
            <p className="paragraph">
              Our expertise extends across diverse sectors, including health
              tech, EdTech, and environmental initiatives. We’re passionate
              about supporting organizations that prioritize social impact,
              sustainability, and innovation. Whether you’re launching a
              startup, scaling a project, or pivoting your strategy, Kakushin
              partners with you every step of the way to deliver measurable
              results.{" "}
            </p>
            <p className="paragraph">
              With a commitment to environmental awareness and socially
              responsible practices, we believe in creating value not only for
              businesses but also for the communities and ecosystems they serve.
              At Kakushin, innovation meets purpose to transform visions into
              success stories.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex xl:flex-col flex-row w-full">
        <div className="relative shrink-0 cursor-pointer transition-all ease-out hover:-translate-y-1 bg-gray-50 drop-shadow-[0px_0px_7px_rgba(28,108,168,0.2)] p-4 m-4 rounded-[25px]">
          <Achievements />
        </div>
      </div>
    </section>
  );
};

export default AsideAboutus;
