import Container from '../Container';
import PricingCard from '../pricing/PricingCard';
import { GraphArrowIncreaseSolid } from '../icons/KickStater';
import { Rocket } from '../icons/Rocket';
import { ArrowCursor2 } from '../icons/Navigater';
import AdditionalOption from '../pricing/PricingCta';
import { ToggleOutline } from '../icons/Toogles';
import FlexibleBadge from '../TitleBadge';

const pricingPlans = [
  {
    title: 'Kickstarter',
    price: 2595,
    description: 'One request at a time. Pause or cancel anytime.',
    icon: <GraphArrowIncreaseSolid className="text-black" />,
    features: [
      { text: 'Unlimited Stock Photos', included: true },
      { text: 'Average 96 hour delivery', included: true },
      { text: 'Updates Every 2 days.', included: true },
      { text: 'Unlimited Iterations.', included: true },
      { text: 'Slack Communication.', included: true },
      { text: 'Pause or cancel anytime.', included: true },
      { text: 'Full Stack Sesign (no development)', included: true },
    ],
  },
  {
    title: 'Pro',
    price: 3995,
    description: 'Double requests at a time. Pause or cancel anytime.',
    icon: <Rocket className="text-black" />,
    features: [
      { text: 'Unlimited Stock Photos.', included: true },
      { text: 'Updates every day.', included: true },
      { text: 'Pause or cancel anytime.', included: true },
      { text: 'Unlimited iterations.', included: true },
      { text: 'Slack communication.', included: true },
      { text: 'Full stack design + development', included: true },
    ],
  },
  //   {
  //     title: 'Enterprise',
  //     price: 10000,
  //     description: 'For large scale operations.',
  //     icon: <ArrowCursor2 className="text-black" />,
  //     features: [
  //       { text: 'Unlimited Requests.', included: true },
  //       { text: 'Daily updates.', included: true },
  //       { text: 'Unlimited iterations.', included: true },
  //       { text: 'Dedicated project manager.', included: true },
  //       { text: 'Full stack design + development + maintenance', included: true },
  //     ],
  //   },
];

const additionalOptions: Array<React.ComponentProps<typeof AdditionalOption>> =
  [
    {
      backgroundColor: 'black',
      icon: (
        <div className="bg-[#b8ff45] p-4 rounded-lg">
          <ArrowCursor2 className="text-black w-6 h-6" />
        </div>
      ),
      title: 'Redesign your Hero section.',
      description:
        'Redesign your hero section to something that actually converts and aesthetically pleases. Look at it as, ahh a facelift but for websites.Lol',
      buttonText: 'Inquire',
      buttonLink: 'https://contra.com/your-profile',
    },
    {
      backgroundColor: 'white',
      icon: (
        <div className="bg-[#b8ff45] p-4 rounded-lg">
          <ToggleOutline className="text-black w-6 h-6" />
        </div>
      ),
      title: 'Custom Request?',
      description: "Can't decide? Call us.",
      buttonText: 'Book a 15 min call with us',
      buttonLink: 'https://calendly.com/your-booking-link',
    },
  ];

export default function Pricing() {
  return (
    <div className="bg-gradient-to-r from-[#f2f2f2] to-white">
      <Container className="flex-col md:px-0 px-4 items-start">
        <div className="py-12 flex flex-col w-full">
          <div className="bg-black flex w-fit text-sm mb-6 items-center justify-center gap-2 rounded-full px-4 py-2">
            <FlexibleBadge text="Pricing" />
          </div>
          <div className="text-black mb-8">
            <p className="text-4xl font-semibold">Transactions made simple.</p>
            <p className="text-black text-3xl mt-8">
              No contracts. No headaches.
              <br />{' '}
              <span className="text-[#b4b3b1]">On demand, full-service</span>
              <br />
              <span className="text-[#b4b3b1]">
                creative without the bullshit.
              </span>
            </p>
          </div>
          <div className="text-black text-base font-normal mb-12">
            <p className="py-6">
              We developed different pricing options for you and your business
              needs.
              <br /> Is your business just starting? Do you need help growing
              it?
            </p>
            {/* <p>Just book a call with us and we will craft your solution</p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
            <div className="flex flex-col gap-6">
              {additionalOptions.map((option, index) => (
                <AdditionalOption key={index} {...option} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
