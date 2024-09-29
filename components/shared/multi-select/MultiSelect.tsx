'use client';
import React, { useEffect, useRef, useState } from 'react';

interface MultiSelectType {
  placeholder: string;
  allSelectList: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  selected: string[];
  searchIcon?: boolean;
  validationFunc?: any;
  maximumSelect?: number | null;
}

const MultiSelect = ({
  placeholder,
  allSelectList,
  setSelected,
  selected,
  searchIcon,
  validationFunc,
  maximumSelect = null,
}: MultiSelectType) => {
  // const [isShowDropDown, setIsShowDropDown] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<any>(null);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const filteredOptions = allSelectList.filter((option: any) =>
    option.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const handleTagSelect = (skill: any) => {
    if (selected.length !== maximumSelect) {
      setSelected([...selected, skill]);
      if (validationFunc) {
        validationFunc([...selected, skill]);
      }
    }
    setInputValue('');
    // setIsShowDropDown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setInputValue('');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <div className="relative" ref={inputRef}>
        {searchIcon && (
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        )}

        <input
          // onFocus={() => setIsShowDropDown(true)}
          // onBlur={() => setIsShowDropDown(false)}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault(); // Prevent form submission
            }
          }}
          className={`${searchIcon && 'ps-10'} peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control group box-border block w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md`}
          placeholder={placeholder}
        />

        {inputValue && (
          <ul
            className={`absolute left-0 z-10 mt-1 h-[200px] w-full overflow-y-scroll rounded-md border border-gray-300 bg-white shadow-lg`}
          >
            {filteredOptions.length ? (
              filteredOptions.map((option: any, index: any) => {
                const isSelected = selected.includes(option); // Check if the option is selected
                return (
                  <li
                    key={index}
                    className={`cursor-pointer px-3 py-1 hover:bg-gray-100 ${isSelected ? 'text-blue-steel_blue pointer-events-none cursor-none' : ''}`}
                    onClick={() => handleTagSelect(option)}
                  >
                    {option}
                  </li>
                );
              })
            ) : (
              <div className="flex h-full items-center justify-center">
                <p>Not Found</p>
              </div>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MultiSelect;
