import React from 'react';
import PropTypes from 'prop-types';
import Header from '@/components/shared/Nav/Header';
import CreateJobPostForm from '@/components/containers/post-now/create-job-post-form/CreateJobPostForm';

const JobPostCreate = () => {
  return (
    <div>
      <Header variant="primary" />
      <CreateJobPostForm />
    </div>
  );
};

export default JobPostCreate;
