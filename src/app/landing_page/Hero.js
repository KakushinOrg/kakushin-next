import React from "react";

const Hero = () => {
  return (
    <main
      className="flex flex-col items-center justify-center h-screen bg-gray-900 relative"
      id="home"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/landingPageVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center text-white">
        <h1 className="largeText mb-4">Moving</h1>
        <h2 className="titleTextLG">boundaries</h2>
        <p className="smallTitleText">Into digital solutions</p>
      </div>
    </main>
  );
};

export default Hero;
