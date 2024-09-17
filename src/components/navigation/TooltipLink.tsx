import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { TooltipLinkProps } from './types';

const TooltipLink: React.FC<TooltipLinkProps> = ({
  to,
  icon: Icon,
  tooltip,
  noActiveBackground = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <div className="relative mx-1">
      <Link
        to={to}
        className={`block p-3 rounded-full transition-colors duration-200 ${
          isActive && !noActiveBackground
            ? 'bg-[#b8ff45]'
            : 'bg-[#2e2e2e] hover:bg-[#3e3e3e]'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-8 w-8 flex justify-center items-center">
          <Icon
            className={`text-xl ${
              isActive && !noActiveBackground ? 'text-black' : 'text-[#f2f2f2]'
            } transition-colors`}
          />
        </div>
      </Link>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-[#2e2e2e] text-white text-[12px] rounded-r-2xl rounded-bl-none rounded-tl-2xl whitespace-nowrap"
          >
            {tooltip}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TooltipLink;
