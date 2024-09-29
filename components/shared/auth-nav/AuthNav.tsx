'use client';
import { useRouter } from 'next/navigation';

const AuthNav = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0 mx-auto mt-0 w-full px-8 py-3 sm:px-6 lg:px-8">
      <div className="">
        <nav className="relative flex items-center justify-between">
          <div>
            {/* <Image src="/assets/images/logo.png" width={100} height={100} alt='logo' /> */}
            <div
              onClick={() => router.push('/')}
              className="text-primary flex cursor-pointer items-center font-bold"
            >
              <div className="bg-primary text-secondary flex h-[30px] w-[30px] items-center justify-center rounded-full font-bold">
                J
              </div>
              obber
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AuthNav;
