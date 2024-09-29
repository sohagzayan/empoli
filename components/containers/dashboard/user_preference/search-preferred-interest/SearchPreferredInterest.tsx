'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { job_profile } from '@/utils/data';

const SearchPreferredInterest = ({
  isModalOpen,
  setIsModalOpen,
  setSearchedInterestField,
}: any) => {
  const interestRef = useRef<any>(null);
  const [inputValue, setInputValue] = useState('');
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);

  const handleClickOutside = (event: any) => {
    if (interestRef.current && !interestRef.current.contains(event.target)) {
      setIsModalOpen();
    }
  };

  // Add event listener when the component mounts
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleJobProfileSelect = (interest: string) => {
    setSelectedInterest([...selectedInterest, interest]);
    setInputValue('');
  };

  const handleDoneFunc = () => {
    setSearchedInterestField((prev: any) => [...prev, ...selectedInterest]);
    setIsModalOpen(false);
    setSelectedInterest([]);
  };

  const filteredOptions = job_profile.filter((option: any) =>
    option.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <div
      data-state={isModalOpen ? 'open' : 'closed'}
      className="bg-alternative/90 data-open:animate-overlay-show animate-overlay-hide data-[state=open]:animate-overlay-show fixed inset-0 z-50 grid place-items-center overflow-y-auto backdrop-blur-sm data-[state=closed]:invisible"
    >
      <div
        ref={interestRef}
        role="dialog"
        data-state="open"
        className="data-[state=closed]:slide-out-to-top-[0% bg-overlay !bg-overlay/90 !border-overlay/90 relative top-24 z-50 mx-auto my-8 grid w-full max-w-3xl scale-100 gap-4 place-self-start border bg-white shadow-md backdrop-blur-sm backdrop-filter transition duration-200 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-[0%] data-[state=open]:slide-in-from-left-[0%] data-[state=open]:slide-in-from-top-[0%] dark:shadow-sm sm:w-full sm:rounded-lg sm:align-middle md:w-full"
      >
        <div className="flex h-full w-full flex-col overflow-hidden">
          <div className="relative flex flex-col items-center">
            <input
              autoFocus={true}
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              className="text-foreground-light placeholder:text-border-stronger flex h-11 w-full rounded-md border-0 bg-transparent px-4 py-7 text-sm outline-none focus:shadow-none focus:ring-transparent disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Search for your preferred area of interest"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              aria-autocomplete="list"
              role="combobox"
              aria-expanded="true"
              aria-controls=":r56:"
              aria-labelledby=":r57:"
              id=":r58:"
              type="text"
              aria-activedescendant=":r5i:"
            />
            {inputValue && (
              <ul className="absolute left-0 top-full z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg">
                {filteredOptions.map((option: any, index: any) => {
                  const isSelected = selectedInterest.includes(option); // Check if the option is selected
                  return (
                    <li
                      key={index}
                      className={`cursor-pointer px-3 py-1 hover:bg-gray-100 ${isSelected ? 'text-blue-steel_blue pointer-events-none cursor-none' : ''}`}
                      onClick={() => handleJobProfileSelect(option)}
                    >
                      {option}
                    </li>
                  );
                })}
              </ul>
            )}

            <div className="bg-border relative m-auto h-px w-full overflow-hidden">
              <span className="line-loading-bg-light dark:line-loading-bg absolute left-0 right-0 top-0 ml-auto mr-auto block h-px w-[80px] text-center opacity-0 transition-all"></span>
            </div>
          </div>
          <ul className="flex flex-wrap items-center gap-3 p-2">
            {selectedInterest.map((i) => (
              <li
                className="bg-primary inline-block rounded-full px-5 py-2 text-sm font-medium text-white"
                key={i}
              >
                {i}
              </li>
            ))}
          </ul>

          <div
            className="text-border-strong overflow-hidden px-6 py-3"
            cmdk-group=""
            role="presentation"
            data-value="documentation"
          >
            <div className="flex justify-end pt-28">
              <Button
                onClick={handleDoneFunc}
                variant="outline"
                className="px-12"
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPreferredInterest;
