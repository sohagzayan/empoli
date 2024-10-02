import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@/components/ui/button';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import { BiWorld } from 'react-icons/bi';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io5';

const SocialProfilesSection = () => {
  return (
    <div className="my-6">
      <div className="grid grid-cols-12 overflow-hidden">
        <div className="col-span-4">
          <div>
            <h3 className="text-blue-midnight_blue text-lg font-semibold">
              Social Profiles
            </h3>
            <p className="text-sm">Where can people find you online?</p>
          </div>
        </div>
        <div className="col-span-8">
          <div className="mb-6">
            <label
              htmlFor="Last Name"
              className="text-foreground-light mb-1 flex items-center gap-2 text-sm"
            >
              <BiWorld size={20} />
              Website
            </label>
            <input
              id="Last Name"
              type="text"
              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
              value=""
              placeholder="https://"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="Last Name"
              className="text-foreground-light mb-1 flex items-center gap-2 text-sm"
            >
              <FaLinkedinIn size={20} />
              LinkedIn
            </label>
            <input
              id="Last Name"
              type="text"
              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
              value=""
              placeholder="https://linkedin.com/in/username"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="Last Name"
              className="text-foreground-light mb-1 flex items-center gap-2 text-sm"
            >
              <IoLogoGithub size={20} />
              GitHub
            </label>
            <input
              id="Last Name"
              type="text"
              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
              value=""
              placeholder="https://github.com/username"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="Last Name"
              className="text-foreground-light mb-1 flex items-center gap-2 text-sm"
            >
              <FaTwitter size={20} />
              Twitter
            </label>
            <input
              id="Last Name"
              type="text"
              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
              value=""
              placeholder="https://twitter.com/username"
            />
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

export default SocialProfilesSection;
