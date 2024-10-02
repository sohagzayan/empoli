import JobCard from '@/components/shared/job_card/JobCard';
import ProfileTitle from '@/components/shared/profile-title/ProfileTitle';
import { featured_jobs } from '@/utils/data';
import React from 'react';

export const SortListedJobs = () => {
  return (
    <div className="">
      <div>
        <ProfileTitle>Sort Listed Jobs</ProfileTitle>
        <div>
          {featured_jobs.map((job, index) => (
            <JobCard key={job.job_title + index} data={job} />
          ))}
        </div>
      </div>
    </div>
  );
};
