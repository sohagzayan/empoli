'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBell, FaLock } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { MdOutlinePrivacyTip } from 'react-icons/md';

const tabData = [
  {
    id: 1,
    name: 'General',
    path: '/settings',
    icon: <FiEdit size={18} />, // Edit or settings related
  },
  {
    id: 2,
    name: 'Password',
    path: '/settings/password',
    icon: <FaLock size={18} />, // Lock icon for password
  },
  {
    id: 3,
    name: 'Two-Factor Authentication',
    path: '/settings/two_factor',
    icon: <IoShieldCheckmarkOutline size={18} />, // Shield for authentication/security
  },
  {
    id: 4,
    name: 'Notification',
    path: '/settings/notification',
    icon: <FaBell size={18} />, // Bell for notifications
  },
  {
    id: 5,
    name: 'Privacy',
    path: '/settings/privacy',
    icon: <MdOutlinePrivacyTip size={18} />, // Privacy related icon
  },
];

const SettingsMenu = () => {
  const activePath = usePathname();

  return (
    <div
      style={{
        borderColor: 'rgba(255, 255, 255, 0.14)',
        backdropFilter: 'blur(30px)',
        boxShadow: '0px 20px 50px rgba(1, 5, 43, 0.2)',
      }}
      className="flex flex-col border"
    >
      {tabData.map((tab) => (
        <motion.div
          key={tab.id}
          whileHover={{
            rotateY: 15, // "Open door" effect on hover
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)', // Enhancing shadow on hover
            backgroundColor: 'rgba(255, 255, 255, 0.08)', // Slight background color change
          }}
          whileTap={{ rotateY: 0 }} // Returning back when tapped
          style={{
            borderColor: 'rgba(255, 255, 255, 0.14)',
            backdropFilter: 'blur(30px)',
            boxShadow: '0px 20px 50px rgba(1, 5, 43, 0.2)',
            transformOrigin: 'left center', // Open from the left side
          }}
          className="w-full border-b"
        >
          <Link href={tab.path}>
            <button
              className={`flex w-full items-center gap-2 px-6 py-3 text-[16px] font-medium transition-all duration-300 ${
                activePath === tab.path
                  ? 'bg-[rgba(255,255,255,0.06)] text-theme1 shadow-lg'
                  : 'bg-transparent text-gray-300'
              } ease-in-out hover:text-theme1`}
              style={{
                width: '100%',
              }}
            >
              {tab.icon} {tab.name}
            </button>
          </Link>
          {activePath === tab.path && (
            <motion.div
              layoutId="underline"
              className="bg-secondary mt-0 h-[3px] w-full rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default SettingsMenu;
