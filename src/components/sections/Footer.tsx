import { Link } from 'react-router-dom';
import Container from '../Container';
import FlexibleBadge from '../TitleBadge';

const Footer = () => {
  return (
    <div className="bg-black w-full py-12 h-[50vh]">
      <Container className="text-white flex-col">
        <div>
          <h2 className="text-xl">Mtandao</h2>
        </div>
        <div className="py-14">
          <Container>
            <ul className="md:space-x-10 space-x-4 flex items-center text-base">
              <button>
                <li>About</li>
              </button>
              <button>
                <li>Testimonials</li>
              </button>
              <button>
                <li>Portfolio</li>
              </button>
              <button>
                <li>Pricing</li>
              </button>
              <Link to="/contact-us">
                <li>Contact</li>
              </Link>
            </ul>
          </Container>
        </div>
        <div className="flex items-center space-x-4 text-[#f2f2f2] text-sm">
          <span>Privacy policy</span>
          <span>Terms of service</span>
        </div>
        <div className="py-14 space-x-4 flex items-center">
          <FlexibleBadge
            text="Work with us"
            iconClassName="hidden"
            textClassName="text-black"
            className="p-3 bg-white cursor-pointer"
          />
          <FlexibleBadge
            text="See testimonials"
            iconClassName="hidden"
            textClassName="text-black"
            className="p-3 bg-white cursor-pointer"
          />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
