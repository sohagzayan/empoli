import FindJobs from './components/FindJobs';

/* eslint-disable prettier/prettier */
const page = () => {
  return (
    <section className="flex h-screen min-h-screen w-full flex-col bg-themeDark px-5 py-10 text-white md:px-10 lg:px-10">
      <FindJobs />
    </section>
  );
};

export default page;
