import { Button } from '@/components/ui/button';
import React from 'react';
import { IoMdClose } from 'react-icons/io';

const ProfileResume = () => {
  return (
    <div className="mb-5">
      <div className="grid grid-cols-12 py-4">
        <div className="col-span-4">
          <h3 className="text-blue-midnight_blue text-lg font-semibold">
            Upload your recent resume or CV
          </h3>
          <p className="mb-1 text-sm">Upload your most up-to-date resume</p>
          <p className="text-sm">File types: DOC, DOCX, PDF, TXT</p>
        </div>
        <div className="col-span-8">
          <div className="mb-6">
            <label
              htmlFor="Last Name"
              className="text-foreground-light mb-1 block text-sm"
            >
              1.pdf*
            </label>
            <p className="mb-2 text-sm">
              View your resume or upload a new one below
            </p>
            <input
              id="Last Name"
              type="file"
              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input id="resume review" type="checkbox" className="h-4 w-4" />
              <label
                htmlFor="resume review"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Id like a free resume review
              </label>
            </div>
            <Button variant="ghost">Remove your resume</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileResume;
