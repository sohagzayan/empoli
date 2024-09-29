import JobDetail from '@/components/containers/job_detail/JobDetail';
import JobDetails from '@/components/containers/job_details/JobDetails/JobDetails';
import Header from '@/components/shared/Nav/Header';
import ApplyJobModal from '@/components/shared/apply-job-modal/ApplyJobModal';
import Footer from '@/components/shared/footer/Footer';
import React from 'react';

const JobDetailsPage = () => {
  return (
    <div className="relative">
      <Header variant="primary" />
      {/* <JobDetails /> */}
      <JobDetail />
      <Footer />
    </div>
  );
};

export default JobDetailsPage;
