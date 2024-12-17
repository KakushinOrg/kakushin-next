import React from "react";
import "./embla.css";
import BlogPostCarousel from "./EmblaCarousel";

const OPTIONS = { slidesToScroll: "auto" };

const ProjectCarousel = ({ projects }) => (
  <>
    <BlogPostCarousel projects={projects} options={OPTIONS} />
  </>
);

export default ProjectCarousel;
