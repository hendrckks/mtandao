import React from 'react';
import Container from '../Container';
import { ThumbsUpOutlineRounded } from '../icons/ThumbUp';
import FlexibleBadge from '../TitleBadge';
import TestimonialCard from '../Testimonials/TestimonialCard';
import TestimonialCarousel from '../Testimonials/TestimonialCarousel';
import Carousel from '../Carousel';

interface Testimonial {
  author: string;
  role: string;
  quote: string;
  imageUrl: string;
}

const staticTestimonials: Testimonial[] = [
  {
    author: 'Luis',
    role: 'e-Commerce',
    quote:
      "The Devcook crew made everything effortless. They listened to what we needed and delivered a site that's beautiful and user-friendly. These folks really know their stuff!",
    imageUrl: '/testimonials/testimonial1.webp',
  },
  {
    author: 'Aisha',
    role: 'Non-profit creative director',
    quote:
      "Devcook totally got our vision. They took some scattered ideas and turned them into a smooth and intuitive website. The process was super chill and we're beyond happy with the final look!",
    imageUrl: '/testimonials/testimonial2.webp',
  },
];

const scrollableTestimonials: Testimonial[] = [
  {
    author: 'Ravi',
    role: 'e-Commerce',
    quote:
      "We needed a fresh brand that really captured our style, and Devcook nailed it. The team is talented, down-to-earth, and just really easy to work with. Couldn't ask for better!",
    imageUrl: '/testimonials/testimonial3.webp',
  },
  {
    author: 'Isabella',
    role: 'Marketing lead',
    quote:
      "We're super impressed with how they handled our project. It went from concept to completion smoothly, and the end result is exactly what we were aiming for.",
    imageUrl: '/testimonials/testimonial4.webp',
  },
  {
    author: 'Tariq',
    role: 'e-Commerce',
    quote:
      "I loved working with Devcook! They brought our ideas to life in a way that feels authentic to our brand. Plus, they're really fun and easy to collaborate with—zero stress, all good vibes.",
    imageUrl: '/testimonials/testimonial5.webp',
  },
  {
    author: 'Sophie',
    role: 'Tech Startup Founder',
    quote:
      "Devcook's attention to detail is unmatched. They didn't just build a website; they created a digital experience that truly represents our brand. Highly recommended!",
    imageUrl: '/testimonials/testimonial6.webp',
  },
  {
    author: 'Marcus',
    role: 'UX Designer',
    quote:
      'As a designer myself, I have high standards. Devcook not only met them but exceeded them. Their work is a perfect blend of aesthetics and functionality.',
    imageUrl: '/testimonials/testimonial7.webp',
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white text-black py-20">
      <Container className="flex md:px-0 px-4 flex-col items-center">
        <div className="flex flex-col items-center text-center mb-12">
          <FlexibleBadge
            className="flex items-center justify-center"
            text="Testimonials"
            icon={ThumbsUpOutlineRounded}
          />
          <h2 className="md:text-5xl text-4xl mt-6 font-semibold text-black">
            Don't Take our Word for It.
          </h2>
          <p className="md:text-4xl text-3xl mt-4">
            Reputation is everything.
            <br /> <span className="text-[#b4b3b1]">Ours is flawless.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {staticTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="w-full">
          <TestimonialCarousel testimonials={scrollableTestimonials} />
        </div>
      </Container>
      <Carousel />
    </div>
  );
};

export default Testimonials;
