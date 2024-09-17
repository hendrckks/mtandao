import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Container from '../Container';
import ProjectCard from '../ProjectCard';
import ProjectView from '../../app/pages/ProjectView';
import FlexibleBadge from '../TitleBadge';
import { Stack } from '../icons/Stack';

interface Project {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  year: string;
  workstreams: string[];
  currentRelationship: string;
  images: string[];
  Livelink: string;
}

const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectViewOpen, setIsProjectViewOpen] = useState(false);
  const location = useLocation();

  const projects: Project[] = [
    {
      id: 'supply',
      name: 'Supply',
      imageUrl: '/portfolio/supply.family.jpg',
      description:
        'Turned supply from a boring business into a cool minimalistic company through their website. Now all their clients will have an exquisite browsing experience when going through an endless cycle of indecisiveness, because of how good supply.family mockups are; they wont know which design to chose because they are all cool.(We cannot promise peace, but a website this good has gotta help, right?)',
      year: '2023-2024',
      workstreams: [
        'UX/UI Design',
        'Front-end Development',
        'Performance Optimization',
      ],
      currentRelationship: 'Ongoing',
      images: [
        '/portfolio/supply.family.jpg',
        // '/portfolio/vb.jpg',
        // '/portfolio/rt.jpg',
      ],
      Livelink: 'https://supply.family/',
    },
    {
      id: 'toolpro',
      name: 'Toolpro',
      imageUrl: '/portfolio/tools.png',
      description:
        'Transformed Tool Lab from a jumbled mess of tools into a sleek, user-friendly platform that is as easy on the eyes as it is on the wallet. Our team made sure every entrepreneur could find the perfect tool for their business without getting lost in a maze of jargon. From the moment they land on the page, they are guided smoothly through a world of productivity-boosting solutions.',
      year: '2023',
      workstreams: [
        'UI/UX Development',
        'Performance optimization',
        // 'API Integration',
      ],
      currentRelationship: 'ongoing',
      images: [
        // '/portfolio/supply.family.jpg',
        // '/portfolio/rt.jpg',
        '/portfolio/tools.png',
      ],
      Livelink: '',
    },
    {
      id: 'ccc-pay',
      name: 'CCC Pay',
      imageUrl: '/portfolio/rt.jpg',
      description:
        'Simplified the financial landscape for CCC Pay. Our team crafted a user-friendly landing page that made payments a breeze. With clear copy and a streamlined design, we helped CCC Pay attract new customers and enhance their brand reputation.',
      year: '2022-2023',
      workstreams: [
        'Landing Page',
        'Design',
        'Copy Writing',
        'performance optimization',
        'API integration',
      ],
      currentRelationship: '8 months',
      images: [
        // '/portfolio/supply.family.jpg',
        '/portfolio/rt.jpg',
        // '/portfolio/vb.jpg',
        // '/images/project3-4.jpg',
      ],
      Livelink: '',
    },
  ];

  useEffect(() => {
    const projectId = location.pathname.split('/work/')[1];
    if (projectId) {
      const project = projects.find((p) => p.id === projectId);
      if (project) {
        setSelectedProject(project);
        setIsProjectViewOpen(true);
      }
    } else {
      setIsProjectViewOpen(false);
    }
  }, [location]);

  const handleProjectClick = (id: string) => {
    const project = projects.find((p) => p.id === id);
    if (project) {
      setSelectedProject(project);
      setIsProjectViewOpen(true);
      window.history.pushState(null, '', `/work/${id}`);
    }
  };

  const handleCloseProjectView = () => {
    setIsProjectViewOpen(false);
    window.history.pushState(null, '', '/');
  };

  return (
    <div className="bg-[#f0efef] min-h-[100vh] py-20 relative">
      <Container className="mt-5 flex flex-col  lg:px-0 px-2 gap-24">
        <div className="text-[#131211] w-full lg:px-14 px-0">
          <FlexibleBadge
            icon={Stack}
            text="Portfolio"
            iconClassName="text-lg"
          />
          <h2 className="lg:text-6xl text-start mt-5 text-4xl font-semibold">
            See our latest projects
          </h2>
          <div className="flex-col gap-5">
            <p className="lg:text-4xl text-3xl text-[#131211] py-8">
              {/* Need a brand that’s so iconic, it’ll be etched into your
              customers’ minds before they even know it? We’re the experts. A
              website that’s so fast and user-friendly, it’ll make your
              competitors jealous? We’ve got that covered. Creative Strategy &
              Storytelling that’s so compelling, it’ll have your audience
              begging for more? Consider it done.Easy peasy. */}
              We do not like to brag, but <br />
              we have worked on
              <br /> <span className="text-[#b4b3b1]">some fire projects.</span>
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              imageUrl={project.imageUrl}
              onProjectClick={handleProjectClick}
            />
          ))}
        </div>
      </Container>
      <AnimatePresence>
        {isProjectViewOpen && selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-40"
              onClick={handleCloseProjectView}
            />
            <ProjectView
              project={selectedProject}
              onClose={handleCloseProjectView}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioSection;
