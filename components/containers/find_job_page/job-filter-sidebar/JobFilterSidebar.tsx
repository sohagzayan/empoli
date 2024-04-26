'use client'

import MultiSelectWithSearch from "@/components/shared/multi-select-with-search/MultiSelectWithSearch"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { BiFilterAlt } from "react-icons/bi"
import { CiStickyNote } from "react-icons/ci"
import { IoIosArrowDown } from "react-icons/io"
import "react-datepicker/dist/react-datepicker.css";
import { LuSearch } from "react-icons/lu"
import { job_profile, required_skills, skills } from "@/utils/data"



const JobFilterSidebar = ({ searchParamsObj }: any) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 })
    const [moreFilters, setMoreFilters] = useState(false)
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [checkedJobsTypeValues, setCheckedJobsTypeValues] = useState<string[]>([]);
    const [locationStatus, setLocationStatus] = useState<string[]>([]);
    const [checkedJobsPerksValues, setCheckedJobsPerksValues] = useState<string[]>([]);


    const [filterFormData, setFilterFormData] = useState({
        category: searchParamsObj.category ? searchParamsObj.category : '',
        office_location: searchParamsObj.office_location ? searchParamsObj.office_location : '',
        job_type: searchParamsObj.job_type ? searchParamsObj.job_type : '',
        employee_type: searchParamsObj.employee_type ? searchParamsObj.employee_type : '',
        salary_range_min: searchParamsObj.salary_range_min ? searchParamsObj.salary_range_min : '',
        salary_range_max: searchParamsObj.salary_range_max ? searchParamsObj.salary_range_max : '',
        applicationDeadline: searchParamsObj.applicationDeadline ? searchParamsObj.applicationDeadline : '',
        job_duration: searchParamsObj.job_duration ? searchParamsObj.job_duration : '',
        job_facilities: searchParamsObj.job_facilities ? searchParamsObj.job_facilities : '',
    })


    useEffect(() => {
        if (searchParamsObj.job_type) {
            const makeArray = searchParamsObj.job_type.split(',')
            setCheckedJobsTypeValues([...makeArray])
        }
        if (searchParamsObj.location) {
            const makeArray = searchParamsObj.location.split(',')
            setLocationStatus([...makeArray])
        }
    }, [searchParamsObj.job_type, searchParamsObj.location])

    console.log("setCheckedJobsTypeValues >", checkedJobsTypeValues)



    const handleJobFiltering = (e: any) => {
        e.preventDefault()
    }

    const handleTagSearch = (tagInput: string, name: string) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        if (tagInput) {
            const tags = tagInput.split(",").map(tag => tag.trim()); // Split the input into an array of tags
            console.log("first tgssss", tags)
            console.log("current teg input text length", tags)
            // Replace existing tag parameter with the new value
            current.set(name, tags.join(","));
        } else {
            current.delete(name);
        }
        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`);

    };





    const handleInputChange = async (e: any) => {
        const { name, value, checked } = e.target;
        console.log("checkbox name", e.target.name)
        console.log("checkbox value", e.target.value)

        setFilterFormData({
            ...filterFormData,
            [name]: value
        });
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        if (!value) {
            current.delete(name);
        } else {
            current.set(name, value);
        }
        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`);
    };



    const handleJobProfileSelect = (tag: string) => {
        setSelectedSkills([...selectedSkills, tag]);
        let myTag = [...selectedSkills, tag]
        let makeString = myTag.join(",")
        console.log("makeString", makeString)
        handleTagSearch(makeString, 'skills')
    };

    const handleJobProfileRemove = (tag: string) => {
        let exitsArray = selectedSkills.filter(selectedTag => selectedTag !== tag)
        setSelectedSkills(exitsArray);
        let makeString = exitsArray.join(",")
        handleTagSearch(makeString, 'tag')
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
        let makeString = newCheckedValues.join(",")

        handleTagSearch(makeString, 'job_type')
    }


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
        let makeString = newCheckedValues.join(",")

        handleTagSearch(makeString, 'location')
    }


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
        let makeString = newCheckedValues.join(",")

        handleTagSearch(makeString, 'perks')
    }


    const handleFilterClear = () => {
        router.push(`${pathname}`);
        setSelectedSkills([])
        setCheckedJobsTypeValues([])
        setLocationStatus([])
        setCheckedJobsPerksValues([])
    }

    console.log("checkedJobsTypeValues", checkedJobsTypeValues)


    return (
        <div className=' rounded-lg  bg-background  '>
            <div className='p-6  bg-white border'>
                <div>
                    <div className=' flex items-center justify-center mb-4'>
                        <div className='flex items-center text-blue-midnight_blue text-[14px] gap-1 font-medium'>
                            <BiFilterAlt className='text-primary' />
                            Filters
                        </div>
                    </div>

                    <div>
                        <div className='items-center flex gap-2'>
                            <input type="checkbox" id='preferences' className='h-4 w-4' />
                            <label
                                htmlFor="preferences"
                                className='text-[14px] font-medium cursor-pointer text-blue-midnight_blue'>
                                As per my
                                <span className='text-primary'> preferences</span>
                            </label>
                        </div>
                    </div>
                    <form onSubmit={handleJobFiltering}>
                        <div className='bg-white relative  mb-4 mt-4'>
                            <label htmlFor="job_type_search" className='text-blue-midnight_blue text-[14px] mb-1 '> Profile</label>
                            <div className='mb-5'>
                                <MultiSelectWithSearch
                                    initialselectedSkills={selectedSkills}
                                    dropdownOptions={job_profile}
                                    onTagSelect={handleJobProfileSelect}
                                    onTagRemove={handleJobProfileRemove}
                                />
                            </div>
                        </div>

                        <div className='bg-white relative  mb-4 mt-4'>
                            <label htmlFor="location" className='text-blue-midnight_blue text-[14px] '>Office Location</label>
                            <input
                                id="office_location"
                                name="office_location"
                                placeholder="e.g. Dhaka"
                                type="text"
                                value={filterFormData.office_location}
                                onChange={handleInputChange}
                                className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-3" />




                        </div>

                        <div className='   mb-4 mt-4 flex justify-between gap-2 Perks '>
                            <div className="">
                                <label htmlFor="location" className='text-blue-midnight_blue text-[14px] mb-2 inline-block '>Jobs type</label>
                                <div className='flex flex-col  gap-3 text-[14px]'>
                                    <div className='flex items-center gap-2'>
                                        <input
                                            checked={checkedJobsTypeValues.includes('full time')}
                                            onChange={() => handleJobsTypeFilterValue('full time')}
                                            type="checkbox"
                                            id='full time'
                                            className='w-4 h-4 '
                                            value="full time" />
                                        <label htmlFor="full time" className="capitalize">full time</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input
                                            checked={checkedJobsTypeValues.includes('part time')}
                                            onChange={() => handleJobsTypeFilterValue('part time')}
                                            type="checkbox"
                                            id='part time'
                                            className='w-4 h-4 '
                                            value="part time"
                                        />
                                        <label htmlFor="part time" className="capitalize">part time</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input
                                            checked={checkedJobsTypeValues.includes('contract')}
                                            onChange={() => handleJobsTypeFilterValue('contract')}
                                            type="checkbox"
                                            id='contract'
                                            className='w-4 h-4 '
                                            value="contract" />
                                        <label htmlFor="contract" className="capitalize">contract</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input
                                            checked={checkedJobsTypeValues.includes('temporary')}
                                            onChange={() => handleJobsTypeFilterValue('temporary')}
                                            type="checkbox"
                                            id='temporary'
                                            className='w-4 h-4 '
                                            value="temporary" />
                                        <label htmlFor="temporary" className="capitalize">temporary</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input
                                            checked={checkedJobsTypeValues.includes('internship')}
                                            onChange={() => handleJobsTypeFilterValue('internship')}
                                            type="checkbox"
                                            id='internship'
                                            className='w-4 h-4 '
                                            value="internship" />
                                        <label htmlFor="internship" className="capitalize">internship</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input
                                            checked={checkedJobsTypeValues.includes('volunteer')}
                                            onChange={() => handleJobsTypeFilterValue('volunteer')}
                                            type="checkbox"
                                            id='volunteer'
                                            className='w-4 h-4 '
                                            value="volunteer" />
                                        <label htmlFor="volunteer" className="capitalize">volunteer</label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="location" className='text-blue-midnight_blue text-[14px] mb-2 inline-block'>Location</label>
                                <div className='flex flex-col  gap-3 text-[14px]'>
                                    <div className='flex items-center gap-2'>
                                        <input
                                            checked={locationStatus.includes('remote')}
                                            onChange={() => handleJobsPartTimeOrFullTime('remote')}
                                            type="checkbox"
                                            id='remote'
                                            className='w-4 h-4 '
                                            value="remote"
                                        />
                                        <label htmlFor="remote" className="capitalize">remote</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input
                                            checked={locationStatus.includes('on-site')}
                                            onChange={() => handleJobsPartTimeOrFullTime('on-site')}
                                            type="checkbox"
                                            id='on-site'
                                            className='w-4 h-4 '
                                            value="on-site"
                                        />
                                        <label htmlFor="on-site" className="capitalize">on-site</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input
                                            checked={locationStatus.includes('hybrid')}
                                            onChange={() => handleJobsPartTimeOrFullTime('hybrid')}
                                            type="checkbox"
                                            id='hybrid'
                                            className='w-4 h-4 '
                                            value="hybrid"
                                        />
                                        <label htmlFor="hybrid" className="capitalize " >hybrid</label>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='bg-white relative   mt-8 '>
                            <button
                                onClick={() => setMoreFilters((prev) => !prev)}
                                className='text-primary font-medium text-[14px] flex items-center gap-1 '>
                                {moreFilters ? "View less filters" : "View more filters"}   <IoIosArrowDown className={`${moreFilters && 'rotate-180'}`} />
                            </button>

                            {moreFilters &&
                                <div>

                                    <div className='flex w-full mt-4 flex-col text-[14px]'>
                                        <label htmlFor="countries" className="text-blue-midnight_blue text-[14px] mb-1 inline-block">Max. duration (months)</label>
                                        <select
                                            name='job_duration'
                                            id="job_duration"
                                            value={filterFormData.job_duration}
                                            onChange={handleInputChange}
                                            className="bg-white  border-gray-300 text-blue-midnight_blue   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 peer/input  box-border  rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2">
                                            <option selected value="">Choose duration</option>
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


                                    <div className='flex w-full mt-4 flex-col gap-2'>
                                        <label htmlFor="location" className='text-blue-midnight_blue text-[14px] '>Perks</label>
                                        <div>
                                            <div className='flex flex-col  gap-3 text-[14px]'>
                                                <div className='flex items-center gap-2'>
                                                    <input
                                                        checked={checkedJobsPerksValues.includes('internships with job offer')}
                                                        onChange={() => handleJobsPerks('internships with job offer')}
                                                        type="checkbox"
                                                        id='internships with job offer'
                                                        className='w-4 h-4'
                                                        value="internships with job offer"
                                                    />
                                                    <label htmlFor="internships with job offer">Internships with job offer</label>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input
                                                        checked={checkedJobsPerksValues.includes('fast response')}
                                                        onChange={() => handleJobsPerks('fast response')}
                                                        type="checkbox"
                                                        id='fast response'
                                                        className='w-4 h-4'
                                                        value="fast response"
                                                    />
                                                    <label htmlFor="fast response">Fast response</label>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input
                                                        checked={checkedJobsPerksValues.includes('early applicant')}
                                                        onChange={() => handleJobsPerks('early applicant')}
                                                        type="checkbox"
                                                        id='early applicant'
                                                        className='w-4 h-4 '
                                                        value="early applicant"
                                                    />
                                                    <label htmlFor="Flexible work hours">Early applicant</label>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input
                                                        checked={checkedJobsPerksValues.includes('internship with offer latter')}
                                                        onChange={() => handleJobsPerks('internship with offer latter')}
                                                        type="checkbox"
                                                        id='internship with offer latter'
                                                        className='w-4 h-4 '
                                                        value="internship with offer latter"
                                                    />
                                                    <label htmlFor="internship with offer latter">Internship with offer latter</label>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input
                                                        checked={checkedJobsPerksValues.includes('letter of recommendation')}
                                                        onChange={() => handleJobsPerks('letter of recommendation')}
                                                        type="checkbox"
                                                        id='Letter of recommendation'
                                                        className='w-4 h-4 '
                                                        value="letter of recommendation"
                                                    />
                                                    <label htmlFor="Letter of recommendation">Letter of recommendation</label>
                                                </div>
                                                <div className='flex items-center gap-2 text-[14px]'>
                                                    <input
                                                        checked={checkedJobsPerksValues.includes('5 days a week')}
                                                        onChange={() => handleJobsPerks('5 days a week')}
                                                        type="checkbox"
                                                        id='5 days a week'
                                                        className='w-4 h-4 '
                                                        value="5 days a week"
                                                    />
                                                    <label htmlFor="5 days a week" >5 days a week</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}

                            <div className='flex justify-end mt-8'>
                                <button onClick={handleFilterClear} className='font-medium text-[14px] text-primary'>Clear all</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            <div className=' mt-5  text-center p-6  bg-white border'>
                <label htmlFor="" className='font-semibold text-blue-midnight_blue mb-1 inline-block text-[14px]'>Keyword Search</label>
                <form className=" ">
                    <p className='text-blue-steel_blue text-[12px]  flex items-center gap-1 mb-1'><CiStickyNote /> Search by category, location or company name</p>
                    <div className="relative w-full">
                        <input id="email" name="" placeholder="e.g. developer, dhaka,infosys" type="email" className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-3" />


                    </div>
                    <div className="flex justify-end">
                        <button type="submit" form="signIn-form" className="relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4  focus-visible:outline-offset-1 border bg-primary hover:bg-primary/80 text-white border-brand focus-visible:outline-brand-600 shadow-sm data-[state=open]:bg-brand-button/80 data-[state=open]:outline-brand-600  flex items-center justify-center text-base px-4 py-2 mt-2"> <span className="truncate">Search</span> </button>
                    </div>
                </form>
            </div>



        </div>
    )
}

export default JobFilterSidebar