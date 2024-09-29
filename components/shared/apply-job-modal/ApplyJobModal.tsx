'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const ApplyJobModal = ({ applyJobModal, setApplyJobModal }: any) => {
  return (
    <>
      {applyJobModal && (
        <div
          className={`backdrop fixed left-0 top-0 z-50 h-screen w-full bg-black bg-opacity-60`}
        ></div>
      )}
      <motion.div
        initial={{ opacity: 0, top: applyJobModal ? '0px' : '50%' }}
        animate={{ opacity: 1, top: applyJobModal ? '50%' : '-100%' }}
        transition={{ duration: 0.5 }}
        className={`fixed left-[50%] top-[50%] z-50 h-full w-[100%] translate-x-[-50%] translate-y-[-50%] transform rounded-lg bg-white p-9 md:h-auto md:w-[500px]`}
      >
        <div>
          <h5
            className="bg-primary-50 text-primary absolute right-2 top-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            onClick={() => setApplyJobModal(false)}
          >
            <X />
          </h5>
          <h3 className="text-center text-[18px] font-medium">
            Apply for this job
          </h3>
          <div className="border-primary mt-3 border border-dashed py-4 text-center text-[14px]">
            <span>Upload CV (doc, docx, pdf)</span>
          </div>
          {/* <Textarea
            className="bg-primary-50 my-6 mt-5 max-h-[200px] min-h-[200px]"
            placeholder="Message"
          /> */}
          <div className="mt-4 flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[12px] text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              You accept our Terms and Conditions and Privacy Policy{' '}
            </label>
          </div>
          <Button className="mt-6 w-full">Apply Job</Button>
        </div>
      </motion.div>
    </>
  );
};

export default ApplyJobModal;
