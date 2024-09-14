import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import NewTwitterIcon from "../ui/icons/new-twitter-stroke-rounded";

interface Card {
  title: string;
  description: string;
  shortDescription: string;
  src: string;
  content: () => JSX.Element;
}

export function ExpandableCardDemo() {
  const [active, setActive] = useState<Card | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const handleClose = () => {
    setActive(null);
  };

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] h-full md:h-auto md:max-h-[90%] flex flex-col bg-black dark:bg-neutral-300 sm:rounded-3xl overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start p-6">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-100 dark:text-neutral-200 text-2xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-300 dark:text-neutral-400 text-lg mt-2"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-6">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-200 font-ppbook text-base md:text-lg lg:text-base h-48 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                  <motion.button
                    layoutId={`button-${active.title}-${id}`}
                    onClick={handleClose}
                    className="px-4 py-2 text-small flex relative md:bottom-4 md:mt-0 mt-4 self-center rounded font-semibold font-ppbook bg-white text-black"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="w-full px-4 py-8 font-ppbook mt-4">
        <div className="flex overflow-x-auto space-x-6">
          {cards.map((card) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="min-w-[280px] md:w-full h-60 bg-black hover:bg-neutral-900 transition-colors duration-300 rounded-xl cursor-pointer overflow-hidden"
            >
              <div className="h-full flex flex-col p-6">
                <div className="flex items-center mb-2">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-semibold items-center gap-6 flex text-white text-base"
                    >
                      {card.title}
                      <NewTwitterIcon className="h-5" />
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.description}-${id}`}
                      className="text-gray-300 text-[12px] mt-1"
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </div>
                <p className="text-[14px] text-neutral-100 line-clamp-3 mt-auto  [mask:linear-gradient(to_bottom,white,white,transparent)]">
                  {card.shortDescription}
                </p>
                <motion.button
                  layoutId={`button-${card.title}-${id}`}
                  className="mt-auto px-4 py-2 text-sm rounded-md font-ppbook font-semibold bg-white text-black self-end"
                >
                  View Testimonial
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards: Card[] = [
  {
    title: "Aaliyah Monnet",
    description: "@aaliyah_",
    shortDescription:
      "I was skeptical about the price point when I first saw Biscotto...",
    src: "/assets/testimonial1.webp",
    content: () => {
      return (
        <p>
          I was skeptical about the price point when I first saw Biscotto
          Haven's cookies. However, the moment I took that first bite, all
          doubts vanished. The cookie collection is a symphony of flavors, with
          every bite offering a new and delightful experience. They arrived at
          my doorstep in perfect condition, still warm and incredibly fresh. The
          customer service was exceptional, with the team going above and beyond
          to ensure my order was perfect. It's an indulgence worth every penny.
        </p>
      );
    },
  },
  {
    title: "Michael Otieno",
    description: "@ottys",
    shortDescription:
      " Biscotto Haven has redefined my cookie expectations. The variety of...",
    src: "/assets/testimonial2.webp",
    content: () => {
      return (
        <p>
          Biscotto Haven has redefined my cookie expectations. The variety of
          flavors is astonishing, catering to every palate. I was particularly
          impressed by the balance of sweet and savory in their collection. The
          cookies arrived in pristine condition, with their freshness evident in
          every crumb. What truly sets Biscotto Haven apart is their exceptional
          customer service. They made me feel valued as a customer and went the
          extra mile to ensure my satisfaction.
        </p>
      );
    },
  },
  {
    title: "Bob Kamau",
    description: "@b_kamau",
    shortDescription:
      "I was initially hesitant to splurge on cookies, but Biscotto Haven...",
    src: "/assets/testimonial3.webp",
    content: () => {
      return (
        <p>
          I was initially hesitant to splurge on cookies, but Biscotto Haven
          proved me wrong. Their cookies are an absolute treat for the senses.
          The flavors are complex and well-balanced, and the texture is perfect.
          The cookies arrived incredibly fresh, as if they were baked just for
          me. The customer service was top-notch, with the team being friendly,
          helpful, and efficient. It's a luxury I'm happy to indulge in.
        </p>
      );
    },
  },
  {
    title: "Aanya Binita",
    description: "@aanya_binita",
    shortDescription:
      "Biscotto Haven has exceeded all my cookie expectations. The assortment...",
    src: "/assets/testimonial4.webp",
    // ctaText: "Close",
    // ctaLink: "/",
    content: () => {
      return (
        <p>
          Biscotto Haven has exceeded all my cookie expectations. The assortment
          of flavors is impressive, and each cookie is a masterpiece. I was
          amazed by how fresh they arrived, as if I had baked them myself. The
          customer service was outstanding; they were attentive to my needs and
          made the entire ordering process a pleasure. While the price tag might
          seem steep, the quality and taste justify every penny. .
        </p>
      );
    },
  },
  {
    title: "Rose Zahid",
    description: "@rosezahid",
    shortDescription:
      " I've tried countless cookies, but none compare to Biscotto Haven...",
    src: "/assets/testimonial5.webp",
    // ctaText: "Close",
    // ctaLink: "/",
    content: () => {
      return (
        <p>
          I've tried countless cookies, but none compare to Biscotto Haven.
          Their collection offers a perfect blend of classic and innovative
          flavors. The cookies arrived in impeccable condition, with their
          freshness undeniable. The customer service was exceptional, making me
          feel like a valued customer. Yes, they're a splurge, but indulging in
          these cookies is an experience unlike any other. It's a luxury worth
          savoring.
        </p>
      );
    },
  },
];

export default ExpandableCardDemo;
