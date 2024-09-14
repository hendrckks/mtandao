export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: 'Why not hiring a full time person?',
    answer:
      'Hiring a full-time senior-level designer now exceeds $100,000 plus benefits. We make it easy for you to work with design teams instead of managing them yourself, plus, you can pause your subscription until you need design work delivered again.',
  },
  {
    question: 'Is there a limit on the requests?',
    answer:
      'There is no limit on the number of design requests you can submit.',
  },
  {
    question: 'How does pausing work?',
    answer:
      "You can pause your subscription at any time. During the pause, you won't be charged, and you can resume when you need design work again.",
  },
  {
    question: 'What is the software stack?',
    answer:
      'We use industry-standard design tools such as Adobe Creative Suite and Figma.',
  },
  {
    question: "What if I'm not happy with the designs?",
    answer:
      "We offer unlimited revisions to ensure you're satisfied with the final product. If you're still not happy, we'll work with you to find a solution.",
  },
];
