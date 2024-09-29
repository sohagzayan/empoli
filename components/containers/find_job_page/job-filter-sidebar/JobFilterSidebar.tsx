'use client';

import MultiSelectWithSearch from '@/components/shared/multi-select-with-search/MultiSelectWithSearch';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { CiStickyNote } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import 'react-datepicker/dist/react-datepicker.css';
import { LuSearch } from 'react-icons/lu';
import { job_profile, required_skills, skills } from '@/utils/data';

const JobFilterSidebar = ({ searchParamsObj }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [moreFilters, setMoreFilters] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [checkedJobsTypeValues, setCheckedJobsTypeValues] = useState<string[]>(
    [],
  );
  const [locationStatus, setLocationStatus] = useState<string[]>([]);
  const [checkedJobsPerksValues, setCheckedJobsPerksValues] = useState<
    string[]
  >([]);

  const [filterFormData, setFilterFormData] = useState({
    category: searchParamsObj.category ? searchParamsObj.category : '',
    office_location: searchParamsObj.office_location
      ? searchParamsObj.office_location
      : '',
    job_type: searchParamsObj.job_type ? searchParamsObj.job_type : '',
    employee_type: searchParamsObj.employee_type
      ? searchParamsObj.employee_type
      : '',
    salary_range_min: searchParamsObj.salary_range_min
      ? searchParamsObj.salary_range_min
      : '',
    salary_range_max: searchParamsObj.salary_range_max
      ? searchParamsObj.salary_range_max
      : '',
    applicationDeadline: searchParamsObj.applicationDeadline
      ? searchParamsObj.applicationDeadline
      : '',
    job_duration: searchParamsObj.job_duration
      ? searchParamsObj.job_duration
      : '',
    job_facilities: searchParamsObj.job_facilities
      ? searchParamsObj.job_facilities
      : '',
  });

  useEffect(() => {
    if (searchParamsObj.job_type) {
      const makeArray = searchParamsObj.job_type.split(',');
      setCheckedJobsTypeValues([...makeArray]);
    }
    if (searchParamsObj.location) {
      const makeArray = searchParamsObj.location.split(',');
      setLocationStatus([...makeArray]);
    }
  }, [searchParamsObj.job_type, searchParamsObj.location]);

  console.log('setCheckedJobsTypeValues >', checkedJobsTypeValues);

  const handleJobFiltering = (e: any) => {
    e.preventDefault();
  };

  const handleTagSearch = (tagInput: string, name: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (tagInput) {
      const tags = tagInput.split(',').map((tag) => tag.trim()); // Split the input into an array of tags
      console.log('first tgssss', tags);
      console.log('current teg input text length', tags);
      // Replace existing tag parameter with the new value
      current.set(name, tags.join(','));
    } else {
      current.delete(name);
    }
    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`);
  };

  const handleInputChange = async (e: any) => {
    const { name, value, checked } = e.target;
    console.log('checkbox name', e.target.name);
    console.log('checkbox value', e.target.value);

    setFilterFormData({
      ...filterFormData,
      [name]: value,
    });
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    if (!value) {
      current.delete(name);
    } else {
      current.set(name, value);
    }
    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`);
  };

  const handleJobProfileSelect = (tag: string) => {
    setSelectedSkills([...selectedSkills, tag]);
    let myTag = [...selectedSkills, tag];
    let makeString = myTag.join(',');
    console.log('makeString', makeString);
    handleTagSearch(makeString, 'skills');
  };

  const handleJobProfileRemove = (tag: string) => {
    let exitsArray = selectedSkills.filter(
      (selectedTag) => selectedTag !== tag,
    );
    setSelectedSkills(exitsArray);
    let makeString = exitsArray.join(',');
    handleTagSearch(makeString, 'tag');
  };

  const handleJobsTypeFilterValue = (value: string) => {
    const currentIndex = checkedJobsTypeValues.indexOf(value);
    const newCheckedValues = [...checkedJobsTypeValues];
    if (currentIndex === -1) {
      // If value not found, add it to the array
      newCheckedValues.push(value);
    } else {
      // If value found, remove it from the array
      newCheckedValues.splice(currentIndex, 1);
    }
    setCheckedJobsTypeValues(newCheckedValues);
    let makeString = newCheckedValues.join(',');

    handleTagSearch(makeString, 'job_type');
  };

  const handleJobsPartTimeOrFullTime = (value: string) => {
    const currentIndex = locationStatus.indexOf(value);
    const newCheckedValues = [...locationStatus];
    if (currentIndex === -1) {
      // If value not found, add it to the array
      newCheckedValues.push(value);
    } else {
      // If value found, remove it from the array
      newCheckedValues.splice(currentIndex, 1);
    }
    setLocationStatus(newCheckedValues);
    let makeString = newCheckedValues.join(',');

    handleTagSearch(makeString, 'location');
  };

  const handleJobsPerks = (value: string) => {
    const currentIndex = checkedJobsPerksValues.indexOf(value);
    const newCheckedValues = [...checkedJobsPerksValues];
    if (currentIndex === -1) {
      // If value not found, add it to the array
      newCheckedValues.push(value);
    } else {
      // If value found, remove it from the array
      newCheckedValues.splice(currentIndex, 1);
    }
    setCheckedJobsPerksValues(newCheckedValues);
    let makeString = newCheckedValues.join(',');

    handleTagSearch(makeString, 'perks');
  };

  const handleFilterClear = () => {
    router.push(`${pathname}`);
    setSelectedSkills([]);
    setCheckedJobsTypeValues([]);
    setLocationStatus([]);
    setCheckedJobsPerksValues([]);
  };

  console.log('checkedJobsTypeValues', checkedJobsTypeValues);

  return (
    <div className="bg-background rounded-lg">
      <div className="border bg-white p-6">
        <div>
          <div className="mb-4 flex items-center justify-center">
            <div className="text-blue-midnight_blue flex items-center gap-1 text-[14px] font-medium">
              <BiFilterAlt className="text-primary" />
              Filters
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="preferences" className="h-4 w-4" />
              <label
                htmlFor="preferences"
                className="text-blue-midnight_blue cursor-pointer text-[14px] font-medium"
              >
                As per my
                <span className="text-primary"> preferences</span>
              </label>
            </div>
          </div>
          <form onSubmit={handleJobFiltering}>
            <div className="relative mb-4 mt-4 bg-white">
              <label
                htmlFor="job_type_search"
                className="text-blue-midnight_blue mb-1 text-[14px]"
              >
                {' '}
                Profile
              </label>
              <div className="mb-5">
                <MultiSelectWithSearch
                  initialselectedSkills={selectedSkills}
                  dropdownOptions={job_profile}
                  onTagSelect={handleJobProfileSelect}
                  onTagRemove={handleJobProfileRemove}
                />
              </div>
            </div>

            <div className="relative mb-4 mt-4 bg-white">
              <label
                htmlFor="location"
                className="text-blue-midnight_blue text-[14px]"
              >
                Office Location
              </label>
              <input
                id="office_location"
                name="office_location"
                placeholder="e.g. Dhaka"
                type="text"
                value={filterFormData.office_location}
                onChange={handleInputChange}
                className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-destructive-200 border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 box-border block w-full rounded-md border px-4 py-3 text-sm shadow-sm outline-none transition-all focus:ring-2 focus-visible:shadow-md"
              />
            </div>

            <div className="Perks mb-4 mt-4 flex justify-between gap-2">
              <div className="">
                <label
                  htmlFor="location"
                  className="text-blue-midnight_blue mb-2 inline-block text-[14px]"
                >
                  Jobs type
                </label>
                <div className="flex flex-col gap-3 text-[14px]">
                  <div className="flex items-center gap-2">
                    <input
                      checked={checkedJobsTypeValues.includes('full time')}
                      onChange={() => handleJobsTypeFilterValue('full time')}
                      type="checkbox"
                      id="full time"
                      className="h-4 w-4"
                      value="full time"
                    />
                    <label htmlFor="full time" className="capitalize">
                      full time
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      checked={checkedJobsTypeValues.includes('part time')}
                      onChange={() => handleJobsTypeFilterValue('part time')}
                      type="checkbox"
                      id="part time"
                      className="h-4 w-4"
                      value="part time"
                    />
                    <label htmlFor="part time" className="capitalize">
                      part time
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      checked={checkedJobsTypeValues.includes('contract')}
                      onChange={() => handleJobsTypeFilterValue('contract')}
                      type="checkbox"
                      id="contract"
                      className="h-4 w-4"
                      value="contract"
                    />
                    <label htmlFor="contract" className="capitalize">
                      contract
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      checked={checkedJobsTypeValues.includes('temporary')}
                      onChange={() => handleJobsTypeFilterValue('temporary')}
                      type="checkbox"
                      id="temporary"
                      className="h-4 w-4"
                      value="temporary"
                    />
                    <label htmlFor="temporary" className="capitalize">
                      temporary
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      checked={checkedJobsTypeValues.includes('internship')}
                      onChange={() => handleJobsTypeFilterValue('internship')}
                      type="checkbox"
                      id="internship"
                      className="h-4 w-4"
                      value="internship"
                    />
                    <label htmlFor="internship" className="capitalize">
                      internship
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      checked={checkedJobsTypeValues.includes('volunteer')}
                      onChange={() => handleJobsTypeFilterValue('volunteer')}
                      type="checkbox"
                      id="volunteer"
                      className="h-4 w-4"
                      value="volunteer"
                    />
                    <label htmlFor="volunteer" className="capitalize">
                      volunteer
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="text-blue-midnight_blue mb-2 inline-block text-[14px]"
                >
                  Location
                </label>
                <div className="flex flex-col gap-3 text-[14px]">
                  <div className="flex items-center gap-2">
                    <input
                      checked={locationStatus.includes('remote')}
                      onChange={() => handleJobsPartTimeOrFullTime('remote')}
                      type="checkbox"
                      id="remote"
                      className="h-4 w-4"
                      value="remote"
                    />
                    <label htmlFor="remote" className="capitalize">
                      remote
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      checked={locationStatus.includes('on-site')}
                      onChange={() => handleJobsPartTimeOrFullTime('on-site')}
                      type="checkbox"
                      id="on-site"
                      className="h-4 w-4"
                      value="on-site"
                    />
                    <label htmlFor="on-site" className="capitalize">
                      on-site
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      checked={locationStatus.includes('hybrid')}
                      onChange={() => handleJobsPartTimeOrFullTime('hybrid')}
                      type="checkbox"
                      id="hybrid"
                      className="h-4 w-4"
                      value="hybrid"
                    />
                    <label htmlFor="hybrid" className="capitalize">
                      hybrid
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 bg-white">
              <button
                onClick={() => setMoreFilters((prev) => !prev)}
                className="text-primary flex items-center gap-1 text-[14px] font-medium"
              >
                {moreFilters ? 'View less filters' : 'View more filters'}{' '}
                <IoIosArrowDown className={`${moreFilters && 'rotate-180'}`} />
              </button>

              {moreFilters && (
                <div>
                  <div className="mt-4 flex w-full flex-col text-[14px]">
                    <label
                      htmlFor="countries"
                      className="text-blue-midnight_blue mb-1 inline-block text-[14px]"
                    >
                      Max. duration (months)
                    </label>
                    <select
                      name="job_duration"
                      id="job_duration"
                      value={filterFormData.job_duration}
                      onChange={handleInputChange}
                      className="text-blue-midnight_blue peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-destructive-200 border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 box-border block w-full rounded-md border border-gray-300 bg-white p-2.5 px-4 py-2 text-sm shadow-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus-visible:shadow-md"
                    >
                      <option selected value="">
                        Choose duration
                      </option>
                      <option value="1">1 month</option>
                      <option value="2">2 months</option>
                      <option value="3">3 months</option>
                      <option value="4">4 months</option>
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                      <option value="24">24 months</option>
                      <option value="36">36 months</option>
                    </select>
                  </div>

                  <div className="mt-4 flex w-full flex-col gap-2">
                    <label
                      htmlFor="location"
                      className="text-blue-midnight_blue text-[14px]"
                    >
                      Perks
                    </label>
                    <div>
                      <div className="flex flex-col gap-3 text-[14px]">
                        <div className="flex items-center gap-2">
                          <input
                            checked={checkedJobsPerksValues.includes(
                              'internships with job offer',
                            )}
                            onChange={() =>
                              handleJobsPerks('internships with job offer')
                            }
                            type="checkbox"
                            id="internships with job offer"
                            className="h-4 w-4"
                            value="internships with job offer"
                          />
                          <label htmlFor="internships with job offer">
                            Internships with job offer
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            checked={checkedJobsPerksValues.includes(
                              'fast response',
                            )}
                            onChange={() => handleJobsPerks('fast response')}
                            type="checkbox"
                            id="fast response"
                            className="h-4 w-4"
                            value="fast response"
                          />
                          <label htmlFor="fast response">Fast response</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            checked={checkedJobsPerksValues.includes(
                              'early applicant',
                            )}
                            onChange={() => handleJobsPerks('early applicant')}
                            type="checkbox"
                            id="early applicant"
                            className="h-4 w-4"
                            value="early applicant"
                          />
                          <label htmlFor="Flexible work hours">
                            Early applicant
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            checked={checkedJobsPerksValues.includes(
                              'internship with offer latter',
                            )}
                            onChange={() =>
                              handleJobsPerks('internship with offer latter')
                            }
                            type="checkbox"
                            id="internship with offer latter"
                            className="h-4 w-4"
                            value="internship with offer latter"
                          />
                          <label htmlFor="internship with offer latter">
                            Internship with offer latter
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            checked={checkedJobsPerksValues.includes(
                              'letter of recommendation',
                            )}
                            onChange={() =>
                              handleJobsPerks('letter of recommendation')
                            }
                            type="checkbox"
                            id="Letter of recommendation"
                            className="h-4 w-4"
                            value="letter of recommendation"
                          />
                          <label htmlFor="Letter of recommendation">
                            Letter of recommendation
                          </label>
                        </div>
                        <div className="flex items-center gap-2 text-[14px]">
                          <input
                            checked={checkedJobsPerksValues.includes(
                              '5 days a week',
                            )}
                            onChange={() => handleJobsPerks('5 days a week')}
                            type="checkbox"
                            id="5 days a week"
                            className="h-4 w-4"
                            value="5 days a week"
                          />
                          <label htmlFor="5 days a week">5 days a week</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleFilterClear}
                  className="text-primary text-[14px] font-medium"
                >
                  Clear all
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-5 border bg-white p-6 text-center">
        <label
          htmlFor=""
          className="text-blue-midnight_blue mb-1 inline-block text-[14px] font-semibold"
        >
          Keyword Search
        </label>
        <form className=" ">
          <p className="text-blue-steel_blue mb-1 flex items-center gap-1 text-[12px]">
            <CiStickyNote /> Search by category, location or company name
          </p>
          <div className="relative w-full">
            <input
              id="email"
              name=""
              placeholder="e.g. developer, dhaka,infosys"
              type="email"
              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-destructive-200 border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 box-border block w-full rounded-md border px-4 py-3 text-sm shadow-sm outline-none transition-all focus:ring-2 focus-visible:shadow-md"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              form="signIn-form"
              className="font-regular bg-primary hover:bg-primary/80 border-brand focus-visible:outline-brand-600 data-[state=open]:bg-brand-button/80 data-[state=open]:outline-brand-600 relative mt-2 flex cursor-pointer items-center justify-center space-x-2 rounded-md border px-4 py-2 text-center text-base text-white shadow-sm outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1"
            >
              {' '}
              <span className="truncate">Search</span>{' '}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobFilterSidebar;
