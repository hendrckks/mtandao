import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from '../icons/X';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => (
  <div className="w-full mt-4 border-b shadow-md bg-[#f2f2f2] py-2 px-4 rounded-lg border-gray-200">
    <button
      className="flex justify-between items-center w-full py-4 text-left"
      onClick={onClick}
    >
      <span className="text-base font-medium">{question}</span>
      <motion.div
        animate={{ rotate: isOpen ? 0 : 45 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-1 rounded-full bg-black">
          <X className="w-5 h-5 text-[#b8ff45]" />
        </div>
      </motion.div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="pb-4 text-gray-600">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default FAQItem;
