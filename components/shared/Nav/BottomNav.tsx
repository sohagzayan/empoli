"use client";
import { motion } from "framer-motion";
import React from "react";
import navItems from "@/constants/nav-items";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
import { GoHome } from "react-icons/go";
import { AiOutlineNotification } from "react-icons/ai";
import { TbMessages } from "react-icons/tb";

type BottomNavProps = {};

const BottomNav: React.FC<BottomNavProps> = () => {
    const router = useRouter();
    const pathname = usePathname();
    const currentUser = pathname.split("/")[1];
    const items = navItems(currentUser); // Get the nav items dynamically based on role

    const handleClick = (key: string) => {
        router.push(key); // Navigate to the selected menu item
    };

    // Framer Motion Variants for smoother animations
    const containerVariants = {
        visible: {
            height: "auto",
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1, // Delay between each item
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-themeDark p-4 z-50 shadow-lg block lg:hidden">
            <style jsx>{`
                /* Hide scrollbar for WebKit browsers */
                .custom-scrollbar::-webkit-scrollbar {
                    display: none;
                }

                /* Hide scrollbar for Firefox */
                .custom-scrollbar {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
            `}</style>

            <div className="">
                <div className="flex items-center justify-center gap-6 ">
                    <h3 className="  font-bold w-10 h-10 rounded-full flex items-center justify-center text-white bg-bgSecondary ">
                        <GoHome size={22} />
                    </h3>
                    <h3 className=" font-bold w-10 h-10 rounded-full flex items-center justify-center text-white bg-bgSecondary ">
                        <AiOutlineNotification size={22} />
                    </h3>
                    <h3 className=" font-bold w-10 h-10 rounded-full flex items-center justify-center text-white bg-bgSecondary ">
                        <TbMessages size={22} />
                    </h3>
                    {/* <h3 className="text-gray-900 text-lg font-apercu-bold">JobJoy.</h3> */}
                </div>
            </div>

            {/* Full-width Sliding Menu (always visible) */}
            <motion.nav
                initial="visible"
                animate="visible"
                variants={containerVariants}
                className="overflow-hidden"
            >
                <div className="flex overflow-x-auto space-x-4 custom-scrollbar py-2 font-apercu-medium text-lg text-primary">
                    {items.map((item) => (
                        <motion.div
                            key={item.key}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.1, // Only scale using Framer Motion
                            }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className={classNames(
                                "p-2 rounded-lg cursor-pointer text-sm whitespace-nowrap flex-grow text-center transition-colors",
                                {
                                    "text-gray-700 hover:bg-gray-300": pathname !== item.key, // Lighter text for inactive items
                                    "bg-gray-200 text-black font-bold": pathname === item.key, // Active tab style with light background
                                }
                            )}
                            onClick={() => handleClick(item.key)}
                        >
                            {item.label}
                        </motion.div>
                    ))}
                </div>
            </motion.nav>
        </div>
    );
};

export default BottomNav;
