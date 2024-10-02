import JobTrackerWrapper from './components/JobTrackerWrapper';

const JobTrackerPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-themeDark">
      <div className="custom-container">
        <JobTrackerWrapper />
      </div>
    </div>
  );
};

export default JobTrackerPage;
