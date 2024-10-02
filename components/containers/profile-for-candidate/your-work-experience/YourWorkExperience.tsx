import { Button } from '@/components/ui/button';
import { Checkbox } from '@radix-ui/react-checkbox';
import Image from 'next/image';
import React from 'react';
import { IoMdClose } from 'react-icons/io';

const YourWorkExperience = () => {
  return (
    <div className="my-6">
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h3 className="text-blue-midnight_blue text-lg font-semibold">
            Your work experience
          </h3>
          <p className="text-sm">What other positions have you held?</p>
        </div>
        <div className="col-span-8">
          <div className="mb-6">
            <label
              htmlFor="Last Name"
              className="text-foreground-light mb-1 block text-sm"
            >
              Company*
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
                  placeholder="Type to search"
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="Last Name"
              className="text-foreground-light mb-1 block text-sm"
            >
              Title*
            </label>
            <input
              id="Last Name"
              type="text"
              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
              placeholder="Title"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="Last Name"
              className="text-foreground-light mb-1 block text-sm"
            >
              Start date*
            </label>
            <input
              id="Last Name"
              type="text"
              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
              placeholder="Start date"
            />
          </div>

          <div className="mb-6 flex items-center space-x-2">
            <input type="checkbox" id="terms" className="h-4 w-4" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I currently work here
            </label>
          </div>

          <div className="mb-6 flex items-center space-x-2">
            <select
              id="countries"
              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
            >
              <option selected>This is a... Position </option>
              <option value="US">This is a sales Position</option>
              <option value="CA">This is a technical position</option>
            </select>
          </div>

          {/* if user select the technical position this this would be show */}

          <div className="mb-6">
            <ul className="my-2">
              <li className="text-blue-midnight_blue bg-light_gray inline-flex items-center gap-3 px-2 py-1 text-sm">
                Software Engineer
                <IoMdClose />
              </li>
            </ul>
            <select
              id="Last Name"
              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
            >
              <option selected>Select skills</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div className="flex justify-end">
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

export default YourWorkExperience;
