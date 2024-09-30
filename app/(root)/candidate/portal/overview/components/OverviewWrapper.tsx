import AllPersonalInformation from './AllPersonalInformation';
import ResumeViewAndDownload from './ResumeViewAndDownload';

const OverviewWrapper = () => {
  return (
    <div>
      <div className="custom-container">
        <AllPersonalInformation />
        <ResumeViewAndDownload />
      </div>
    </div>
  );
};

export default OverviewWrapper;
