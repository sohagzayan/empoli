"use client"; // Enabling client-side rendering

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMenuOutline } from 'react-icons/io5'; // Ensure react-icons is installed

const ClientSidebar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            {/* Floating Menu Icon for Mobile */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-50 bg-themeLight p-2 rounded-full shadow-lg"
            >
                <IoMenuOutline size={28} color="white" /> {/* Ensure icon size and color */}
            </button>

            {/* Sidebar for Large Screens (Always Visible) */}
            <aside className="hidden lg:block w-64 bg-themeLight text-white h-full fixed z-20">
                <div className="p-4">
                    <h1 className="text-xl font-semibold">Dashboard</h1>
                    <nav className="mt-4">
                        <ul>
                            <li><a href="#" className="block py-2">Home</a></li>
                            <li><a href="#" className="block py-2">Profile</a></li>
                            <li><a href="#" className="block py-2">Settings</a></li>
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* Sidebar with Animation for Mobile */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.aside
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed lg:hidden w-64 bg-themeLight text-white h-full z-50"
                    >
                        <div className="p-4">
                            <h1 className="text-xl font-semibold">Dashboard</h1>
                            <nav className="mt-4">
                                <ul>
                                    <li><a href="#" className="block py-2">Home</a></li>
                                    <li><a href="#" className="block py-2">Profile</a></li>
                                    <li><a href="#" className="block py-2">Settings</a></li>
                                </ul>
                            </nav>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ClientSidebar;
