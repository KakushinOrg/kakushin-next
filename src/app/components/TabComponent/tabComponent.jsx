import { FiMonitor, FiSave, FiSearch } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AboutUsItem from "@/app/components/AboutUsAccordion/aboutUsAccordion";
import { whatWeDo } from "@/app/components/whatWeDoData"; // Import your whatWeDo array

const TabsFeatures = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="p-4">
      <div className="mx-auto 2xl:w-6xl lg:w-2xl md:w-[70rem] sm:w-[30rem] w-[25rem] px-4">
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
  return (
    <div className="flex overflow-x-scroll">
      {whatWeDo.map((tab, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            Icon={FEATURES[index]?.Icon || FiMonitor}
            title={tab.title}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};

const Tab = ({ selected, Icon, title, setSelected, tabNum }) => {
  return (
    <div className="relative w-[20rem]">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full flex-row items-center justify-center gap-4 border-b-4 border-slate-200 bg-white p-6 transition-colors hover:bg-slate-100 md:flex-col min-h-40"
      >
        <span
          className={`rounded-lg bg-gradient-to-br from-indigo-700 from-10% to-indigo-500 p-3 text-2xl text-white shadow-indigo-400 transition-all duration-300 ${
            selected
              ? "scale-100 opacity-100 shadow-lg"
              : "scale-90 opacity-50 shadow"
          }`}
        >
          <Icon />
        </span>

        <span
          className={`min-w-[150px] max-w-[200px] text-sm text-start text-slate-600 transition-opacity md:text-center ${
            selected ? "opacity-100" : "opacity-50"
          }`}
        >
          {title}
        </span>
      </button>

      {selected && (
        <motion.span
          layoutId="tabs-features-underline"
          className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-indigo-600"
        />
      )}
    </div>
  );
};

export default TabsFeatures;

const FEATURES = [
  {
    Icon: FiSearch,
  },
  {
    Icon: FiSave,
  },
  {
    Icon: FiMonitor,
  },
  {
    Icon: FiMonitor,
  },
  {
    Icon: FiMonitor,
  },
];
