import React from 'react'; 
import './embla.css';
import EmblaCarousel from './EmblaCarousel';

const OPTIONS = { loop: true }

const BlogsCarousel = ({ blogs }) => (
    <>
      <EmblaCarousel blogs={blogs} options={OPTIONS} />
    </>
);

export default BlogsCarousel;
