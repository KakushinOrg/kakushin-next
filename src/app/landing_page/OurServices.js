"use client";
import { useState, useMemo } from "react";
// Uncomment if needed: import TabsFeatures from "@/app/components/TabComponent/tabComponent";
import { whatWeDo } from "@/app/components/TabComponent/whatWeDoData";
import { FiMonitor, FiSmartphone } from "react-icons/fi";
import { GiArtificialIntelligence, GiGrowth } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import "./services.css";

const OurServices = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const FEATURES = [
    { Icon: FiMonitor },
    { Icon: FiSmartphone },
    { Icon: GiArtificialIntelligence },
    { Icon: HiOutlineLightBulb },
    { Icon: GiGrowth },
  ];

  const servicesWithHeights = useMemo(
    () =>
      whatWeDo.map((item) => ({
        ...item,
        randomMinHeight: Math.floor(Math.random() * 51) + 150,
      })),
    []
  );

  const leftColumn = [];
  const rightColumn = [];
  servicesWithHeights.forEach((item, index) => {
    if (index % 2 === 0) {
      leftColumn.push(item);
    } else {
      rightColumn.push(item);
    }
  });

  return (
    <section className="w-full" id="services">
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
          <div className="flex flex-col gap-4 px-8">
            {whatWeDo.map((item, index) => (
              <div
                key={item.id}
                className="transition ease-in-out boxWhiteMorph relative flex items-center p-3 bg-white border rounded-2xl shadow-md w-full"
                style={{ minHeight: `${item.randomMinHeight}px` }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300">
                  {(() => {
                    const Icon = FEATURES[index % FEATURES.length].Icon;
                    return <Icon size={40} className="text-blue-500" />;
                  })()}
                </div>
                <div className="flex-1 ml-4">
                  <h3 className="font-semibold text-gray-800 w-[95%]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 service-description w-[95%]">
                    {item.subTitle}
                  </p>
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
