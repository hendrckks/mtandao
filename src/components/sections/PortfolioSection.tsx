import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
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
      imageUrl: '/portfolio/supply.family.webp',
      description:
        'Turned supply from a boring business into a cool minimalistic company through their website. Now all their clients will have an exquisite browsing experience when going through an endless cycle of indecisiveness, because of how good supply.family mockups are; they wont know which design to chose because they are all cool.(We cannot promise peace, but a website this good has gotta help, right?)',
      year: '2023-2024',
      workstreams: [
        'UI/UX Design',
        'Front-end Development',
        'Performance Optimization',
      ],
      currentRelationship: 'Ongoing',
      images: [
        '/portfolio/supply.family.webp',
        // '/portfolio/vb.jpg',
        // '/portfolio/rt.jpg',
      ],
      Livelink: 'https://supply.family/',
    },
    {
      id: 'under',
      name: 'Under',
      imageUrl: '/portfolio/under web.png',
      description:
        'Dive into the extraordinary with Under, Norwayʼs subaquatic culinary sensation. Located 5.5 meters beneath the Norwegian Sea, this 495-square-meter marvel is Europeʼs first and the worldʼs largest underwater restaurant. Our team brought this unique venue to life online, capturing the awe of dining amidst marine life through an immersive web experience. The site showcases Underʼs 40-person capacity dining room, where guests savor exquisite cuisine while surrounded by the mesmerizing deep. Discover how we translated this underwater wonder into a digital masterpiece, blending cutting-edge web design with the restaurantʼs groundbreaking concept.',
      year: '2023-2024',
      workstreams: [
        'Logo Design',
        'UI/UX Design',
        'Web Development',
        'Copy Writing',
        'performance Optimization',
        'API Integration',
      ],
      currentRelationship: '8 months',
      images: [
        // '/portfolio/supply.family.jpg',
        '/portfolio/under web.png',
        // '/portfolio/vb.jpg',
        // '/images/project3-4.jpg',
      ],
      Livelink: 'https://under.no/en/',
    },
    {
      id: 'nova',
      name: 'Nova speaker',
      imageUrl: '/portfolio/nova5.jpg',
      description:
        'This was a branding concept we did for nova speakers. The concept was primarily focused on making the brand look and be a premium project. Their good quality product needed good branding that extensively made a stance in the stereo industry. We were going for a premium yet minimalistic path.',
      year: '2023-2024',
      workstreams: ['Brand Identity', 'UI design'],
      currentRelationship: '2 months',
      images: [
        // '/portfolio/supply.family.webp',
        '/portfolio/nova2.jpg',
        '/portfolio/nova6.jpg',
        '/portfolio/nova4.jpg',
        '/portfolio/nova1.jpg',
        '/portfolio/nova3.jpg',
      ],
      Livelink: '',
    },
    {
      id: 'rugafix',
      name: 'Rugafix',
      imageUrl: '/portfolio/RUGA8.webp',
      description: '',
      year: '2023',
      workstreams: ['Brand Development concept'],
      currentRelationship: '1 month',
      images: [
        // '/portfolio/supply.family.jpg',
        // '/portfolio/rt.jpg',
        '/portfolio/RUGA7.webp',
        '/portfolio/RUGA1.webp',
        '/portfolio/RUGA9.webp',
        '/portfolio/Layer 2.webp',
        '/portfolio/RUGA6.webp',
        '/portfolio/Layer 1.webp',
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
    <section className="bg-[#f0efef] min-h-[100vh] py-12 relative" aria-label="Portfolio Projects">
      <Helmet>
        <title>Our Portfolio - Featured Web Development & Design Projects | Devscook</title>
        <meta name="description" content="Explore our portfolio of successful web development and design projects. From brand development to e-commerce solutions, see how we've helped businesses transform their digital presence." />
        <meta name="keywords" content="web development portfolio, design projects, brand development, UI/UX design, successful projects, digital transformation" />
        <link rel="canonical" href="https://devscook.com/portfolio" />
      </Helmet>
      <Container className="flex flex-col lg:px-0 px-2 gap-24">
        <div className="text-[#131211] w-full lg:px-14 md:px-20 px-0">
          <FlexibleBadge
            icon={Stack}
            text="Portfolio"
            iconClassName="text-lg"
          />
          <h2 className="lg:text-4xl text-start mt-6 text-3xl font-semibold">
            See our latest projects
          </h2>
          <div className="flex-col gap-5">
            <p className="lg:text-3xl text-2xl text-[#131211] mt-6 font-medium">
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
        <div className="grid lg:grid-cols-2 grid-cols-1 md:mt-0 mt-[-15px] gap-5" role="list" aria-label="Portfolio Projects Grid">
          {projects.map((project) => (
            <div role="listitem" aria-label={`${project.name} Project`}>
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                imageUrl={project.imageUrl}
                onProjectClick={handleProjectClick}
              />
            </div>
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
    </section>
  );
};

export default PortfolioSection;
