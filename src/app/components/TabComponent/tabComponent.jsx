import { FiMonitor, FiSmartphone } from "react-icons/fi";
import { GiArtificialIntelligence, GiGrowth } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import AboutUsItem from "@/app/components/AboutUsAccordion/aboutUsAccordion";
import { whatWeDo } from "@/app/components/TabComponent/whatWeDoData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TabsFeatures = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="p-2">
      <div className="mx-auto 2xl:w-6xl lg:w-2xl w-full px-0 md:px-4">
        {/* Render the tabs */}
        <Tabs selected={selected} setSelected={setSelected} />

        {/* Animate the selected tab's feature */}
        <AnimatePresence mode="wait">
          {whatWeDo.map((tabData, index) => {
            return selected === index ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                key={index}
              >
                <AboutUsItem params={tabData} />
              </motion.div>
            ) : null;
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Tabs = ({ selected, setSelected }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  return (
    <div className="relative flex items-center">
      <button
        onClick={scrollLeft}
        className="absolute left-0 z-10 bg-transparent p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronLeft size={24} />
      </button>
      <div
        ref={scrollContainerRef}
        className="flex overflow-hidden pb-4 scrollbar-hide scroll-smooth"
      >
        {whatWeDo.map((tab, index) => (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            Icon={FEATURES[index]?.Icon}
            title={tab.title}
            tabNum={index}
          />
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 z-10 bg-transparent p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

const Tab = ({ selected, Icon, title, setSelected, tabNum }) => {
  return (
    <div className="relative w-[15rem] md:w-[20rem]">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full flex-row items-center justify-center gap-4 border-b-4 border-slate-200 bg-white p-6 transition-colors hover:bg-slate-100 md:flex-col min-h-40"
      >
        <span
          className={`rounded-lg bg-gradient-to-br from-[#2692E3] from-10% to-[#1C6CA8] p-3 text-2xl text-white shadow-[#d4d0c3] transition-all duration-300 ${selected
              ? "scale-100 opacity-100 shadow-lg"
              : "scale-90 opacity-50 shadow"
            }`}
        >
          <Icon />
        </span>

        <span
          className={`min-w-[150px] max-w-[200px] text-sm text-start text-slate-600 transition-opacity md:text-center ${selected ? "opacity-100" : "opacity-50"
            }`}
        >
          {title}
        </span>
      </button>

      {selected && (
        <motion.span
          layoutId="tabs-features-underline"
          className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-[#1C6CA8]"
        />
      )}
    </div>
  );
};

export default TabsFeatures;

const FEATURES = [
  {
    Icon: FiMonitor,
  },
  {
    Icon: FiSmartphone,
  },
  {
    Icon: GiArtificialIntelligence,
  },
  {
    Icon: HiOutlineLightBulb,
  },
  {
    Icon: GiGrowth,
  },
];
