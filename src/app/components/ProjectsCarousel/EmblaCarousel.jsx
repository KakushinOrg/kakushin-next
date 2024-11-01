"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarouselArrowButton";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";

const EmblaCarousel = (props) => {
  const { projects, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="project-embla">
      <div className="project-embla__viewport px-4" ref={emblaRef}>
        <div className="project-embla__container my-4">
          {projects.map((project, index) => {

            return (
              <div className="project-embla__slide h-full transform transition-transform duration-300 hover:scale-105" key={index}>
                <div className="bg-gray-100/80 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={300}
                    height={150}
                    className="project-embla__image rounded-md mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4">{project.description}</p>
                </div>
              </div>

            );
          })}
        </div>
      </div>

      <div className="project-embla__controls px-2">
        <div className="project-embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="project-embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`project-embla__dot ${index === selectedIndex ? 'project-embla__dot--selected' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
