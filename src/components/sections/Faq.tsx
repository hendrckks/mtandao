import React from 'react';
import Container from '../Container';
import { Comments } from '../icons/Comment';
import FlexibleBadge from '../TitleBadge';
import FAQList from '../faq/FaqList';
import { faqData } from '../faq/Faq';

const Faq: React.FC = () => {
  return (
    <div className="bg-white text-black py-20">
      <Container className="flex flex-col md:px-0 px-4 mt-20 items-center">
        <div className="flex flex-col items-center text-center">
          <FlexibleBadge
            className="flex items-center justify-center"
            text="FAQs"
            icon={Comments}
          />
          <h2 className="md:text-4xl text-3xl mt-6 font-medium text-black">
            Got any questions?
            <br /> <span className="text-[#b4b3b1]">We've got answers.</span>
          </h2>
        </div>
        <FAQList faqs={faqData} />
      </Container>
    </div>
  );
};

export default Faq;
