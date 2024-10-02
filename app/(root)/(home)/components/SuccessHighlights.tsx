const SuccessHighlights = () => {
  return (
    <div className="container mx-auto mt-10 px-4 lg:px-16 xl:px-20">
      <div className="mt-32">
        <h2 className="text-center text-3xl font-bold text-white">
          Where startups and job seekers connect
        </h2>
        <div className="mt-6 flex flex-col items-center justify-center gap-5 md:flex-row lg:flex-row">
          <button className="rounded-md border-2 border-transparent bg-theme1 px-6 py-3 font-600 text-white transition-all duration-300 ease-in-out hover:border-theme1 hover:bg-transparent">
            Find your next hire
          </button>
          <button className="rounded-md border-2 border-theme2 bg-transparent px-6 py-3 font-600 text-white transition-all duration-300 ease-in-out hover:border-theme1 hover:bg-theme1">
            Find your next job
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessHighlights;
