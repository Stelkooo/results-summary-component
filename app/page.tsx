export default function Home() {
  return (
    <main className="h-full bg-pale-blue grid lg:place-content-center">
      <div className="bg-white grid lg:grid-cols-2 lg:rounded-[32px] overflow-hidden">
        <div className="text-center bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-b-[32px] pt-6 pb-10 grid place-content-center gap-y-6 px-14">
          <h1 className="text-light-lavender font-bold">Your Result</h1>
          <div className="grid place-content-center bg-gradient-to-b from-violet-blue rounded-full w-[140px] mx-auto aspect-square">
            <p className="text-5xl font-extrabold text-white">76</p>
            <p className="text-light-lavender font-bold">of 100</p>
          </div>
          <div>
            <p className="text-white mb-2 font-bold">Great</p>
            <p className="text-light-lavender font-medium">
              Your performance exceed 65% of the people conducting the test
              here!
            </p>
          </div>
        </div>
        <div>1</div>
      </div>
    </main>
  );
}
