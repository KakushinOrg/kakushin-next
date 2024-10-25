"use client";

import React, { useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarouselArrowButton";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = (props) => {
  const { testimonials, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === 'scroll';

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  return (
    <div className="testimonial-embla">
      <div className="testimonial-embla__viewport" ref={emblaRef}>
        <div className="testimonial-embla__container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-embla__slide" key={index}>
              <div className="relative flex flex-col items-center bg-[#f5ead3] shadow-sm rounded-lg p-10 mx-auto my-10">
                <div className="absolute top-0 right-0 w-[4rem] h-[4rem] bg-[#F7F7F7] rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-0 left-0 w-[2rem] h-[2rem] bg-[#F7F7F7] rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <p className="text-lg mb-4">{testimonial.text}</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial-embla__controls">
        <div className="testimonial-embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="testimonial-embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`testimonial-embla__dot ${index === selectedIndex ? 'testimonial-embla__dot--selected' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
