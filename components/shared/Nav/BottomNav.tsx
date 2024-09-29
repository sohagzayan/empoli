'use client';
import navItems from '@/constants/nav-items';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { AiOutlineNotification } from 'react-icons/ai';
import { GoHome } from 'react-icons/go';
import { TbMessages } from 'react-icons/tb';

type BottomNavProps = {};

const BottomNav: React.FC<BottomNavProps> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentUser = pathname.split('/')[1];
  const items = navItems(currentUser); // Get the nav items dynamically based on role

  const handleClick = (key: string) => {
    router.push(key); // Navigate to the selected menu item
  };

  // Framer Motion Variants for smoother animations
  const containerVariants = {
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1, // Delay between each item
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 block bg-themeDark p-4 shadow-lg lg:hidden">
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
        <div className="flex items-center justify-center gap-6">
          <h3 className="bg-bgSecondary flex h-10 w-10 items-center justify-center rounded-full font-bold text-white">
            <GoHome size={22} />
          </h3>
          <h3 className="bg-bgSecondary flex h-10 w-10 items-center justify-center rounded-full font-bold text-white">
            <AiOutlineNotification size={22} />
          </h3>
          <h3 className="bg-bgSecondary flex h-10 w-10 items-center justify-center rounded-full font-bold text-white">
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
        <div className="custom-scrollbar font-apercu-medium text-primary flex space-x-4 overflow-x-auto py-2 text-lg">
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
                'flex-grow cursor-pointer whitespace-nowrap rounded-lg p-2 text-center text-sm transition-colors',
                {
                  'text-gray-700 hover:bg-gray-300': pathname !== item.key, // Lighter text for inactive items
                  'bg-gray-200 font-bold text-black': pathname === item.key, // Active tab style with light background
                },
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
