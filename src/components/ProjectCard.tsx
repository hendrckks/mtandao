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
    console.log('ProjectCard clicked:', id);
    onProjectClick(id);
  };

  return (
    <article className="flex flex-col mb-10">
      <a
        href={`/project/${id}`}
        onClick={handleClick}
        className="group no-underline"
        aria-label={`View project: ${name}`}
      >
        <div className="lg:w-[530px] w-full h-[630px] shadow-md rounded-3xl overflow-hidden">
          <img
            src={imageUrl}
            alt={`${name} project thumbnail`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="flex justify-between items-center text-base px-5 mt-5">
          <p className="text-[#131211] font-semibold">{name}</p>
          <div className="flex items-center gap-2">
            <span className="text-[#9b9997] group-hover:text-[#131211] transition-colors duration-300">
              View Project
            </span>
            <span className="text-[#9b9997] mb-1 text-lg font-semibold group-hover:text-[#131211]">
              <ArrowUpRightBoxOutline />
            </span>
          </div>
        </div>
      </a>
    </article>
  );
};

export default ProjectCard;
