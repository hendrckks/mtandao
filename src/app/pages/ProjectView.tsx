//hide the scroll thingy
//add the scroll to pricing and plans functionality

import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Container from '../../components/Container';
import { X } from '../../components/icons/X';
import { NavbarContext } from '../../components/navigation/NavbarContext';
import PulsingDot from '../../components/icons/Livedot';
import { Link } from 'react-router-dom';

interface ProjectViewProps {
  project: {
    id: string;
    name: string;
    description: string;
    year: string;
    workstreams: string[];
    currentRelationship: string;
    images: string[];
    Livelink: string;
  };
  onClose: () => void;
}

const ProjectView: React.FC<ProjectViewProps> = ({ project, onClose }) => {
  const { scrollToSection } = useContext(NavbarContext);

  const handleViewPlansClick = () => {
    onClose();
    scrollToSection('pricing');
  };
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      className="fixed inset-x-0 bottom-0 lg:h-[78vh] h-[95vh] bg-[#fafafa] shadow-lg text-[#131211] rounded-t-3xl overflow-y-auto z-50"
      onClick={(e) => e.stopPropagation()}
    >
      <Container className="container mx-auto flex flex-col text-[#131211] items-start lg:py-20 lg:px-20 p-2 py-10">
        <button
          onClick={onClose}
          className="absolute lg:top-8 top-12 right-10 text-gray-500 hover:text-gray-700"
        >
          <X className="text-black text-2xl" />
        </button>
        <h2 className="lg:text-[40px] text-3xl font-bold mb-10">
          {project.name}
        </h2>
        <p className="lg:mb-20 mb-10 lg:text-lg text-sm lg:w-2/3 w-full text-[#9b9997]">
          {project.description}
        </p>

        {/* Workstreams Section */}
        <div className="w-full mb-10">
          <h3 className="text-base mb-4 text-[#9b9997]">Workstreams</h3>
          <ul className="flex flex-col lg:flex-row lg:flex-wrap">
            {project.workstreams.map((stream, index) => (
              <li
                className="flex items-center mb-2 lg:mb-4 lg:mr-8"
                key={index}
              >
                <span className="text-[#9b9997] mr-4">|</span>
                <span className="text-[#131211]">{stream}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Year Section */}
        <div className="w-full mb-10">
          <p className="text-[#9b9997] mb-2">Year</p>
          <p className="flex items-center">
            <span className="text-[#9b9997] mr-4">|</span>
            <span className="text-[#131211]">{project.year}</span>
          </p>
        </div>

        {/* Current Relationship Section */}
        <div className="w-full mb-20">
          <p className="text-[#9b9997] mb-2">Engagement</p>
          <p className="flex items-center">
            <span className="text-[#9b9997] mr-4">|</span>
            <span className="text-[#131211]">
              {project.currentRelationship}
            </span>
          </p>
        </div>

        {/* Images Section */}
        <Container className="flex flex-col items-center w-full gap-4">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="w-full lg:h-[800px] h-[500px] border border-[#d8d9ec] bg-[#f2f2f2] lg:p-6 p-0 overflow-hidden rounded-xl"
            >
              <img
                src={image}
                alt={`Project image ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
          <Link
            className="bg-[#131211] mt-5 text-white border border-[#131211] rounded-full lg:py-5 lg:px-8 py-4 px-6 font-medium tracking-tight whitespace-nowrap flex justify-center items-center transition-all duration-400 ease-in-out hover:bg-white hover:text-[#131211] hover:border-[#131211] hover:py-4 hover:px-7 hover:lg:py-5 hover:lg:px-9"
            to={project.Livelink}
          >
            Live Demo
          </Link>
        </Container>
        <Container className="bg-[#131211] w-full h-[500px] rounded-3xl gap-10 mt-10 flex flex-col text-center">
          <div className="flex items-center space-x-4">
            <PulsingDot />
            <div className="text-white text-base">
              Now taking in new clients
            </div>
          </div>
          <div className="lg:text-6xl text-4xl">
            <p className=" text-white/60">Ready to Cook?</p>
            <p className=" text-white">Get started today.</p>
          </div>
          <div>
            <button
              onClick={handleViewPlansClick}
              className="bg-white text-[#131211] border border-[#131211] rounded-full lg:py-6 lg:px-8 py-4 px-6 font-medium tracking-tight whitespace-nowrap flex justify-center items-center transition-all duration-400 ease-in-out hover:bg-[#131211] hover:text-white hover:border-white hover:py-4 hover:px-7 hover:lg:py-6 hover:lg:px-9"
            >
              View plans & pricings
            </button>
          </div>
        </Container>
        <div
          onClick={onClose}
          className="text-gray-500 items-center w-full flex justify-center py-8 hover:text-gray-700"
        >
          <X className="text-black text-3xl cursor-pointer" />
        </div>
      </Container>
    </motion.div>
  );
};

export default ProjectView;
