import React from 'react';
import Container from '../Container';
import { ArrowDownRightSquare } from '../icons/ArrowDown';

interface TestimonialSnippetProps {
  testimonialsRef: React.RefObject<HTMLDivElement>;
}

const TestimonialSnippet: React.FC<TestimonialSnippetProps> = ({
  testimonialsRef,
}) => {
  const scrollToTestimonials = () => {
    if (testimonialsRef.current) {
      const yOffset = -80; // Adjust this value to account for any fixed headers
      const y =
        testimonialsRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex bg-[#0d0d0d] py-14 text-white w-ful md:min-w-[1260px]">
      <Container className="md:flex flex-row md:px-0 px-4 flex-wrap md:justify-between w-full">
        <div className="flex-col items-center">
          <img
            src="/testimonials/testimonial1.webp"
            className="w-14 h-14 rounded-full object-cover mr-4"
            alt="testimonial"
          />
          <p className="lg:text-[20px] mt-4 text-base">
            "We're stoked with the work from Devscook. Very clean work"
          </p>
          <div className="flex gap-2 mt-2  text-sm">
            <p className="">Amy</p>
            <span className="text-[#b8ff45]">-</span>
            <p>Biscotto haven Co-founder</p>
          </div>
        </div>
        <div className="text- mt-4 gap-4 lg:text-base text-sm flex items-center">
          See all testimonials
          <button
            className="ml-2 hover:text-[#b8ff45] cursor-pointer"
            onClick={scrollToTestimonials}
          >
            <ArrowDownRightSquare className="text-[28px]" />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default TestimonialSnippet;
