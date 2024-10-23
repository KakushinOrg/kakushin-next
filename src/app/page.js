import Hero from "./landing_page/Hero";
import About from "./landing_page/About";
import OurServices from "./landing_page/OurServices";
import SuccessSolutions from "./landing_page/SuccessSolutions";
import Achievements from "./landing_page/Achievements";
import BlogsSection from "./landing_page/BlogsSection";
import Contact from "./landing_page/Contact";
import dynamic from 'next/dynamic';

const ConsultationForm = dynamic(() => import('./landing_page/ConsultationForm'));
const OurProjects = dynamic(() => import('./landing_page/OurProjects'));
const Testimonials = dynamic(() => import('./landing_page/Testimonials'));


export default function Home() {
  return (
    <div className="">
      <Hero />
      <ConsultationForm />
      <About />
      <OurServices />
      <OurProjects />
      <SuccessSolutions />
      <Testimonials />
      <Achievements />
      <BlogsSection />
      <Contact/>
    </div>
  );
}
