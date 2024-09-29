import React from 'react';
import PropTypes from 'prop-types';
import ProfileTitle from '@/components/shared/profile-title/ProfileTitle';
import { featured_jobs } from '@/utils/data';
import JobCard from '@/components/shared/job_card/JobCard';

const AppliedJob = () => {
  return (
    <div>
      <div>
        <ProfileTitle>Applied Job</ProfileTitle>
        <div>
          {featured_jobs.map((job, index) => (
            <JobCard key={job.job_title + index} data={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
