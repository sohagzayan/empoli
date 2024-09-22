"use client"
import ClosedToOffers from '@/components/icons/closed-to-offers/ClosedToOffers'
import OpenToOffers from '@/components/icons/open-to-offers/OpenToOffers'
import ReadyToInterview from '@/components/icons/ready-to-interview/ReadyToInterview'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'



let visibilityData = [
    { id: 1, label: "Ready to interview", icon: <ReadyToInterview />, details: 'You’re actively looking for new work and ready to interview. Your job profile will be visible to startups.', },
    { id: 2, label: "Open to offers", icon: <OpenToOffers />, details: "You’re not looking but open to hear about new opportunities. Your job profile will be visible to startups.", },
    { id: 3, label: "Closed to offers", icon: <ClosedToOffers />, details: "You’re not looking and don’t want to hear about new opportunities. Your job profile will be hidden to startups.", },
]


const VisibilitySetting = () => {
    const [activeStatus, setActiveStatus] = useState(visibilityData[0])
    const [isShowStatusPanel, setIsShowStatusPanel] = useState(false)
    const modalRef = useRef<any>(null);


    const handleStatusChange = (status: any) => {
        setActiveStatus(status)
        setIsShowStatusPanel(false)
    }

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsShowStatusPanel(false)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isShowStatusPanel]);


    return (
        <div>
            <div ref={modalRef} className='relative '>
                <button onClick={() => setIsShowStatusPanel((prev) => !prev)} className=' bg-themeDark   rounded border-[rgba(255,255,255,0.14)] border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center text-sm no-underline cursor-pointer focus:outline-0
      disabled:cursor-default disabled:pointer-events-none disabled:opacity-50
      transition duration-200 px-4 py-2 bg-light_gray border-gray_light_400 text-blue-midnight_blue flex items-center  hover:bg-light_gray/80
               disabled:bg-gray-100 disabled:border-gray-500 hover:border-primary disabled:text-gray-500 w-auto '>
                    <span className=''>{activeStatus.icon}</span>
                    <span className={`${activeStatus?.id === 1 && "text-green"} ${activeStatus?.id === 2 && "text-yellow"} ${activeStatus?.id === 3 && "text-rose-500"}`}>{activeStatus.label}</span>
                    <span className='ml-auto'><IoIosArrowDown className={`${activeStatus?.id === 1 && "text-green"} ${activeStatus?.id === 2 && "text-yellow"} ${activeStatus?.id === 3 && "text-rose-500"}`} /></span>
                </button>
                <ul className={`absolute top-[120%] w-[225px] left-0 bg-light_gray border border-[rgba(255,255,255,0.08)] bg-[#181C3B] shadow shadow-[0px 20px 30px rgba(3,6,31,0.2)] px-2 flex items-center flex-col gap-2 transition-all duration-200 ease-in-out ${isShowStatusPanel ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-4'}`}>
                    {visibilityData.map((status, index) =>
                        <li key={status.label} onClick={() => handleStatusChange(status)} className='cursor-pointer bg-transparent hover:bg-primary/10 w-full p-1'>
                            <div className='flex items-center gap-3 text-text6 font-600  w-full'>
                                <div>
                                    {status.icon}
                                </div>
                                <span className={`${index === 0 && "text-green"} ${index === 1 && "text-yellow"} ${index === 2 && "text-rose-500"}`}> {status.label}</span>
                            </div>
                            {/* <p className='text-[12px] mt-1'>{status.details}</p> */}
                        </li>
                    )}

                </ul>
            </div>
        </div>
    )
}

export default VisibilitySetting