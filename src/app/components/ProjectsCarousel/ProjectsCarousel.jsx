import React from 'react'; 
import './embla.css';
import EmblaCarousel from './EmblaCarousel';

const OPTIONS = {slidesToScroll: 'auto' }

const ProjectCarousel = ({ projects }) => (
    <>
      <EmblaCarousel projects={projects} options={OPTIONS} />
    </>
);

export default ProjectCarousel;
