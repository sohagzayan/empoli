'use client';
import { Button } from '@/components/common';
import Footer from '@/components/shared/footer/Footer';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ResetPassword = () => {
  const router = useRouter();
  return (
    <div className="bg-themeDark pt-10">
      <div className="mx-auto w-[90%] rounded-[30px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-6 md:w-[500px] lg:w-[600px]">
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center">
            <Image
              src={'/assets/icons/email.png'}
              width={100}
              height={50}
              alt="email"
            />
          </div>
          <h3 className="text-[20px] font-600 text-white">Forgot Password</h3>
          <p className="my-2 text-center text-[14px] font-light text-text6">
            Please enter your e-mail address. You will receive an e-mail along
            with a link which can be used to reset your password.
          </p>
          <div className="text-left">
            <label htmlFor="email" className="bg- mb-1 font-600 text-white">
              Email
            </label>
            <Input
              type="email"
              placeholder="Your Email"
              className="no-ring-shadow focus:ring-primary rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.1)] p-2 text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-transparent"
            />
          </div>
          <div className="flex items-center justify-end gap-2">
            <Button
              onClick={() => router.back()}
              className="mt-4 bg-theme1 font-600 text-white"
              text="Cancel"
            />
            <Button
              variant="secondary"
              className="mt-4 bg-theme1 font-600 text-white"
              text="Reset Password"
            />
          </div>
          <p className="my-2 text-[14px] text-text6">
            I am not receiving password reset email. Need{' '}
            <Link href="/g" className="text-primary">
              help?
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
