import { Link } from 'react-router-dom';
import Container from '../Container';
import CtaButton from '../CtaButton';
import { ArrowRoundRight } from '../icons/ArrowRoundRight';
import { Phone } from '../icons/Contact';

export default function Hero() {
  return (
    <div className="bg-white w-full">
      <Container className="mb-10 md:min-h-[700px] md:min-w-[1300px] h-fit px-4 w-full">
        <div className="flex flex-col md:mt-10 mt-0 md:flex-row w-full">
          <div className="md:py-24 py-14 w-full text-black md:w-1/2">
            <div>
              <h2 className="text-5xl md:text-7xl font-semibold">
                A Web Development <br className="hidden md:inline" /> Agency
                With a Twist
              </h2>
              <p className="py-6 md:mt-[16px] font-normal md:text-xl text-base">
                Tenfold replaces unreliable freelancers and expensive agencies
                <br />
                for one flat monthly fee, with designs delivered so fast that it
                will blow your mind.
              </p>
              <p className="mt-4 md:mt-[16px] font-normal text-sm md:text-[18px]">
                Design subscriptions and development for everyone.
                <br />
                <br /> Pause or cancel anytime.
              </p>
            </div>
            <div className="mt-8 md:mt-10">
              <Link to="/contact-us">
                <CtaButton className="px-2 py-[7px] flex group items-center gap-4 md:w-1/3 w-2/3 relative">
                  <div className="bg-[#b8ff45] z-30 relative w-1/2 py-2 flex items-center justify-center group-hover:w-full ease-out transition-all duration-300 px-2 rounded-full">
                    <ArrowRoundRight className="text-black group-hover:text-transparent font-bold text-[22px]" />
                    <Phone className="text-black hidden group-hover:block mr-6 font-extrabold text-[22px]" />
                  </div>
                  <span className="text-white absolute left-[calc(48%+1rem)] group-hover:opacity-0 transition-opacity duration-300 font-medium">
                    Book a call
                  </span>
                </CtaButton>
              </Link>
            </div>
          </div>
          <div className="md:py-24 py-8 w-full md:w-1/2 text-black">
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
