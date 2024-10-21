import React from "react";
import Image from "next/image";

// Image file paths and text for each service
const images = [
  {
    src: "/images/Growth_Navigator.jpg",
    name: "Growth Navigator",
    description:
      "This offering encompasses the essence of transforming startup visions into reality. From the initial MVP development to strategic market positioning, Startup Elevate provides a comprehensive toolkit for entrepreneurs ready to ascend. It's designed to navigate the complexities of the startup ecosystem, ensuring that every venture is equipped with the insights, strategies, and tools necessary for success. ",
  },
  {
    src: "/images/Startup_Elevate.jpg",
    name: "Startup Elevate",
    description:
      "Visionary Launch targets the critical early stages of a startup, focusing on ideation, branding, and market introduction. By combining the elements of BrandCraft Tailored Triumph and LaunchPad Blitz, this service ensures that startups not only debut with a strong brand identity but also with a clear, executable strategy for market penetration and growth. ",
  },
  {
    src: "/images/Visionary_Image.jpg",
    name: "Visionary Image",
    description:
      "A service tailored for startups and research companies poised for scaling, Growth Navigator combines PivotPro Guidance with advanced operational and strategic support. It offers a roadmap for sustained growth, leveraging in-depth market research, strategic planning, and execution support to steer startups through scaling challenges, ensuring they remain agile and competitive. ",
  },
];

const OurServices = () => {
  return (
    <section
      className="flex justify-center items-center py-16 md:flex md:gap-10"
      id="services"
    >
      <div>
        <h2 className="titleTextLG text-center mb-4">Our Services</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4">
            {images.map((box) => (
              <div key={box.name}>
                <div className="relative h-80 min-w-[320px] w-full  bg-cover bg-center overflow-hidden group mt-10 md:mt-20">
                  <Image
                    width={450}
                    height={450}
                    src={box.src}
                    alt={box.name}
                    className="absolute inset-0 cover"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 ease-in-out"></div>
                  {/* Text appearing from top to bottom */}
                  <div className="absolute inset-0 flex items-center justify-center text-white text-base p-4 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                    {box.description}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-4">
                  <h3 className="text-[#414141]/80 text-center text-base font-semibold">
                    {box.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
