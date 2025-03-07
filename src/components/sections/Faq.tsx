import React from 'react';
import Container from '../Container';
import { Comments } from '../icons/Comment';
import FlexibleBadge from '../TitleBadge';
import FAQList from '../faq/FaqList';
import { faqData, getFAQSchema } from '../faq/Faq';
import { Helmet } from 'react-helmet';

const Faq: React.FC = () => {
  return (
    <section className="bg-white text-[#131211] py-20" aria-labelledby="faq-title">
      <Helmet>
        <title>Frequently Asked Questions | Devscook Software Development Services</title>
        <meta name="description" content="Find answers to common questions about our web development, design services, project timelines, and technology stack. Get detailed information about our subscription model and support services." />
        <script type="application/ld+json">
          {JSON.stringify(getFAQSchema())}
        </script>
      </Helmet>
      <Container className="flex flex-col md:px-0 px-4 gap-10 mt-20 items-center">
        <header className="flex flex-col items-center text-center">
          <FlexibleBadge
            className="flex items-center justify-center"
            text="FAQs"
            icon={Comments}
          />
          <h1 id="faq-title" className="md:text-4xl text-3xl mt-6 font-medium text-[#131211]">
            Got any questions?
            <br /> <span className="text-[#b4b3b1]">We've got answers.</span>
          </h1>
        </header>
        <FAQList faqs={faqData} />
      </Container>
    </section>
  );
};

export default Faq;
