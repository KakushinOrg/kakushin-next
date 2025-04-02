import React from "react";
import { Achievements } from "@/app/landing_page/Achievements";

const AsideAboutus = () => {
  return (
    <section className="">
      <h3 className="titleTextLG text-center mb-14 lg:mb-5 mt-5 text-gray-300">
        About Us
      </h3>

      <div className="flex flex-col">
        <div className="relative shrink-0 cursor-pointer border-[1.5px] border-[rgba(255,255,255,0.3)] text-white drop-shadow-[0px_0px_7px_rgba(28,108,168,0.2)] p-4 my-4 rounded-[10px] w-full overflow-hidden max-h-none md:max-h-[150px]  md:transition-all md:duration-700 md:ease-in-out  md:hover:max-h-[600px]  md:hover:-translate-y-1">
          <div className=" flex flex-col gap-5 items-start justify-center md:mb-10">
            <div className="mb-4 lg:mx-0 mx-auto">
              <h2 className="titleTextLG">Our story</h2>
              <div className="w-20 h-[2px] bg-[#1c6ca8]"></div>
            </div>
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
        <div className="relative shrink-0 cursor-pointer border-[1.5px] border-[rgba(255,255,255,0.3)] text-white drop-shadow-[0px_0px_7px_rgba(28,108,168,0.2)] p-4 my-4 rounded-[10px] w-full overflow-hidden max-h-none md:max-h-[150px]  md:transition-all md:duration-700 md:ease-in-out  md:hover:max-h-[600px]  md:hover:-translate-y-1">
          <div className="flex flex-col gap-5 items-start justify-center ">
            <div className="mb-4 lg:mx-0 mx-auto">
              <h2 className="titleTextLG">Who we are</h2>
              <div className="w-20 h-[2px] bg-[#1c6ca8]"></div>
            </div>
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
        <div className="relative shrink-0 cursor-pointer transition-all ease-out hover:-translate-y-1 border-[1.5px] border-[rgba(255,255,255,0.3)] text-white drop-shadow-[0px_0px_7px_rgba(28,108,168,0.2)] p-4 rounded-[10px]">
          <div className="flex flex-col gap-5 items-start justify-center ">
            <div className="mb-4 lg:mx-0 mx-auto">
              <h2 className="titleTextLG">What they say about us</h2>
              <div className="w-20 h-[2px] bg-[#1c6ca8]"></div>
            </div>

            <div className="underline flex flex-col gap-4">
              <a
                href="https://thefounderspress.com/marketing-firm-kakushin-eyes-us-expansion/"
                target="_blank"
              >
                Marketing Firm Kakushin Eyes US Expansion with Tech-Driven
                Growth
              </a>
              <a
                href="https://www.foundersbeta.com/female-founders/leaders-follow/"
                target="_blank"
              >
                Top Female Founders & Leaders to Follow in 2024 - FoundersBeta
              </a>
              <a
                href="https://www.foundersbeta.com/top-100/companies-2025/"
                target="_blank"
              >
                Top 100 Companies to Watch in 2025 - FoundersBeta
              </a>
              <a
                href="https://news.marketersmedia.com/kakushin-announces-tailored-development-solutions-to-empower-startups/89141380"
                target="_blank"
              >
                Kakushin Announces Tailored Development Solutions to Empower
                Startups
              </a>
              <a
                href="https://apnews.com/press-release/marketersmedia/artificial-intelligence-7c38e5fee0c6aa346641675d11f5fe8f "
                target="_blank"
              >
                Kakushin Unveils Custom Dev Services Designed to Boost Startups
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative shrink-0 cursor-pointer transition-all ease-out hover:-translate-y-1 border-[1.5px] border-[rgba(255,255,255,0.3)] text-white drop-shadow-[0px_0px_7px_rgba(28,108,168,0.2)] p-4 rounded-[10px]">
        <Achievements />
      </div>
    </section>
  );
};

export default AsideAboutus;
