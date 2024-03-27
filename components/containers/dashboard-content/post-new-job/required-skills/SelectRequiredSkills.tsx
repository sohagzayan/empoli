"use client"
import { required_skills } from '@/utils/data';
import React, { useEffect, useRef, useState } from 'react'


function SelectRequiredSkills({
    initialSelectedTags = [],
    dropdownOptions = [],
    onTagSelect,
    onTagRemove,
    selectedRequiredSkills,
    setSelectedRequiredSkills
}: any) {

    const [inputValue, setInputValue] = useState('');
    const [isShowDropDown, setIsShowDropDown] = useState(false);
    // const [selectedTags, setSelectedTags] = useState<string[]>(initialSelectedTags);

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

    const handleTagSelect = (skill: any) => {
        // handleTagSearch(makeString, 'tags')
        setSelectedRequiredSkills([...selectedRequiredSkills, skill]);
        setInputValue('');
        setIsShowDropDown(false)
        if (onTagSelect) {
            onTagSelect(skill);
        }
    };


    const handleTagRemove = (tag: any) => {
        setSelectedRequiredSkills(selectedRequiredSkills.filter((selectedTag: any) => selectedTag !== tag));
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
                <div className='border flex items-center flex-wrap p-2'>
                    {selectedRequiredSkills.map((tag: any, index: any) => (
                        <div key={index} className="bg-primary text-white px-2 py-1 rounded-full mr-2 mb-2 text-[12px]">
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
                        className="w-full h-[2.5rem] bg-transparent py-[0.5rem] px-[.75rem] text-[14px] outline-transparent  font-light text-blue-midnight_blue rounded-sm focus:outline-transparent"
                        placeholder="Search or add tags"
                    />
                </div>

                {inputValue && (
                    <ul className="absolute z-10 left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                        {required_skills.map((option: any, index: any) => {
                            const isSelected = selectedRequiredSkills.includes(option); // Check if the option is selected
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


export default SelectRequiredSkills

