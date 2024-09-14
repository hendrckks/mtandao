import { motion } from 'framer-motion';
import Container from './Container';
import { ArrowDownDashedSquareSolid } from './icons/ArrowDashed';

const messages = [
  'Turn your ideas to reality.',
  'Only work with the best.',
  'No problem is too big.',
  'Turn your ideas to reality.',
  'Only work with the best.',
  'No problem is too big.',
  'Turn your ideas to reality.',
  'Only work with the best.',
  'No problem is too big.',
  'Turn your ideas to reality.',
  'Only work with the best.',
  'No problem is too big.',
];

const Carousel = () => {
  return (
    <div className="relative w-full mt-8 bg-black">
      <Container>
        <div className="overflow-hidden max-w-[80vw] relative">
          {/* Left and right gradient overlays */}
          <div className="absolute top-0 left-0 h-full md:w-20 w-10 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full md:w-20 w-10 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex items-center py-8 justify-center space-x-28 text-white text-xl"
            animate={{ x: [-1000, 0, 1000] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20, // Adjust the speed here
              ease: 'linear',
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className="text-xl font-neue-regrade flex gap-4 items-center font-medium whitespace-nowrap"
              >
                {message}
                <ArrowDownDashedSquareSolid className="text-[#b8ff45] text-2xl" />
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Carousel;
