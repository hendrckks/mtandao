import { Link } from 'react-router-dom';
import Container from '../Container';
import CtaButton from '../CtaButton';
import { ArrowRoundRight } from '../icons/ArrowRoundRight';
import { Phone } from '../icons/Contact';
// import EnhancedPulsingLiveButton from '../icons/Livedot';

export default function Hero() {
  return (
    <div className="bg-white w-full">
      <Container className="mb-10 min-h-[700px] lg:min-w-[1300px] md:max-w-[1200px] h-fit px-4 md:px-24 lg:px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="py-16 lg:py-24 w-full text-[#131211] lg:w-1/2">
            <div>
              {/* <div className="flex items-center space-x-4">
                <EnhancedPulsingLiveButton />
                <div className="text-white text-base">
                  Now taking in new clients
                </div>
              </div> */}
              <h2 className="text-4xl md:text-6xl lg:text-5xl  font-semibold">
                Premium designs <br className="hidden lg:inline" />
                and web development to
                <br className="hidden lg:inline" /> grow your business
              </h2>
              <p className="py-6 mt-[16px] font-medium text-base lg:text-lg">
                Devscook replaces unreliable freelancers and expensive
                <br className="hidden lg:inline" /> agencies for one flat
                monthly fee, with designs delivered so fast that it will blow
                your mind.
              </p>
              <p className="mt-[16px] font-medium text-sm md:text-base lg:text-[18px]">
                Design and development subscriptions for everyone.
                <br />
                <br />
                <span className="text-[#b4b3b1] font-medium text-sm">
                  Pause or cancel anytime.
                </span>
              </p>
            </div>
            <div className="mt-8 lg:mt-10">
              <Link to="https://cal.com/devscook/devscook-intro">
                <CtaButton className="px-2 py-[7px] flex group items-center gap-4 w-2/4 lg:w-1/3 md:w-1/3 relative">
                  <div className="bg-[#b8ff45] z-30 relative w-1/2 py-2 flex items-center justify-center group-hover:w-full ease-out transition-all duration-300 px-2 rounded-full">
                    <ArrowRoundRight className="text-[#131211] group-hover:text-transparent font-bold text-[22px]" />
                    <Phone className="text-[#131211] hidden group-hover:block mr-6 font-extrabold text-[22px]" />
                  </div>
                  <span className="text-white absolute lg:left-[calc(48%+1rem)] md:left-[calc(46%+1rem)] left-[calc(44%+1rem)] group-hover:opacity-0 transition-opacity duration-300 font-medium">
                    Book a call
                  </span>
                </CtaButton>
                {/* <button
                  // onClick={handleViewPlansClick}
                  className="bg-[#131211] text-white border border-[#white] rounded-full lg:py-6 lg:px-8 py-3 px-6 font-medium tracking-tight whitespace-nowrap flex justify-center items-center transition-all duration-400 ease-in-out hover:bg-white hover:text-[#131211] hover:border-[#131211] hover:py-4 hover:px-7 hover:lg:py-6 hover:lg:px-9"
                >
                  Book a call
                </button> */}
              </Link>
            </div>
          </div>
          <div className="py-8 lg:py-24 w-full lg:w-1/2 text-[#131211]">
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
