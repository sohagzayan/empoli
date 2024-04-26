'use client'
import { sidebarItems } from "@/constants/sidebaritems";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useMemo } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";



const menuItems = [
    { id: 1, label: "Home", icon: <RiDeleteBin6Line />, link: "/" },
    { id: 2, label: "Manage Posts", icon: <RiDeleteBin6Line />, link: "/posts" },
    { id: 3, label: "Manage Users", icon: <RiDeleteBin6Line />, link: "/users" },
    { id: 4, label: "Manage Tutorials", icon: <RiDeleteBin6Line />, link: "/tutorials" },
];

const Sidebar = ({ dashboardSidebar, setDashboardSidebar }: any) => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);
    const pathName = usePathname();
    const SidebarItems = sidebarItems("recruiter");

    const activeMenu = useMemo(
        () => menuItems.find((menu) => menu.link === pathName),
        [pathName]
    );


    const onMouseOver = () => {
        setIsCollapsible(!isCollapsible);
    };

    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };

    return (
        <div
            className='w-[280px] relative'
            onMouseEnter={onMouseOver}
            onMouseLeave={onMouseOver}
            style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
        >
            <div className="border-r p-5 border-primary">
                <div className="flex flex-col gap-4">
                    {SidebarItems.map((list, index) => <ul key={list.key + index}>
                        <li className="w-full ">
                            <Link href={list.key} className={` hover:text-primary transition-all ease-in-out duration-200  hover:bg-[rgba(25,103,210,.1)] rounded-[8px] w-full inline-block ${list.key === pathName ? 'bg-[rgba(25,103,210,.1)] text-primary' : 'bg-transparent text-gray-500'}`}>
                                <div className="py-[10px] px-[25px]  flex items-center text-[14px] font-light capitalize rounded-[8px]  ">
                                    <span className=" mr-[15px] text-[22px]">{list.icon}</span>
                                    {list.label}
                                </div>
                            </Link>
                        </li>
                    </ul>)}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
