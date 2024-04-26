"use client"
import { Button } from '@/components/ui/button'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { IoIosSearch } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import SearchPreferredInterest from './search-preferred-interest/SearchPreferredInterest'
import { MdClose, MdErrorOutline } from 'react-icons/md'
import { Toaster, toast } from 'sonner'
import { useAddPreferenceMutation, useGetUserPreferenceQuery } from '@/redux/features/User'
import { useGetOrgPopularInterestsCareerQuery } from '@/redux/features/Organization'
import MiniLoadingCircle from '@/components/shared/mini-loading-circle/MiniLoadingCircle'
import Loading from '@/components/shared/Loading/Loading'
import { useSession } from 'next-auth/react'


const UserPreferenceMain = () => {
    const { data: session } = useSession()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentlyLookingFor, setCurrentlyLookingFor] = useState<string[]>([])
    const [workMode, setWorkMode] = useState<string[]>([])
    const [selectedInterest, setSelectedInterest] = useState<string[]>([])

    const {
        data: preference,
        isError: preferenceIsError,
        isLoading: preferenceIsLoading
    } = useGetUserPreferenceQuery(session?.user?.id)

    const [addPreference, { isLoading, isError, isSuccess }] = useAddPreferenceMutation()
    const {
        data: PTCareer,
        isError: PTIsError,
        isLoading: PTIsLoading
    } = useGetOrgPopularInterestsCareerQuery({})


    const [validationError, setValidationError] = useState<any>({
        interest_of_Areas: "",
        currently_looking_for: "",
        work_mode: "",
    })

    useEffect(() => {
        let loadingToast
        if (isLoading) {
            loadingToast = toast.loading("Updating preference...", {
                position: 'bottom-center',
            })
        }
        if (isSuccess) {
            toast.success("Preference updated")
            toast.dismiss(loadingToast);
        }
        if (isError) {
            toast.error("something went wrong")
            toast.dismiss(loadingToast);
        }
    }, [isLoading, isSuccess, isError])


    useEffect(() => {
        if (preference) {
            setSelectedInterest(preference?.interest_of_areas)
            setCurrentlyLookingFor(preference?.currently_looking_for)
            setWorkMode(preference?.work_mode)
        }
    }, [preference])


    if (PTIsLoading || preferenceIsLoading) {
        return <Loading />
    }

    const handleRemoveSelectedInterest = (interest: string) => {
        let exitsArray = selectedInterest.filter(selectedTag => selectedTag !== interest)
        setSelectedInterest(exitsArray);
    };

    const excludeSelectedTopInterested = PTCareer?.filter((interest: any) => !selectedInterest.includes(interest.job_title
    ));

    const addPopularCareerInterests = (popular: any) => {
        setSelectedInterest((prev) => [...prev, popular])
    }

    const handleCurrentlyLookingFor = (lookingFor: any) => {
        if (currentlyLookingFor.includes(lookingFor)) {
            let exclude = currentlyLookingFor.filter((work) => work !== lookingFor)
            setCurrentlyLookingFor(exclude)
        } else {
            setCurrentlyLookingFor((prev) => ([...prev, lookingFor]))
        }
    }


    const handleWorkMode = (mode: any) => {
        if (workMode.includes(mode)) {
            let exclude = workMode.filter((work) => work !== mode)
            setWorkMode(exclude)
        } else {
            setWorkMode((prev) => ([...prev, mode]))
        }
    }

    const validateField = () => {
        let errors = {};

        if (!selectedInterest.length) {
            errors = { ...errors, interest_of_Areas: "required" };
        } else {
            errors = { ...errors, interest_of_Areas: "" };
        }

        if (!currentlyLookingFor.length) {
            errors = { ...errors, currently_looking_for: "required" };
        } else {
            errors = { ...errors, currently_looking_for: "" };
        }

        if (!workMode.length) {
            errors = { ...errors, work_mode: "required" };
        } else {
            errors = { ...errors, work_mode: "" };
        }


        setValidationError(errors);
        const isValid = Object.values(errors).every(error => error === "");
        return isValid;
    }


    const handlePreferences = async (e: any) => {
        e.preventDefault()
        let isPass = validateField()
        if (!isPass) {
            toast.error("Please fill all required field!", {
                position: "bottom-center"
            })
            return
        }
        try {

            await addPreference(
                {
                    data: {
                        interest_of_areas: selectedInterest,
                        currently_looking_for: currentlyLookingFor,
                        work_mode: workMode,
                    },
                    userId: session?.user?.id
                }
            )
        } catch (error: any) {
            toast.error(error.message, {
                position: "bottom-center"
            })
            console.log("error form preference", error)
        }
    }


    return (
        <div className=' mx-6 '>
            <SearchPreferredInterest
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                setSearchedInterestField={setSelectedInterest}
            />
            <div>
                <div className='text-center mb-10'>
                    <h1 className="text-3xl font-medium text-blue-midnight_blue">Your preferences</h1>
                </div>
                <form action="" onSubmit={handlePreferences}>
                    <div className='border p-10 rounded-md'>
                        <div className='mb-4'>
                            <div className='flex items-center gap-2'>
                                <label className="block text-foreground-light text-sm mb-1" htmlFor="email">interest of Areas  </label>
                                { }
                                {validationError.interest_of_Areas && <p className='text-red-500 text-sm flex items-center gap-1'><MdErrorOutline />{validationError.interest_of_Areas}</p>}

                            </div>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                type="button" className=' box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2 text-left flex items-center gap-2 text-blue-steel_blue'  >
                                <IoIosSearch size={25} className='text-blue-steel_blue' />
                                Areas you want to work in or learn about
                            </button>
                        </div>
                        <div className='mb-4'>
                            <ul className='flex gap-2 flex-wrap mt-3'>
                                {selectedInterest.map((interest) =>
                                    <li onClick={() => handleRemoveSelectedInterest(interest)} className='bg-primary  text-white px-5 py-2 rounded-full text-sm font-medium cursor-pointer flex items-center gap-2' key={interest}>
                                        {interest} <IoClose size={20} />
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className='mb-4'>
                            <label className="block text-foreground-light text-sm mt-5" htmlFor="email">Popular career interests
                            </label>
                            <ul className='flex items-center gap-3 flex-wrap text-sm mt-2'>
                                {excludeSelectedTopInterested.map((top: any) =>
                                    <li onClick={() => addPopularCareerInterests(top?.job_title)} className='border px-5 py-2 rounded-full cursor-pointer hover:border-primary flex items-center gap-1 text-blue-steel_blue' key={top?.job_title}>{top?.job_title} <FiPlus size={20} className='text-blue-steel_blue' />  </li>
                                )}
                            </ul>
                        </div>
                        <div className='mb-5'>

                            <div className='flex items-center gap-2'>
                                <label className="block text-foreground-light text-sm mb-1" htmlFor="email">Currently looking for
                                </label>
                                { }
                                {validationError.currently_looking_for && <p className='text-red-500 text-sm flex items-center gap-1'><MdErrorOutline />{validationError.currently_looking_for}</p>}

                            </div>
                            <ul className='flex items-center gap-3 flex-wrap text-sm mt-2'>
                                <li onClick={() => handleCurrentlyLookingFor("jobs")} className={`border px-5 py-2 rounded-full cursor-pointer hover:border-primary flex items-center gap-1 text-blue-steel_blue ${currentlyLookingFor.includes('jobs') ? 'bg-primary text-white' : ''}`} >Jobs
                                    {currentlyLookingFor.includes('jobs') ?
                                        <MdClose size={20} className='text-white
                                        ' />
                                        :
                                        <FiPlus size={20} className='text-blue-steel_blue' />
                                    }
                                </li>

                                <li onClick={() => handleCurrentlyLookingFor("internship")} className={`border px-5 py-2 rounded-full cursor-pointer hover:border-primary flex items-center gap-1 text-blue-steel_blue ${currentlyLookingFor.includes("internship") ? 'bg-primary text-white' : ''}`} >Internship
                                    {currentlyLookingFor.includes("internship") ? <MdClose size={20} className='text-white' />
                                        :
                                        <FiPlus size={20} className='text-blue-steel_blue' />
                                    }
                                </li>

                            </ul>
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <label className="block text-foreground-light text-sm mb-1" htmlFor="email"> Work mode </label>
                                {validationError.work_mode && <p className='text-red-500 text-sm flex items-center gap-1'><MdErrorOutline />{validationError.work_mode}</p>}
                            </div>
                            <ul className='flex items-center gap-3 flex-wrap text-sm mt-2'>
                                <li onClick={() => handleWorkMode("in-office")} className={`border px-5 py-2 rounded-full cursor-pointer hover:border-primary flex items-center gap-1 text-blue-steel_blue ${workMode.includes("in-office") ? 'bg-primary text-white' : ''}`} >In-office
                                    {workMode.includes("in-office") ? <MdClose size={20} className='text-white' />
                                        :
                                        <FiPlus size={20} className='text-blue-steel_blue' />
                                    }
                                </li>
                                <li onClick={() => handleWorkMode("work from home")} className={`border px-5 py-2 rounded-full cursor-pointer hover:border-primary flex items-center gap-1 text-blue-steel_blue ${workMode.includes("work from home") ? 'bg-primary text-white' : ''}`} >Work form home
                                    {workMode.includes("work from home") ? <MdClose size={20} className='text-white' />
                                        :
                                        <FiPlus size={20} className='text-blue-steel_blue' />
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-4 flex justify-end'>

                        <Button disabled={isLoading} type="submit" className='px-12 '>
                            {
                                isLoading ? <span className='flex items-center gap-2'>
                                    <MiniLoadingCircle width="20" height="20" />
                                    saving...
                                </span>
                                    :
                                    "Save"
                            }
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default UserPreferenceMain

