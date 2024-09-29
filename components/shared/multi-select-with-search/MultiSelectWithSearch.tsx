'use client';
import { useEffect, useRef, useState } from 'react';

interface RequiredSkillsProps {
  initialSelectedTags?: string[]; // Initial selected tags
  dropdownOptions?: string[]; // Dropdown options
  onTagSelect?: (tag: string) => void; // Callback when a tag is selected
  onTagRemove?: (tag: string) => void; // Callback when a tag is removed
}
function MultiSelectWithSearch({
  initialSelectedTags = [],
  dropdownOptions = [],
  onTagSelect,
  onTagRemove,
}: any) {
  const [inputValue, setInputValue] = useState('');
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  const [selectedTags, setSelectedTags] =
    useState<string[]>(initialSelectedTags);

  const inputRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsShowDropDown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleTagSelect = (tag: any) => {
    // handleTagSearch(makeString, 'tags')
    setSelectedTags([...selectedTags, tag]);
    setInputValue('');
    setIsShowDropDown(false);
    if (onTagSelect) {
      onTagSelect(tag);
    }
  };

  const handleTagRemove = (tag: any) => {
    setSelectedTags(
      selectedTags.filter((selectedTag: any) => selectedTag !== tag),
    );
    if (onTagRemove) {
      onTagRemove(tag);
    }
  };

  const filteredOptions = dropdownOptions.filter((option: any) =>
    option.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <div className="flex flex-col">
      <div className="relative" ref={inputRef}>
        <div className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-destructive-200 border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 box-border flex w-full flex-wrap items-center rounded-md border p-2 px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus-visible:shadow-md">
          {selectedTags.map((tag: any, index: any) => (
            <div
              key={index}
              className="bg-primary mb-2 mr-2 rounded-full px-2 py-1 text-[14px] text-white"
            >
              <span>{tag}</span>
              <button
                onClick={() => handleTagRemove(tag)}
                className="ml-1 focus:outline-none"
              >
                &#x2715;
              </button>
            </div>
          ))}
          <input
            onFocus={() => setIsShowDropDown(true)}
            // onBlur={() => setIsShowDropDown(false)}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault(); // Prevent form submission
              }
            }}
            className="text-blue-midnight_blue w-full rounded-sm bg-transparent px-[.75rem] py-[0.5rem] text-[14px] font-light outline-transparent focus:outline-transparent"
            placeholder="Search or add tags"
          />
        </div>

        {inputValue && (
          <ul className="absolute left-0 z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg">
            {filteredOptions.map((option: any, index: any) => {
              const isSelected = selectedTags.includes(option); // Check if the option is selected
              return (
                <li
                  key={index}
                  className={`cursor-pointer px-3 py-1 hover:bg-gray-100 ${isSelected ? 'text-blue-steel_blue pointer-events-none cursor-none' : ''}`}
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

export default MultiSelectWithSearch;
