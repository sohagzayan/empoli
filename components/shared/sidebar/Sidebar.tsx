'use client';
import { sidebarItems } from '@/constants/sidebaritems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const menuItems = [
  { id: 1, label: 'Home', icon: <RiDeleteBin6Line />, link: '/' },
  { id: 2, label: 'Manage Posts', icon: <RiDeleteBin6Line />, link: '/posts' },
  { id: 3, label: 'Manage Users', icon: <RiDeleteBin6Line />, link: '/users' },
  {
    id: 4,
    label: 'Manage Tutorials',
    icon: <RiDeleteBin6Line />,
    link: '/tutorials',
  },
];

const Sidebar = ({ dashboardSidebar, setDashboardSidebar }: any) => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const pathName = usePathname();
  const SidebarItems = sidebarItems('recruiter');

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === pathName),
    [pathName],
  );

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className="relative w-[280px]"
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: 'width 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
    >
      <div className="border-primary border-r p-5">
        <div className="flex flex-col gap-4">
          {SidebarItems.map((list, index) => (
            <ul key={list.key + index}>
              <li className="w-full">
                <Link
                  href={list.key}
                  className={`hover:text-primary inline-block w-full rounded-[8px] transition-all duration-200 ease-in-out hover:bg-[rgba(25,103,210,.1)] ${list.key === pathName ? 'text-primary bg-[rgba(25,103,210,.1)]' : 'bg-transparent text-gray-500'}`}
                >
                  <div className="flex items-center rounded-[8px] px-[25px] py-[10px] text-[14px] font-light capitalize">
                    <span className="mr-[15px] text-[22px]">{list.icon}</span>
                    {list.label}
                  </div>
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
