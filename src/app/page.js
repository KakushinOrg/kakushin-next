import Hero from "./landing_page/Hero";
import About from "./landing_page/About";
import OurServices from "./landing_page/OurServices";
import OurStorySection from "./landing_page/NewHero";
import SuccessSolutions from "./landing_page/SuccessSolutions";
import Achievements from "./landing_page/Achievements";
import BlogsSection from "./landing_page/BlogsSection";
import Contact from "./landing_page/Contact";
import dynamic from "next/dynamic";

import Task2 from "./landing_page/Task2";
import Task3 from "./landing_page/Task3";
import OurProjects from "./landing_page/OurProjects";
import { Testimonial } from "./landing_page/NewTestimonials";
import AboutUs from "./landing_page/NewAboutUs";

const ConsultationForm = dynamic(() =>
  import("./landing_page/ConsultationForm")
);
const Testimonials = dynamic(() => import("./landing_page/Testimonials"));

export const metadata = {
  title: "Welcome to Kakushin",
  description: "Your trusted partner for digital transformation.",
  other: {
    "application/ld+json": {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Kakushin",
      description: "Your trusted partner for digital transformation.",
      url: "https://kakushin.io/",
      mainEntity: {
        "@type": "Organization",
        name: "Kakushin",
        url: "https://kakushin.io",
        logo: "https://kakushin.io/logo.png",
        sameAs: [
          "https://www.linkedin.com/company/kakushin",
          "https://twitter.com/kakushin",
        ],
      },
    },
  },
};

export default function Home() {
  return (
    <div className="">
      <OurStorySection />
      <AboutUs />
      {/* <Hero /> */}
      {/* <ConsultationForm /> */}
      {/* <About /> */}
      <OurServices />
      <OurProjects />
      <SuccessSolutions />
      <Testimonial />
      <Task2 />

      {/* <Achievements /> */}
      <BlogsSection />
      <Contact />
    </div>
  );
}
