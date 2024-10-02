import JobJoyTimeline from '@/components/shared/auth-timeline/AuthTimeline';
import React from 'react';

const HowItsWork = () => {
  return (
    <div className="flex h-full items-center justify-center p-4">
      <div className="">
        <h2 className="text-primary font-apercu-bold text-5xl font-semibold">
          How its work
        </h2>
        <p className="text-blue-midnight_blue text-primary font-apercu-regular mt-4 font-light">
          Pick up where you left off.
        </p>
        <JobJoyTimeline />
        {/* <h2 className='text-4xl font-apercu-bold'>Find the job made for you.</h2>
                <p className='text-lg mt-3 font-apercu-regular'>Browse over 130K jobs at top companies and fast-growing startups.</p> */}
      </div>
    </div>
  );
};

export default HowItsWork;
