'use client';
import ClosedToOffers from '@/components/icons/closed-to-offers/ClosedToOffers';
import OpenToOffers from '@/components/icons/open-to-offers/OpenToOffers';
import ReadyToInterview from '@/components/icons/ready-to-interview/ReadyToInterview';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

let visibilityData = [
  {
    id: 1,
    label: 'Ready to interview',
    icon: <ReadyToInterview />,
    details:
      'You’re actively looking for new work and ready to interview. Your job profile will be visible to startups.',
  },
  {
    id: 2,
    label: 'Open to offers',
    icon: <OpenToOffers />,
    details:
      'You’re not looking but open to hear about new opportunities. Your job profile will be visible to startups.',
  },
  {
    id: 3,
    label: 'Closed to offers',
    icon: <ClosedToOffers />,
    details:
      'You’re not looking and don’t want to hear about new opportunities. Your job profile will be hidden to startups.',
  },
];

const VisibilitySetting = () => {
  const [activeStatus, setActiveStatus] = useState(visibilityData[0]);
  const [isShowStatusPanel, setIsShowStatusPanel] = useState(false);
  const modalRef = useRef<any>(null);

  const handleStatusChange = (status: any) => {
    setActiveStatus(status);
    setIsShowStatusPanel(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsShowStatusPanel(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isShowStatusPanel]);

  return (
    <div>
      <div ref={modalRef} className="relative">
        <button
          onClick={() => setIsShowStatusPanel((prev) => !prev)}
          className="bg-light_gray border-gray_light_400 text-blue-midnight_blue hover:bg-light_gray/80 hover:border-primary flex w-auto cursor-pointer items-center gap-x-2 whitespace-nowrap rounded border border-[rgba(255,255,255,0.14)] bg-themeDark px-4 py-2 text-center text-sm font-medium no-underline antialiased transition duration-200 focus:outline-0 disabled:pointer-events-none disabled:cursor-default disabled:border-gray-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:opacity-50"
        >
          <span className="">{activeStatus.icon}</span>
          <span
            className={`${activeStatus?.id === 1 && 'text-green'} ${activeStatus?.id === 2 && 'text-yellow'} ${activeStatus?.id === 3 && 'text-rose-500'}`}
          >
            {activeStatus.label}
          </span>
          <span className="ml-auto">
            <IoIosArrowDown
              className={`${activeStatus?.id === 1 && 'text-green'} ${activeStatus?.id === 2 && 'text-yellow'} ${activeStatus?.id === 3 && 'text-rose-500'}`}
            />
          </span>
        </button>
        <ul
          className={`bg-light_gray shadow-[0px 20px 30px rgba(3,6,31,0.2)] absolute left-0 top-[120%] flex w-[225px] flex-col items-center gap-2 border border-[rgba(255,255,255,0.08)] bg-[#181C3B] px-2 shadow transition-all duration-200 ease-in-out ${isShowStatusPanel ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-4 opacity-0'}`}
        >
          {visibilityData.map((status, index) => (
            <li
              key={status.label}
              onClick={() => handleStatusChange(status)}
              className="hover:bg-primary/10 w-full cursor-pointer bg-transparent p-1"
            >
              <div className="flex w-full items-center gap-3 font-600 text-text6">
                <div>{status.icon}</div>
                <span
                  className={`${index === 0 && 'text-green'} ${index === 1 && 'text-yellow'} ${index === 2 && 'text-rose-500'}`}
                >
                  {' '}
                  {status.label}
                </span>
              </div>
              {/* <p className='text-[12px] mt-1'>{status.details}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VisibilitySetting;
