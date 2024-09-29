import React from 'react';
import JobCart from '../job_card/JobCard';
import { featured_jobs } from '@/utils/data';

const RelatedJobs = () => {
  return (
    <div>
      <div>
        <h3 className="text-[22px] font-medium text-purple">Related Jobs</h3>
        <p className="py-1 text-[14px] font-normal">
          2020 jobs live - 293 added today.
        </p>
        <div>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {featured_jobs.map((job, index) => (
              <JobCart key={job.job_title + index} data={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedJobs;
