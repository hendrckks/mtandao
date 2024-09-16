import React, { useState, useRef, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import Container from '../Container';
import { ArrowLeft } from '../icons/ArrowLeft';
import { ArrowrRight } from '../icons/ArrowRight';

interface Testimonial {
  author: string;
  role: string;
  quote: string;
  imageUrl: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const scrollAmount = index * carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }
  };

  useEffect(() => {
    const handleResize = () => scrollToIndex(currentIndex);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <Container className="mb-6">
      <div className="relative w-full max-w-6xl mx-auto">
        <div
          className="overflow-hidden"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex gap-4 transition-transform duration-300 ease-in-out">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
              >
                <TestimonialCard {...testimonial} isSmall={true} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevTestimonial}
          className="absolute top-1/2 left-0 md:left-[-40px] h-10 w-10 transform -translate-y-1/2 bg-black rounded-full p-2 shadow-md z-10"
        >
          <ArrowLeft className="mx-auto text-white" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute top-1/2 right-0 md:right-[-40px] h-10 w-10 transform -translate-y-1/2 bg-black rounded-full p-2 shadow-md z-10"
        >
          <ArrowrRight className="mx-auto text-white" />
        </button>
      </div>
    </Container>
  );
};

export default TestimonialCarousel;
