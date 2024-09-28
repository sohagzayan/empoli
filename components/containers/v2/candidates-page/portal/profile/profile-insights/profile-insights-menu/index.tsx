import { BookOpenCheck, FolderHeart, History, StickyNote, UserRoundPlus } from 'lucide-react';
import React from 'react';
import { MdOutlineRecommend } from 'react-icons/md';
import { motion } from 'framer-motion';
import { FiEdit } from 'react-icons/fi';

interface SideProfileContentType {
    activeInsightsTab: number;
    setActiveInsightsTab: React.Dispatch<React.SetStateAction<number>>;
}

const tabData = [
    { id: 1, name: "Edit", icon: <FiEdit size={18} /> },
    { id: 2, name: "Note", icon: <StickyNote size={18} /> },
    { id: 3, name: "Tests", icon: <BookOpenCheck size={18} /> },
    // { id: 4, name: "Saved Jobs", icon: <FolderHeart size={18} /> },
    { id: 4, name: "Resume", icon: <UserRoundPlus size={18} /> },
    { id: 5, name: "Recommend", icon: <MdOutlineRecommend size={18} /> },
    { id: 6, name: "History", icon: <History size={18} /> },
];

const ProfileInsightsMenu = ({ activeInsightsTab, setActiveInsightsTab }: SideProfileContentType) => {

    const handleChangeTab = (id: number) => setActiveInsightsTab(id);

    return (
        <div className='flex flex-col md:flex-row md:justify-end gap-2'>
            {tabData?.map((tab) => (
                <motion.div
                    key={tab.id}
                    whileHover={{ scale: 1.1, rotate: 2 }} // Unique hover effect with slight rotation
                    whileTap={{ scale: 0.95 }}
                    className='w-full md:w-auto'
                    animate={{
                        y: tab.id === activeInsightsTab ? [0, -2, 0] : 0, // Adds bounce effect for active tab
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <button
                        onClick={() => handleChangeTab(tab.id)}
                        className={`flex items-center gap-2 py-3 px-6 text-[16px] font-medium w-full md:w-auto rounded-lg transition-all duration-300 
                        ${tab.id === activeInsightsTab ? 'bg-[rgba(255,255,255,0.06)] text-theme1    shadow-lg' : 'bg-transparent text-gray-300'} 
                        hover:bg-[rgba(255,255,255,0.06)] hover:text-theme1 ease-in-out`}
                    >
                        {tab?.icon} {tab?.name}
                    </button>
                    {tab.id === activeInsightsTab && (
                        <motion.div
                            layoutId="underline"
                            className="h-[3px] w-full md:w-[100%] bg-secondary rounded-full mt-2"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.4 }}
                        />
                    )}
                </motion.div>
            ))}
        </div>
    );
}


export default ProfileInsightsMenu;
