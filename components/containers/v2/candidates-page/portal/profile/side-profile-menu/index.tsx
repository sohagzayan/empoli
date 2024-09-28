import React from 'react'
import { BsTicketDetailed } from 'react-icons/bs'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { LiaUserEditSolid } from 'react-icons/lia'
import { RiLockPasswordLine } from 'react-icons/ri'
import { GrOverview } from "react-icons/gr";
import { PiReadCvLogo } from 'react-icons/pi'


interface SideProfileContentType {
    activeProfileTab: number,
    setActiveProfileTab: React.Dispatch<React.SetStateAction<number>>
}


const tabData = [
    { id: 1, name: "Overview", icon: <GrOverview /> },
    { id: 2, name: "Profile information", icon: <LiaUserEditSolid /> },
    { id: 3, name: "Change Password", icon: <RiLockPasswordLine /> },
    { id: 4, name: "Notification", icon: <IoMdNotificationsOutline /> },
]


const SideProfileMenu = ({ activeProfileTab, setActiveProfileTab }: SideProfileContentType) => {


    const handleChangeTab = (id: number) => setActiveProfileTab(id)
    return (
        <div className='border border-[rgba(255,255,255,0.08)] flex'>
            {tabData?.map((tab, index) =>
                <div
                    key={tab.name + tab.id}
                    className=''>
                    <button
                        onClick={() => handleChangeTab(tab.id)}
                        className={`text-white flex items-center  gap-3 py-[15px] px-[30px]  text-[16px]  font-500 text-left border-b border-b-[rgba(255,255,255,0.08)] w-full hover:bg-[rgba(255,255,255,0.08)] transition-all ease-in-out duration-300 
                ${tab.id === activeProfileTab ? 'bg-[rgba(255,255,255,0.08)]' : 'bg-transparent'}`}>
                        {tab?.icon} {tab?.name}
                    </button>
                </div>
            )}
        </div>
    )
}

export default SideProfileMenu