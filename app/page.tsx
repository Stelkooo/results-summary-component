'use client';

import { motion } from 'framer-motion';
import Counter from '@/components/counter/counter.component';

type SummaryHeading = 'Reaction' | 'Memory' | 'Verbal' | 'Visual';

type Colors = 'light-red' | 'orange-yellow' | 'green-teal' | 'cobalt-blue';

type Summary = {
  name: SummaryHeading;
  color: Colors;
  value: number;
  icon: JSX.Element;
};

const iconMemory = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
      d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
      d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
      d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
    />
  </svg>
);

const iconReaction = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
      d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
    />
  </svg>
);

const iconVerbal = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
      d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
    />
  </svg>
);

const iconVisual = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
      d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
      d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
    />
  </svg>
);

const summaryData: Summary[] = [
  {
    name: 'Reaction',
    color: 'light-red',
    value: 80,
    icon: iconReaction,
  },
  {
    name: 'Memory',
    color: 'orange-yellow',
    value: 92,
    icon: iconMemory,
  },
  {
    name: 'Verbal',
    color: 'green-teal',
    value: 61,
    icon: iconVerbal,
  },
  {
    name: 'Visual',
    color: 'cobalt-blue',
    value: 73,
    icon: iconVisual,
  },
];

export default function Home() {
  const styleConfig: Record<
    Colors,
    { text: string; bg: string; stroke: string }
  > = {
    'light-red': {
      text: 'text-light-red',
      bg: 'bg-light-red',
      stroke: 'stroke-light-red',
    },
    'cobalt-blue': {
      text: 'text-cobalt-blue',
      bg: 'bg-cobalt-blue',
      stroke: 'stroke-cobalt-blue',
    },
    'green-teal': {
      text: 'text-green-teal',
      bg: 'bg-green-teal',
      stroke: 'stroke-green-teal',
    },
    'orange-yellow': {
      text: 'text-orange-yellow',
      bg: 'bg-orange-yellow',
      stroke: 'stroke-orange-yellow',
    },
  };
  return (
    <main className="bg-pale-blue grid lg:h-screen lg:place-content-center">
      <motion.div
        className="bg-white grid lg:grid-cols-2 lg:rounded-4xl overflow-hidden lg:max-w-[46rem] shadow-xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-b-4xl pt-6 pb-10 grid gap-y-6 px-14 lg:rounded-tr-4xl justify-center lg:gap-y-8 lg:py-10.5">
          <h1 className="text-light-lavender font-bold text-2xl">
            Your Result
          </h1>
          <div className="grid place-content-center bg-gradient-to-b from-violet-blue rounded-full w-[140px] mx-auto aspect-square lg:w-[200px]">
            <p className="text-5xl/[4rem] font-extrabold text-white lg:text-7xl">
              <Counter from={0} to={76} />
            </p>
            <p className="text-light-lavender font-bold text-base/5 lg:text-lg/6">
              of 100
            </p>
          </div>
          <div>
            <p className="text-white mb-2 font-bold text-2xl lg:text-[2rem]/[2.625rem] lg:mb-3">
              Great
            </p>
            <p className="text-light-lavender font-medium text-base/5 lg:text-lg/6">
              Your performance exceed 65% of the people conducting the test
              here!
            </p>
          </div>
        </div>
        <div className="grid py-6 px-8 gap-y-6 lg:px-10 lg:py-10.5">
          <h2 className="text-dark-gray-blue font-bold text-2xl">Summary</h2>
          <div className="grid gap-y-4">
            {summaryData.map((item, index) => (
              <div
                className={`${
                  styleConfig[item.color].bg
                } p-4 rounded-2xl bg-opacity-5 flex justify-between`}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                <div className="flex gap-3 items-center">
                  <div className={`${styleConfig[item.color].stroke}`}>
                    {item.icon}
                  </div>
                  <p className={`${styleConfig[item.color].text} font-medium`}>
                    {item.name}
                  </p>
                </div>
                <p className="text-dark-gray-blue font-bold">
                  {item.value} <span className="opacity-50">/ 100</span>
                </p>
              </div>
            ))}
          </div>
          <motion.button
            type="button"
            className="bg-dark-gray-blue rounded-full text-white py-4 font-bold text-lg/6 hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span>Continue</span>
          </motion.button>
        </div>
      </motion.div>
    </main>
  );
}
