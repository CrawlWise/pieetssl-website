"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Button from '../ui/Button'
import { carouselData } from '@/site-contents/site/carousel';
import { ChevronRight, ChevronLeft  } from 'lucide-react';
import "./Carousel.css";

export default function CarouselClient() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 8000 })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="embla relative w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {carouselData.map(({id, title, subtitle, description, btnText, btnLink, img}) => (
            <div
              key={id}
              style={{ backgroundImage: `url(${img})` }}
              className="embla__slide relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen bg-cover bg-center min-h-screen"
            >
              <div className="absolute inset-0 bg-overlay z-0"></div>
              <div className="relative z-10 flex items-center justify-center h-full w-full p-5">
                <div className="banner-text-wrapper text-center text-white">
                  <div className="banner-text-info space-y-4 max-w-3xl mx-auto">
                    <h1 className="h1 lg:!text-6xl md:!text-4xl !text-2xl w-11/12">{title}</h1>
                    <h2 className="h2">{subtitle}</h2>
                      <p>{description}</p>
                  </div>

                  {btnLink && btnText && (
                    <div className="banner-btn mt-5">
                      <Button href={btnLink} variant="default">
                        <span className="flex flex-row">{btnText}</span>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="btn-nav absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-4">
        <Button onClick={scrollPrev} variant="ghost" className="embla__prev p-2">
          <ChevronLeft className="w-6 h-6" color="white" />
        </Button>
        <Button onClick={scrollNext} variant="ghost" className="embla__next p-2">
          <ChevronRight className="w-6 h-6" color="white" />
        </Button>
      </div>
    </div>
  );
}
