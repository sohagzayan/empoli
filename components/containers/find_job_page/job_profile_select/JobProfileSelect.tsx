'use client';
import { required_skills } from '@/utils/data';
import React, { useEffect, useRef, useState } from 'react';

function JobProfileSelect({
  options = [],
  // onSelect,
  setJobTitleError,
  jobTitleValue,
  setJobTitleValue,
}: any) {
  const [isShowDropDown, setIsShowDropDown] = useState(false);

  const inputRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsShowDropDown(false);
        const exits = options.find(
          (option: any) => option.toLowerCase() === jobTitleValue.toLowerCase(),
        );
        if (!exits) {
          setJobTitleValue('');
          // onSelect("");
          setJobTitleError('Job title is required');
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [jobTitleValue, setJobTitleValue, options, setJobTitleError]);

  const handleInputChange = (e: any) => {
    setJobTitleValue(e.target.value);
    setIsShowDropDown(true);
  };

  const handleTagSelect = (profile: any) => {
    setJobTitleValue(profile);
    // onSelect(profile);
    setJobTitleError(null);
  };

  const filteredOptions = options.filter((option: any) =>
    option.toLowerCase().includes(jobTitleValue.toLowerCase()),
  );

  return (
    <div className="flex flex-col">
      <div className="relative" ref={inputRef}>
        <div className="focus:outline-primary peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-destructive-200 border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 group box-border block w-full rounded-md border p-3 px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus-visible:shadow-md">
          <input
            onFocus={() => setIsShowDropDown(true)}
            // onBlur={() => setIsShowDropDown(false)}
            type="text"
            value={jobTitleValue}
            onChange={handleInputChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault(); // Prevent form submission
              }
            }}
            className="text-blue-midnight_blue w-full rounded-sm bg-transparent text-[14px] font-light outline-transparent focus:outline-transparent"
            placeholder="Search or add tags"
          />
        </div>

        {jobTitleValue && isShowDropDown && (
          <ul className="absolute left-0 z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg">
            {filteredOptions.map((option: any, index: any) => {
              return (
                <li
                  key={index}
                  className={`cursor-pointer px-3 py-1 hover:bg-gray-100`}
                  onClick={() => handleTagSelect(option)}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default JobProfileSelect;
