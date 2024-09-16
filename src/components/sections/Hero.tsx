import { Link } from 'react-router-dom';
import Container from '../Container';
import CtaButton from '../CtaButton';
import { ArrowRoundRight } from '../icons/ArrowRoundRight';
import { Phone } from '../icons/Contact';

export default function Hero() {
  return (
    <div className="bg-white w-full">
      <Container className="mb-10 min-h-[700px] lg:min-w-[1300px] md:max-w-[1200px] h-fit px-4 md:px-24 lg:px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="py-16 lg:py-24 w-full text-black lg:w-1/2">
            <div>
              <h2 className="text-5xl md:text-7xl lg:text-6xl  font-semibold">
                Premium web <br className="hidden lg:inline" />
                designs and
                <br className="hidden lg:inline" /> development to grow your
                business
              </h2>
              <p className="py-6 mt-[16px] font-normal text-base md:text-xl lg:text-xl">
                Devcook replaces unreliable freelancers and expensive
                <br /> agencies for one flat monthly fee, with designs delivered
                so fast that it will blow your mind.
              </p>
              <p className="mt-[16px] font-normal text-sm md:text-base lg:text-[18px]">
                Design and development subscriptions for everyone.
                <br />
                <br />{' '}
                <span className="text-[#b4b3b1] text-sm">
                  Pause or cancel anytime.
                </span>
              </p>
            </div>
            <div className="mt-8 lg:mt-10">
              <Link to="https://cal.com/devcook/devcook-intro">
                <CtaButton className="px-2 py-[7px] flex group items-center gap-4 w-2/3 lg:w-1/3 md:w-1/3 relative">
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
          <div className="py-8 lg:py-24 w-full lg:w-1/2 text-black">
            <img
              src="/commerce/xd.jpg"
              alt="we do"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
