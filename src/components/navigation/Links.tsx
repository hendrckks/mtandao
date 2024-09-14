import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavitemProps } from './types';

const NavItem: React.FC<NavitemProps> = ({ icon: Icon, label, href }) => {
  return (
    <motion.div className="relative group" initial="initial" whileHover="hover">
      <Link to={href} className="bg-[#2e2e2e] p-2 rounded-full">
        <div className="h-14 w-14 flex justify-center items-center">
          <Icon />
        </div>
      </Link>
      <motion.div
        variants={{
          initial: { opacity: 0, y: 10 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white text-sm rounded whitespace-nowrap pointer-events-none z-10"
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

export default NavItem;
