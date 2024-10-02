'use client';
import { usePathname, useRouter } from 'next/navigation';

const ProfileTab = () => {
  const pathname = usePathname();
  const router = useRouter();
  console.log('pathname', pathname);
  return (
    <div>
      <div>
        <h1 className="mb-6 text-3xl font-medium">
          Edit your Wellfound profile
        </h1>
        <div className="flex items-center justify-between border-b border-gray-100">
          <ul className="flex items-center gap-4">
            <li
              onClick={() => router.push('/profile/edit/overview')}
              className={`cursor-pointer border-b-2 pb-3 font-medium transition-all duration-150 ease-out ${pathname === '/profile/edit/overview' ? 'border-blue-midnight_blue text-blue-midnight_blue' : 'text-blue-midnight_blue/80 hover:border-light_gray border-transparent'}`}
            >
              Overview
            </li>
            <li
              onClick={() => router.push('/profile/edit')}
              className={`cursor-pointer border-b-2 pb-3 font-medium transition-all duration-150 ease-out ${pathname === '/profile/edit' ? 'border-blue-midnight_blue text-blue-midnight_blue' : 'text-blue-midnight_blue/80 hover:border-light_gray border-transparent'}`}
            >
              Profile
            </li>
            <li
              onClick={() => router.push('/profile/edit/resume')}
              className={`cursor-pointer border-b-2 pb-3 font-medium transition-all duration-150 ease-out ${pathname === '/profile/edit/resume' ? 'border-blue-midnight_blue text-blue-midnight_blue' : 'text-blue-midnight_blue/80 hover:border-light_gray border-transparent'}`}
            >
              Resume / CV
            </li>
            <li
              onClick={() => router.push('/profile/edit/preferences')}
              className={`cursor-pointer border-b-2 pb-3 font-medium transition-all duration-150 ease-out ${pathname === '/profile/edit/preferences' ? 'border-blue-midnight_blue text-blue-midnight_blue' : 'text-blue-midnight_blue/80 hover:border-light_gray border-transparent'}`}
            >
              Preferences
            </li>
            <li
              onClick={() => router.push('/profile/edit/culture')}
              className={`cursor-pointer border-b-2 pb-3 font-medium transition-all duration-150 ease-out ${pathname === '/profile/edit/culture' ? 'border-blue-midnight_blue text-blue-midnight_blue' : 'text-blue-midnight_blue/80 hover:border-light_gray border-transparent'}`}
            >
              Culture
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <button className="text-primary text-sm font-bold">
              Profile views
            </button>
            <button className="text-primary text-sm font-bold">
              View public profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
