'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoBookmarkOutline, IoLocationOutline } from 'react-icons/io5';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { TiStar } from 'react-icons/ti';

interface FeaturedJobsCartType {
  data: {
    image: string;
    job_title: string;
    company: string;
    location: string;
    posted_time: string;
    salary_range: string;
    employment_type: string;
    visibility: string;
    urgency: string;
  };
}

const JobCard = ({ data }: any) => {
  const router = useRouter();

  const requiredSkillList = [
    'HTML',
    'CSS',
    'JavaScript',
    'Responsive Design',
    'Node Js',
  ];

  console.log('data> >>> >', data);

  const calculateDaysLeftApplication = (targetDateString: any) => {
    const today = new Date();
    const targetDate = new Date(targetDateString);
    const difference = targetDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return daysLeft;
  };

  const calculateTimeAgo = (dateString: string): string => {
    const currentDate = new Date();
    const pastDate = new Date(dateString);
    const timeDifference = currentDate.getTime() - pastDate.getTime(); // Explicitly casting to number
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return `${years} year${years === 1 ? '' : 's'} ago`;
    } else if (months > 0) {
      return `${months} month${months === 1 ? '' : 's'} ago`;
    } else if (weeks > 0) {
      return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
    } else if (days > 0) {
      return `${days} day${days === 1 ? '' : 's'} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else {
      return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
    }
  };

  return (
    <div className="shadow-gray_light_400 group relative h-fit overflow-hidden rounded-md bg-white shadow transition-all duration-500 hover:-mt-2 hover:shadow-md">
      <div className="w-full p-6">
        <div className="flex items-center">
          <div className="flex h-14 w-14 min-w-[56px] items-center justify-center rounded-md bg-white shadow dark:bg-slate-900 dark:shadow-gray-700">
            <Image
              loading="lazy"
              src={'/assets/images/company-logo.webp'}
              alt="profile"
              width={32}
              height={32}
              className=""
            />
          </div>
          <div className="ms-3">
            <button
              onClick={() => router.push(`/jobs/detail/${data?.id}`)}
              className="hover:text-primary me-1 inline-block text-[16px] font-semibold transition-all duration-500"
            >
              Facebook
            </button>
            <span className="inline-block text-sm text-slate-400">
              2 days ago
            </span>
            <div>
              <span className="bg-primary/10 text-primary me-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize">
                {data?.job_type}
              </span>
              <span className="me-1 inline-block text-sm font-medium">
                Est. time:
                <span className="text-slate-400"> 1 to 3 months</span>
              </span>
              <span className="me-1 inline-block text-sm font-medium">
                Monthly:
                <span className="text-slate-400">
                  {' '}
                  ${data.salary_range_min} - ${data.salary_range_max}
                </span>
              </span>
            </div>
          </div>
        </div>
        <p className="py-3 text-slate-400">{data?.job_title}</p>
        <div>
          {data?.required_skills.map((skill: any) => (
            <span
              key={skill}
              className="me-1 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="items-center justify-between bg-slate-50 px-6 py-2 dark:bg-slate-800 lg:flex">
        <div className="flex w-full justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className="me-1 flex items-center gap-1 text-[14px] font-semibold">
              <RiVerifiedBadgeFill className="text-primary" size={16} />
              Verified
            </span>
            <ul className="text-yellow-400 me-1 flex list-none items-center">
              <li>
                <TiStar />
              </li>
              <li>
                <TiStar />
              </li>
              <li>
                <TiStar />
              </li>
              <li>
                <TiStar />
              </li>
              <li>
                <TiStar />
              </li>
            </ul>
            <span className="text-blue-steel_blue me-1 flex items-center gap-1 text-[14px]">
              <IoLocationOutline
                className="text-blue-midnight_blue"
                size={16}
              />
              {data?.office_location}
            </span>
          </div>
          <button className="btn btn-sm mt-4 w-full rounded-md border-emerald-600 bg-emerald-600 px-3 py-1 text-white hover:border-emerald-700 hover:bg-emerald-700 md:ms-2 lg:mt-0 lg:w-auto">
            Apply Now
          </button>
        </div>
      </div>

      <button className="btn btn-icon hover:bg-primary border-primary/10 hover:border-primary text-primary bg-primary/10 absolute end-0 top-0 m-3 flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full transition-all duration-200 ease-in-out hover:text-white">
        <IoBookmarkOutline size={20} strokeWidth={1} />
      </button>
    </div>
  );
};

export default JobCard;
