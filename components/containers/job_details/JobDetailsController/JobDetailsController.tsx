import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import React from 'react';
import JobDetailsJobOverview from '../JobDetailsJobOverview/JobDetailsJobOverview';
import ViewCompanyProfile from '@/components/shared/ViewCompanyProfile/ViewCompanyProfile';
import ContactUs from '@/components/shared/ContactUs/ContactUs';

const JobDetailsController = ({ applyJobModal, setApplyJobModal }: any) => {
  return (
    <div>
      <div>
        <div className="flex items-center gap-5">
          <Button
            onClick={() => setApplyJobModal(true)}
            className="bg-primary w-full cursor-pointer"
          >
            Apply For Job
          </Button>
          <Button className="border-primary cursor-pointer border bg-white text-purple hover:text-white">
            <BookOpen />
          </Button>
        </div>
        <JobDetailsJobOverview />
        <ViewCompanyProfile />
        <ContactUs />
      </div>
    </div>
  );
};

export default JobDetailsController;
