import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { IoMdClose } from 'react-icons/io';

const AboutSection = () => {
  return (
    <div className="mb-5">
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h3 className="text-blue-midnight_blue text-lg font-semibold">
            About
          </h3>
          <p className="text-sm">
            {' '}
            Tell us about yourself so startups know who you are.
          </p>
        </div>
        <div className="col-span-8">
          <div className="mb-6">
            <label
              htmlFor="Last Name"
              className="text-foreground-light mb-1 block text-sm"
            >
              Your name*
            </label>
            <input
              id="Last Name"
              type="text"
              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
              value="Sohag Hossain Zayan"
            />
          </div>
          <div className="mb-2 flex items-center gap-5">
            <Image
              src="/assets/images/avatar.webp"
              width={64}
              height={64}
              className="rounded-full"
              alt="profile"
            />
            <Button
              variant="outline"
              className="border-primary hover:border-primary hover:bg-primary/10 hover:text-primary text-sm"
            >
              Upload a new photo
            </Button>
          </div>

          <div className="mb-6">
            <label
              htmlFor="Last Name"
              className="text-foreground-light mb-1 block text-sm"
            >
              Where are you based?*
            </label>
            <input
              id="Last Name"
              type="text"
              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
              value="Dhaka, Dhaka Division"
            />
          </div>

          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex-1">
              <label
                htmlFor="Last Name"
                className="text-foreground-light mb-1 block text-sm"
              >
                Select your primary role*
              </label>
              <select
                id="Last Name"
                className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="Last Name"
                className="text-foreground-light mb-1 block text-sm"
              >
                Years of experience*
              </label>
              <select
                id="Last Name"
                className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="Last Name"
              className="text-foreground-light mb-1 block text-sm"
            >
              Open to the following roles
            </label>
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
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="Last Name"
              className="text-foreground-light mb-1 block text-sm"
            >
              Your bio
            </label>

            <textarea
              id="Last Name"
              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
              value="Stanford CS, Full stack generalist; launched a successful Android app, worked at Google"
            ></textarea>
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

export default AboutSection;
