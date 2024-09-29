import { AiOutlineBell } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { BsLock } from 'react-icons/bs';
import { CiBookmark, CiPaperplane } from 'react-icons/ci';
import { FcFeedback } from 'react-icons/fc';
import { GoHome } from 'react-icons/go';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { LiaBoxOpenSolid, LiaFileInvoiceSolid, LiaUserAltSolid, LiaUserTieSolid } from 'react-icons/lia';
import { LuInbox } from 'react-icons/lu';
import {
  MdFavoriteBorder,
  MdManageAccounts
} from 'react-icons/md';
import { RiDeleteBin6Line, RiLogoutCircleRLine, RiLuggageCartFill } from 'react-icons/ri';
import { TbMessage, TbMessages } from 'react-icons/tb';


export const sidebarItems = (role: string) => {
  const defaultSidebarItems = [
    {
      label: 'My Profile',
      icon: <BiUserCircle />,
      key: `/${role}/profile`,
    },
    {
      label: 'Manage Profile',
      icon: <MdManageAccounts />,
      key: `/${role}/manage-profile`,
    },
  ];

  // common admin route
  const recruiterSidebarItems = [
    {
      label: 'Dashboard',
      icon: <GoHome />,
      key: `/dashboard`,
    },
    {
      label: 'Company Profile',
      icon: <LiaUserTieSolid />,
      key: `/${role}/company-profile`,
    },
    {
      label: 'Post a New Job',
      icon: <CiPaperplane />,
      key: `/${role}/post-a-new-job`,
    },
    {
      label: 'Manage jobs',
      icon: <IoBriefcaseOutline />,
      key: `/${role}/manage-jobs`,
    },
    {
      label: 'All Applicants',
      icon: <LiaFileInvoiceSolid />,
      key: `/${role}/all-applicants`,
    },
    {
      label: 'Shortlisted Resumes',
      icon: <CiBookmark />,
      key: `/${role}/shortlisted-resumes`,
    },
    {
      label: 'Packages',
      icon: <LiaBoxOpenSolid />,
      key: `/${role}/packages`,
    },
    {
      label: 'Messages',
      icon: <TbMessage />,
      key: `/${role}/messages`,
    },
    {
      label: 'Change Password',
      icon: <BsLock />,
      key: `/${role}/change-password`,
    },
    {
      label: 'Resume Alerts',
      icon: <AiOutlineBell />,
      key: `/${role}/resume-alerts`,
    },
    {
      label: 'Logout',
      icon: <RiLogoutCircleRLine />,
      key: `/${role}/logout`,
    },
    {
      label: 'Delete Profile',
      icon: <RiDeleteBin6Line />,
      key: `/${role}/delete-profile`,
    },
    // {
    //     label: 'Manage Content',
    //     key: 'management',
    //     icon: <BiBookContent />,
    //     children: [
    //         {
    //             label: <Link href={`/dashboard/manage-blog`}>Blog</Link>,
    //             key: `/${role}/manage-blog`,
    //         },
    //         {
    //             label: <Link href={`/dashboard/manage-faq`}>FAQ</Link>,
    //             key: `/${role}/manage-faq`,
    //         },
    //     ],
    // },
  ];

  const candidateSidebarItems = [
    {
      label: 'Dashboard',
      icon: <GoHome />,
      key: `/${role}/dashboard/`,
    },
    {
      label: 'Profile',
      icon: <LiaUserAltSolid />,
      key: `/${role}/profile/`,
    },
    // {
    //     label: 'User Preference',
    //     icon: <MdOutlinePersonalInjury />,
    //     key: `/${role}/dashboard/user_preference`,
    // },
    {
      label: 'applied',
      icon: <LuInbox />,
      key: `/${role}/applied`,
    },
    {
      label: 'favorite',
      icon: <MdFavoriteBorder />,
      key: `/${role}/favorite`,
    },
    {
      label: 'messages',
      icon: <TbMessages />,
      key: `/${role}/messages`,
    },
  ];

  // user route

  const adminSidebarItems = [
    ...defaultSidebarItems,
    {
      label: 'My Booking',
      icon: <RiLuggageCartFill />,
      key: `/dashboard/booking`,
    },
    {
      label: 'Feedback',
      icon: <FcFeedback />,
      key: `/dashboard/feedback`,
    },
  ];

  // admin route

  // const candidateSidebarItems = [
  //     ...defaultSidebarItems,
  //     ...recruiterSidebarItems,
  // ]

  // Super admin route

  // const recruiterSidebarItems = [
  //     ...defaultSidebarItems,
  //     ...recruiterSidebarItems,
  //     // {
  //     //   label: <Link href={`/dashboard/manage-admin`}>Manage Admin</Link>,
  //     //   icon: <BsPersonFillGear />,
  //     //   key: `/dashboard/manage-admin`,
  //     // },
  // ]

  if (role === 'recruiter') return recruiterSidebarItems;
  else if (role === 'candidate') return candidateSidebarItems;
  else if (role === 'admin') return adminSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
