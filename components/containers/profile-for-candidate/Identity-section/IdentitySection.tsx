import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@/components/ui/button';
import { IoMdClose } from 'react-icons/io';
import { Checkbox } from '@radix-ui/react-checkbox';

const IdentitySection = () => {
  return (
    <div className="my-6">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4">
          <h3 className="text-blue-midnight_blue text-lg font-semibold">
            Identity
          </h3>
          <p className="text-sm">
            At Wellfound, we’re committed to helping companies hire in a more
            inclusive way. Part of that includes asking candidates to share
            demographic information so we can help recruiters understand and
            build their pipeline.
            <br />
            Self identifying is completely optional, and well handle your
            information with care. Your responses to gender and ethnicity will
            not be displayed on your profile, and displaying your pronouns is
            optional.
          </p>
        </div>
        <div className="col-span-8">
          <div className="mb-6">
            <div>
              <label
                htmlFor="Last Name"
                className="text-foreground-light mb-1 text-sm"
              >
                Pronouns
              </label>
              <div className="relative">
                <select
                  id="countries"
                  className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
                >
                  <option value="US">He / Him</option>
                  <option value="US">She / Her</option>
                  <option value="US">They / Them</option>
                  <option value="US">Self describe</option>
                  <option value="US">Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="display_pronouns" />
              <label
                htmlFor="display_pronouns"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Display pronouns on my profile
              </label>
            </div>
          </div>

          <div className="mb-6">
            <div>
              <label
                htmlFor="Last Name"
                className="text-foreground-light mb-1 text-sm"
              >
                Gender Identity
              </label>
              <div className="relative">
                <select
                  id="countries"
                  className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md"
                >
                  <option value="US" selected>
                    Select your gender identity
                  </option>
                  <option value="US">Man</option>
                  <option value="US">Woman</option>
                  <option value="US">Non-binary</option>
                  <option value="US">Self-describe</option>
                  <option value="US">Self-describe</option>
                  <option value="US">Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div>
              <label
                htmlFor="Last Name"
                className="text-foreground-light mb-1 text-sm"
              >
                Race/Ethnicity
              </label>
              <p className="text-blue-steel_blue text-sm">
                {' '}
                You can select multiple
              </p>
              <ul className="mt-3">
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="" />
                  <label htmlFor="">Black / African-American</label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="" />
                  <label htmlFor="">
                    East Asian (including Chinese, Japanese, Korean, and
                    Mongolian)
                  </label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="" />
                  <label htmlFor="">Hispanic or Latino/a/x</label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="" />
                  <label htmlFor="">Middle Eastern</label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="" />
                  <label htmlFor="">Native American or Alaskan Native</label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="" />
                  <label htmlFor="">Pacific Islander</label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="" />
                  <label htmlFor="">
                    South Asian (including Bangladeshi, Bhutanese, Indian,
                    Nepali, Pakistani, and Sri Lankan)
                  </label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="" />
                  <label htmlFor="">
                    Southeast Asian (including Burmese, Cambodian, Filipino,
                    Hmong, Indonesian, Laotian, Malaysian, Mien, Singaporean,
                    Thai, and Vietnamese)
                  </label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="" />
                  <label htmlFor="">White</label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="" />
                  <label htmlFor="">Prefer not to say</label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="" />
                  <label htmlFor="">Self-describe</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentitySection;
