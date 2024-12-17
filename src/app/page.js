import Hero from "./landing_page/Hero";
import About from "./landing_page/About";
import OurServices from "./landing_page/OurServices";
import SuccessSolutions from "./landing_page/SuccessSolutions";
import { Achievements } from "./landing_page/Achievements";
import BlogsSection from "./landing_page/BlogsSection";
import Contact from "./landing_page/Contact";
import dynamic from "next/dynamic";
import TestimonialCarousel from "./components/TestimonialCarousel/testimonialCarousel";
const ConsultationForm = dynamic(() =>
  import("./landing_page/ConsultationForm")
);
const OurProjects = dynamic(() => import("./landing_page/OurProjects"));
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
      <Hero />

      <About />
      <OurServices />
      <OurProjects />
      {/* <SuccessSolutions /> */}
      {/* <ConsultationForm /> */}
      <Testimonials />
      <Achievements />
      <BlogsSection />
      <Contact />
    </div>
  );
}
