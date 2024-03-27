"use client"
import { required_skills } from '@/utils/data';
import React, { useEffect, useRef, useState } from 'react'

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
    onTagRemove }: any) {

    const [inputValue, setInputValue] = useState('');
    const [isShowDropDown, setIsShowDropDown] = useState(false);
    const [selectedTags, setSelectedTags] = useState<string[]>(initialSelectedTags);

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
        setIsShowDropDown(false)
        if (onTagSelect) {
            onTagSelect(tag);
        }
    };


    const handleTagRemove = (tag: any) => {
        setSelectedTags(selectedTags.filter((selectedTag: any) => selectedTag !== tag));
        if (onTagRemove) {
            onTagRemove(tag);
        }
    };

    const filteredOptions = dropdownOptions.filter((option: any) =>
        option.toLowerCase().includes(inputValue.toLowerCase())
    );




    return (
        <div className="flex flex-col">
            <div className="relative" ref={inputRef}>
                <div className=' flex items-center flex-wrap p-2 peer/input  box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2'>
                    {selectedTags.map((tag: any, index: any) => (
                        <div key={index} className="bg-primary text-white px-2 py-1 rounded-full mr-2 mb-2 text-[14px]">
                            <span>{tag}</span>
                            <button onClick={() => handleTagRemove(tag)} className="ml-1 focus:outline-none">&#x2715;</button>
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
                        className="w-full  bg-transparent py-[0.5rem] px-[.75rem] text-[14px] outline-transparent  font-light text-blue-midnight_blue rounded-sm focus:outline-transparent"
                        placeholder="Search or add tags"
                    />
                </div>

                {inputValue && (
                    <ul className="absolute z-10 left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                        {filteredOptions.map((option: any, index: any) => {
                            const isSelected = selectedTags.includes(option); // Check if the option is selected
                            return (
                                <li key={index} className={`cursor-pointer py-1 px-3 hover:bg-gray-100 ${isSelected ? 'pointer-events-none text-blue-steel_blue cursor-none' : ''}`} onClick={() => handleTagSelect(option)}>
                                    {option}
                                </li>
                            )
                        }
                        )}
                    </ul>
                )}
            </div>
        </div>
    )
}


export default MultiSelectWithSearch

