import React from 'react';
import ArrowUpRightBoxOutline from './icons/ArrowTopright';

interface ProjectCardProps {
  id: string;
  name: string;
  imageUrl: string;
  onProjectClick: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  imageUrl,
  onProjectClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('ProjectCard clicked:', id);
    onProjectClick(id);
  };

  return (
    <div className="flex flex-col mb-10">
      <div
        onClick={handleClick}
        className="lg:w-[530px] w-full h-[630px] shadow-md rounded-xl cursor-pointer overflow-hidden"
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="flex justify-between items-center text-base px-5 mt-5">
        <div>
          <p className="text-[#131211]">{name}</p>
        </div>
        <div onClick={handleClick} className="flex items-center gap-2 group">
          <button
            onClick={handleClick}
            className="text-[#9b9997] group-hover:text-[#131211] transition-colors duration-300"
          >
            View Project
          </button>
          <div className="text-[#9b9997] mb-1 text-lg font-semibold group-hover:text-[#131211]">
            <ArrowUpRightBoxOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
