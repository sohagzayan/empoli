import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@/components/ui/button';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io5';
import { BiWorld } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';

const YourSkillsSection = () => {
  return (
    <div className="my-6">
      <div className="grid grid-cols-12 overflow-hidden">
        <div className="col-span-4">
          <div>
            <h3 className="text-blue-midnight_blue text-lg font-semibold">
              Your Skills
            </h3>
            <p className="text-sm">
              This will help startups hone in on your strengths.
            </p>
          </div>
        </div>
        <div className="col-span-8">
          <ul className="mb-2 flex flex-wrap items-center">
            <li className="bg-light_gray inline-flex items-center gap-3 px-2 py-1">
              Javascript <IoMdClose />
            </li>
          </ul>
          <div className="mb-6">
            <input
              id="Last Name"
              type="text"
              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
              value=""
              placeholder="https://"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourSkillsSection;
