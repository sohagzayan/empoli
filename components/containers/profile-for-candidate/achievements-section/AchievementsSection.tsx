import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@/components/ui/button';
import { IoMdClose } from 'react-icons/io';

const AchievementsSection = () => {
  return (
    <div className="my-6">
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h3 className="text-blue-midnight_blue text-lg font-semibold">
            Achievements
          </h3>
          <p className="text-sm">
            Sharing more details about yourself will help you stand out more.
          </p>
        </div>
        <div className="col-span-8">
          <div className="mb-6">
            <div>
              <label
                htmlFor="default-search"
                className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <textarea
                  id="default-search"
                  className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
                  placeholder="It's OK to brag - e.g. I launched 3 successful Facebook apps which in total reached 2M+ users and generated $100k+ in revenue. I built everything from the front-end to the back-end and everything in between."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
