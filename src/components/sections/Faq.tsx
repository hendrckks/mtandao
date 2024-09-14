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
          <h2 className="text-4xl mt-6 font-semibold text-black">
            All the A's for your Q's
          </h2>
        </div>
        <FAQList faqs={faqData} />
      </Container>
    </div>
  );
};

export default Faq;
