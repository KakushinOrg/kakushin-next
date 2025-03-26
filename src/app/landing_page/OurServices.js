"use client";
import { whatWeDo } from "@/app/components/TabComponent/whatWeDoData";
import { FiMonitor, FiSmartphone } from "react-icons/fi";
import { GiArtificialIntelligence, GiGrowth } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import "./services.css";

const OurServices = () => {
  const FEATURES = [
    { Icon: FiMonitor },
    { Icon: FiSmartphone },
    { Icon: GiArtificialIntelligence },
    { Icon: HiOutlineLightBulb },
    { Icon: GiGrowth },
  ];

  return (
    <section className="w-full text-white" id="services">
      <div className="space-y-4">
        <p className="paragraph px-6 my-14">
          Businesses are multi-faceted and require each facet to operate in the
          best possible way. The challenge is to have each facet working
          harmoniously, which can feel almost impossible when multiple companies
          are involved, each with their own idea of how their facet should
          operate. This increases cost, wastage and frustration. At Kakushin, we
          have built a team of experts working together to ensure that each
          facet is aligned and optimised, allowing you to focus on your business
          - hard to believe? Give us a shout, and hear how we can do the same
          for your business.
        </p>
        {whatWeDo.length > 0 ? (
          <div className="flex flex-col gap-4">
            {whatWeDo.map((item, index) => (
              <div
                key={item.id}
                className="relative shrink-0 cursor-pointer border-[2px] border-white text-white drop-shadow-[0px_0px_7px_rgba(28,108,168,0.2)] p-4 my-4 rounded-[10px] w-full overflow-hidden max-h-none md:max-h-[150px] md:transition-all md:duration-700 md:ease-in-out md:hover:max-h-[600px] md:hover:-translate-y-1"
              >
                <div className="flex flex-col gap-5 items-start justify-center">
                  <div className="w-16 h-full flex items-center justify-center transition-transform duration-300 md:mx-0 mx-auto">
                    {(() => {
                      const Icon = FEATURES[index % FEATURES.length].Icon;
                      return <Icon size={40} className="text-blue-500" />;
                    })()}
                  </div>
                  <h3 className="font-semibold text-white w-[95%]">
                    {item.title}
                  </h3>
                  <div>
                    <p className="text-base text-gray-50 w-[95%]">
                      {item.subTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </section>
  );
};

export default OurServices;
