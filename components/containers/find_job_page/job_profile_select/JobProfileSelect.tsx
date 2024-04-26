"use client"
import { required_skills } from '@/utils/data';
import React, { useEffect, useRef, useState } from 'react'


function JobProfileSelect({
    options = [],
    // onSelect,
    setJobTitleError,
    jobTitleValue,
    setJobTitleValue
}: any) {

    const [isShowDropDown, setIsShowDropDown] = useState(false);

    const inputRef = useRef<any>(null);






    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setIsShowDropDown(false);
                const exits = options.find((option: any) =>
                    option.toLowerCase() === jobTitleValue.toLowerCase()
                );
                if (!exits) {
                    setJobTitleValue("");
                    // onSelect("");
                    setJobTitleError("Job title is required");
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
        setIsShowDropDown(true)
    };

    const handleTagSelect = (profile: any) => {
        setJobTitleValue(profile);
        // onSelect(profile);
        setJobTitleError(null)
    };



    const filteredOptions = options.filter((option: any) =>
        option.toLowerCase().includes(jobTitleValue.toLowerCase())
    );




    return (
        <div className="flex flex-col">
            <div className="relative" ref={inputRef}>
                <div className='   rounded-md  border p-3 focus:outline-primary peer/input block box-border w-full shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200 border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2'>
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
                        className="w-full  bg-transparent  text-[14px] outline-transparent  font-light text-blue-midnight_blue rounded-sm focus:outline-transparent "
                        placeholder="Search or add tags"
                    />
                </div>

                {jobTitleValue && isShowDropDown && (
                    <ul className="absolute z-10 left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                        {filteredOptions.map((option: any, index: any) => {

                            return (
                                <li
                                    key={index}
                                    className={`cursor-pointer py-1 px-3 hover:bg-gray-100 `}
                                    onClick={() => handleTagSelect(option)}>
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


export default JobProfileSelect

