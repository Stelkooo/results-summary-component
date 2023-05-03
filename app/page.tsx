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
    <main className="h-full bg-pale-blue grid lg:place-content-center">
      <div className="bg-white grid lg:grid-cols-2 lg:rounded-[32px] overflow-hidden">
        <div className="text-center bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-b-[32px] pt-6 pb-10 grid place-content-center gap-y-6 px-14">
          <h1 className="text-light-lavender font-bold">Your Result</h1>
          <div className="grid place-content-center bg-gradient-to-b from-violet-blue rounded-full w-[140px] mx-auto aspect-square">
            <p className="text-5xl/[4rem] font-extrabold text-white">76</p>
            <p className="text-light-lavender font-bold text-base/5">of 100</p>
          </div>
          <div>
            <p className="text-white mb-2 font-bold text-2xl">Great</p>
            <p className="text-light-lavender font-medium text-base/5">
              Your performance exceed 65% of the people conducting the test
              here!
            </p>
          </div>
        </div>
        <div className="grid py-6 px-8 gap-y-6">
          <h2 className="text-dark-gray-blue font-bold">Summary</h2>
          <div className="grid gap-y-4">
            {summaryData.map((item) => (
              <div
                className={`${
                  styleConfig[item.color].bg
                } p-4 rounded-2xl bg-opacity-5 flex justify-between`}
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
          <button
            type="button"
            className="bg-dark-gray-blue rounded-full text-white py-4 font-bold"
          >
            <span>Continue</span>
          </button>
        </div>
      </div>
    </main>
  );
}
