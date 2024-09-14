import { Link } from 'react-router-dom';
import Container from '../Container';
import CtaButton from '../CtaButton';
import { ArrowRoundRight } from '../icons/ArrowRoundRight';
import { Phone } from '../icons/Contact';

export default function Hero() {
  return (
    <div className="bg-white w-full md:min-w-[1260px]">
      <Container className="mb-10 md:h-[678px] h-fit md:px-0 px-4 w-full">
        <div className="flex flex-col md:flex-row w-full">
          <div className="py-24 w-full text-black md:w-1/2">
            <div>
              <h2 className="text-5xl font-semibold">
                Design & No-Code delivered <br className="hidden md:inline" />{' '}
                fast and flawlessly
              </h2>
              <p className="mt-[16px] text-[18px]">
                Where creativity meets speed.{' '}
                <br className="hidden md:inline" /> Your ideas are just a click
                away!
              </p>
            </div>
            <div className="mt-10">
              <Link to="/contact-us">
                <CtaButton className="px-2 py-[7px] flex group items-center gap-4 w-2/3 md:w-1/3 relative">
                  <div className="bg-[#b8ff45] z-50 relative w-1/2 py-2 flex items-center justify-center group-hover:w-full ease-out transition-all duration-300 px-2 rounded-full">
                    <ArrowRoundRight className="text-black group-hover:text-transparent font-bold text-[22px]" />
                    <Phone className="text-black hidden group-hover:block mr-6 font-extrabold text-[22px]" />
                  </div>
                  <span className="text-white absolute left-[calc(50%+1rem)] group-hover:opacity-0 transition-opacity duration-300 font-semibold">
                    Book a call
                  </span>
                </CtaButton>
              </Link>
            </div>
          </div>
          <div className="md:py-24 py-16 w-full md:w-1/2 text-black">
            <img
              src="/framer 2.webp"
              alt="we do"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
