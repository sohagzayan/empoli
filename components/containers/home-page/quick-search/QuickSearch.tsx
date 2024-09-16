import PopularSearches from '@/components/shared/popular-searches/PopularSearches'
import React, { useState, useRef, useEffect } from 'react'
import { HiBriefcase } from 'react-icons/hi'
import { motion } from 'framer-motion';

const QuickSearch = () => {
    const [isJobTypeOpen, setIsJobTypeOpen] = useState(false); // Job type dropdown state
    const [isEmploymentTypeOpen, setIsEmploymentTypeOpen] = useState(false); // Employment type dropdown state

    const [jobType, setJobType] = useState('Jobs type'); // For the custom job type dropdown
    const [employmentType, setEmploymentType] = useState('Part-time/Full-time'); // For the custom employment type dropdown
    const [keywords, setKeywords] = useState(''); // For the job keyword search

    const jobTypeRef = useRef<HTMLDivElement>(null); // Ref for job type dropdown
    const employmentTypeRef = useRef<HTMLDivElement>(null); // Ref for employment type dropdown

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                jobTypeRef.current &&
                !jobTypeRef.current.contains(event.target as Node) &&
                employmentTypeRef.current &&
                !employmentTypeRef.current.contains(event.target as Node)
            ) {
                setIsJobTypeOpen(false);
                setIsEmploymentTypeOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Toggle dropdown for custom job type
    const toggleJobTypeDropdown = () => {
        setIsJobTypeOpen(!isJobTypeOpen);
        setIsEmploymentTypeOpen(false); // Close employment type dropdown when job type is opened
    };

    // Toggle dropdown for custom employment type
    const toggleEmploymentTypeDropdown = () => {
        setIsEmploymentTypeOpen(!isEmploymentTypeOpen);
        setIsJobTypeOpen(false); // Close job type dropdown when employment type is opened
    };

    // Handle job type selection
    const handleJobTypeSelect = (value: string) => {
        setJobType(value);
        setIsJobTypeOpen(false); // Close the dropdown after selection
    };

    // Handle employment type selection
    const handleEmploymentTypeSelect = (value: string) => {
        setEmploymentType(value);
        setIsEmploymentTypeOpen(false); // Close the dropdown after selection
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // You can handle form submission logic here
        console.log("Job Type:", jobType);
        console.log("Employment Type:", employmentType);
        console.log("Keywords:", keywords);
    };

    return (
        <div className='md:w-5/6 mx-auto mt-4 text-[14px]'>
            <div>
                <div className='border-0 shadow rounded-md p-3'>
                    <form onSubmit={handleSubmit}>
                        <div style={{ backgroundColor: "#ffffff0d" }} className='registration-form text-white text-start lg:rounded-md'>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full'>

                                {/* Keyword input */}
                                <div className="flex items-center gap-1 relative rounded-md px-2">
                                    <div className='absolute top-4 left-2'>
                                        <HiBriefcase className='text-2xl text-gray400' />
                                    </div>
                                    <input
                                        type="text"
                                        id="job-keyword"
                                        className="filter-input-box bg-transparent w-full border-0 pl-[40px] pr-[6px] pb-[15px] pt-[13px] placeholder:text-gray400 focus:outline-none focus:border-none h-[60px]"
                                        placeholder="Search your Keywords"
                                        value={keywords}
                                        onChange={(e) => setKeywords(e.target.value)}  // Update keyword state
                                    />
                                </div>

                                {/* Job Type Custom Dropdown */}
                                <div className='flex items-center gap-1 relative rounded-md px-2' ref={jobTypeRef}>
                                    <div className='absolute top-4 left-2'>
                                        <HiBriefcase className='text-2xl text-gray400' />
                                    </div>
                                    <div className="relative inline-block w-full">
                                        <button
                                            type='button'
                                            onClick={toggleJobTypeDropdown}
                                            className="filter-input-box text-gray400 bg-transparent w-full border-0 pl-[40px] pr-[6px] pb-[15px] pt-[13px] focus:outline-none focus:border-none h-[60px]"
                                        >
                                            {jobType} {/* Show selected job type */}
                                        </button>

                                        {/* Dropdown Menu */}
                                        {isJobTypeOpen && (
                                            <motion.ul
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute w-full mt-2 bg-customDarkBg shadow-lg z-50"
                                            >
                                                <li
                                                    className="px-4 py-2 text-gray400 hover:bg-gray-700 cursor-pointer"
                                                    onClick={() => handleJobTypeSelect('Full-time')}
                                                >
                                                    Full-time
                                                </li>
                                                <li
                                                    className="px-4 py-2 text-gray400 hover:bg-gray-700 cursor-pointer"
                                                    onClick={() => handleJobTypeSelect('Part-time')}
                                                >
                                                    Part-time
                                                </li>
                                                <li
                                                    className="px-4 py-2 text-gray400 hover:bg-gray-700 cursor-pointer"
                                                    onClick={() => handleJobTypeSelect('Contract')}
                                                >
                                                    Contract
                                                </li>
                                            </motion.ul>
                                        )}
                                    </div>
                                </div>

                                {/* Employment Type Custom Dropdown */}
                                <div className='flex items-center gap-1 relative rounded-md px-2' ref={employmentTypeRef}>
                                    <div className='absolute top-4 left-2'>
                                        <HiBriefcase className='text-2xl text-gray400' />
                                    </div>
                                    <div className="relative inline-block w-full">
                                        <button
                                            type='button'
                                            onClick={toggleEmploymentTypeDropdown}
                                            className="filter-input-box text-gray400 bg-transparent w-full border-0 pl-[40px] pr-[6px] pb-[15px] pt-[13px] focus:outline-none focus:border-none h-[60px]"
                                        >
                                            {employmentType} {/* Show selected employment type */}
                                        </button>

                                        {/* Dropdown Menu */}
                                        {isEmploymentTypeOpen && (
                                            <motion.ul
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute w-full mt-2 bg-customDarkBg shadow-lg z-50"
                                            >
                                                <li
                                                    className="px-4 py-2 text-gray400 hover:bg-gray-700 cursor-pointer"
                                                    onClick={() => handleEmploymentTypeSelect('Full-time')}
                                                >
                                                    Full-time
                                                </li>
                                                <li
                                                    className="px-4 py-2 text-gray400 hover:bg-gray-700 cursor-pointer"
                                                    onClick={() => handleEmploymentTypeSelect('Part-time')}
                                                >
                                                    Part-time
                                                </li>
                                                <li
                                                    className="px-4 py-2 text-gray400 hover:bg-gray-700 cursor-pointer"
                                                    onClick={() => handleEmploymentTypeSelect('Contract')}
                                                >
                                                    Contract
                                                </li>
                                            </motion.ul>
                                        )}
                                    </div>
                                </div>

                                {/* Submit button */}
                                <input
                                    type='submit'
                                    className='bg-primary rounded-md w-full h-[60px] py-2 text-white font-semibold'
                                    value="Search"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <PopularSearches />
            </div>
        </div>
    )
}

export default QuickSearch;
