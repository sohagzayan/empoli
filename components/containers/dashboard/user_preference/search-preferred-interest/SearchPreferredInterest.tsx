"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { job_profile } from '@/utils/data';

const SearchPreferredInterest = ({ isModalOpen, setIsModalOpen, setSearchedInterestField }: any) => {
    const interestRef = useRef<any>(null);
    const [inputValue, setInputValue] = useState("")
    const [selectedInterest, setSelectedInterest] = useState<string[]>([]);



    const handleClickOutside = (event: any) => {
        if (interestRef.current && !interestRef.current.contains(event.target)) {
            setIsModalOpen()
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
        setInputValue("")
    };




    const handleDoneFunc = () => {
        setSearchedInterestField((prev: any) => [...prev, ...selectedInterest])
        setIsModalOpen(false)
        setSelectedInterest([])
    }


    const filteredOptions = job_profile.filter((option: any) =>
        option.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (

        <div data-state={isModalOpen ? "open" : "closed"} className='bg-alternative/90 backdrop-blur-sm z-50 fixed inset-0 grid place-items-center overflow-y-auto data-open:animate-overlay-show data-[state=closed]:invisible animate-overlay-hide  data-[state=open]:animate-overlay-show'>

            <div ref={interestRef} role="dialog" data-state="open" className='my-8 relative z-50 grid w-full gap-4 border shadow-md dark:shadow-sm duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-[0%] data-[state=closed]:slide-out-to-top-[0% data-[state=open]:slide-in-from-left-[0%] data-[state=open]:slide-in-from-top-[0%] sm:rounded-lg md:w-full bg-overlay sm:align-middle sm:w-full max-w-3xl !bg-overlay/90 backdrop-filter backdrop-blur-sm !border-overlay/90 bg-white transition ease-out place-self-start mx-auto top-24 scale-100'>

                <div className='flex h-full w-full flex-col overflow-hidden '>
                    <div className="flex flex-col items-center relative" >
                        <input
                            autoFocus={true}
                            onChange={(e) => setInputValue(e.target.value)}
                            value={inputValue}
                            className="flex h-11 w-full rounded-md bg-transparent px-4 py-7 text-sm outline-none focus:shadow-none focus:ring-transparent text-foreground-light placeholder:text-border-stronger disabled:cursor-not-allowed disabled:opacity-50 border-0" placeholder="Search for your preferred area of interest" autoComplete="off" autoCorrect="off" spellCheck="false" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-controls=":r56:" aria-labelledby=":r57:" id=":r58:" type="text" aria-activedescendant=":r5i:" />
                        {inputValue && (
                            <ul className="absolute z-10 left-0 top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                                {filteredOptions.map((option: any, index: any) => {
                                    const isSelected = selectedInterest.includes(option); // Check if the option is selected
                                    return (
                                        <li key={index} className={`cursor-pointer py-1 px-3 hover:bg-gray-100 ${isSelected ? 'pointer-events-none text-blue-steel_blue cursor-none' : ''}`} onClick={() => handleJobProfileSelect(option)}>
                                            {option}
                                        </li>
                                    )
                                }
                                )}
                            </ul>
                        )}

                        <div className="relative overflow-hidden w-full h-px bg-border m-auto"><span className="absolute w-[80px] h-px ml-auto mr-auto left-0 right-0 text-center block top-0 transition-all line-loading-bg-light dark:line-loading-bg opacity-0"></span></div>



                    </div>
                    <ul className='flex items-center flex-wrap gap-3 p-2'>
                        {selectedInterest.map((i) => <li className='bg-primary inline-block text-white px-5 py-2 rounded-full text-sm font-medium' key={i}>{i}</li>)}
                    </ul>

                    <div className="overflow-hidden py-3 px-6 text-border-strong " cmdk-group="" role="presentation" data-value="documentation">
                        <div className='flex justify-end pt-28'>
                            <Button onClick={handleDoneFunc} variant="outline" className='px-12'>Done</Button>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}



export default SearchPreferredInterest

