import { Button } from '@/components/ui/button';
import { Checkbox } from '@radix-ui/react-checkbox';
import Image from 'next/image';
import React from 'react';
import { IoMdClose } from 'react-icons/io';

const EducationSection = () => {
  return (
    <div className="my-6">
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h3 className="text-blue-midnight_blue text-lg font-semibold">
            Education
          </h3>
          <p className="text-sm">What schools have you studied at?</p>
        </div>
        <div className="col-span-8">
          <div className="mb-6">
            <label
              htmlFor="Last Name"
              className="text-foreground-light mb-1 block text-sm"
            >
              Education*
            </label>
            <div>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
                  placeholder="College / University"
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="Last Name"
              className="text-foreground-light mb-1 block text-sm"
            >
              Graduation*
            </label>
            <div>
              <label
                htmlFor="default-search"
                className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
                  placeholder="Graduation"
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="Last Name"
              className="text-foreground-light mb-1 block text-sm"
            >
              Degree & Major*
            </label>
            <div className="mb-5">
              <select
                id="countries"
                className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
              >
                <option selected>Degree & Type </option>
                <option value="US">This is a sales Position</option>
                <option value="CA">This is a technical position</option>
              </select>
            </div>

            <input
              id="Last Name"
              type="text"
              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
              placeholder="Major / Field of Study"
            />
            <button className="text-blue-midnight_blue mt-3 text-sm">
              + Add major
            </button>
          </div>

          <div className="mb-6">
            <label
              htmlFor="Last Name"
              className="text-foreground-light mb-1 block text-sm"
            >
              GPA*
            </label>
            <div className="flex w-full items-center justify-between gap-5">
              <input
                id="Last Name"
                type="text"
                className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
                placeholder="GPA"
              />
              <input
                id="Last Name"
                type="text"
                className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
                placeholder="Max"
              />
            </div>
          </div>
          <div className="flex justify-start">
            <div className="flex items-center gap-4">
              <Button className="" variant="ghost">
                Cancel
              </Button>
              <Button>Save</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
