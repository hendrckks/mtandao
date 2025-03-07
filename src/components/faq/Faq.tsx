import React from 'react';

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: 'What services do you offer?',
    answer: 'We offer comprehensive web development and design services, including React development, brand identity creation, e-commerce solutions, and custom software development. Our team specializes in creating responsive, user-friendly websites and applications tailored to your business needs.'
  },
  {
    question: 'How does your subscription model work?',
    answer: 'Our subscription model provides continuous design and development services for a flat monthly fee. You can pause or cancel at any time, giving you complete flexibility. This includes regular updates, maintenance, and new feature implementations based on your subscription tier.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on complexity and scope. Typically, simple websites can be completed in 2-4 weeks, while more complex applications may take 6-12 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.'
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we offer comprehensive post-launch support and maintenance services. This includes bug fixes, security updates, performance optimization, and feature enhancements. Our support packages can be customized based on your specific needs.'
  },
  {
    question: 'Can you help with existing projects or only new ones?',
    answer: 'We work with both new and existing projects. Our team is experienced in taking over existing codebases, performing audits, implementing improvements, and adding new features to your current applications.'
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern web technologies including React, TypeScript, Node.js, and various other frontend and backend frameworks. We stay current with industry best practices and emerging technologies to deliver optimal solutions.'
  }
];

// FAQ Schema for SEO
export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});