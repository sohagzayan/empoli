'use client';

import { InputField } from '@/components/common';
import { BreadcrumbPath } from '@/components/common/BreadcrumbPath/BreadcrumbPath';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

const GeneralWrapper = () => {
  return (
    <div
      style={{
        borderColor: 'rgba(255, 255, 255, 0.14)',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(30px)',
        boxShadow: '0px 20px 50px rgba(1, 5, 43, 0.2)',
      }}
      className="border text-white"
    >
      <div>
        <div
          style={{
            borderColor: 'rgba(255, 255, 255, 0.14)',
          }}
          className="mb-6 border-b px-4 py-4"
        >
          <BreadcrumbPath />
        </div>
        <div className="">
          <form action="" className="">
            <div className="mx-auto w-[80%]">
              <div className="mb-6 flex items-center gap-3">
                <Label className="text-md w-1/4">Name</Label>{' '}
                {/* Set a fixed width */}
                <InputField
                  placeholder=""
                  className="w-3/4 rounded-lg py-2"
                />{' '}
                {/* Adjust width */}
              </div>
              <div className="mb-2 flex items-center gap-3">
                <Label className="text-md w-1/4">Email</Label>{' '}
                {/* Set a fixed width */}
                <InputField
                  type="email"
                  placeholder=""
                  className="w-3/4 rounded-lg py-2"
                />
              </div>

              <div className="mb-6 flex justify-end gap-3">
                <div className="w-1/4"></div> {/* Empty div for alignment */}
                <button className="w-3/4 text-left text-sm text-theme1">
                  1 email address associated with this account {'>>'}
                </button>
              </div>

              <div className="mb-2 flex items-center gap-3">
                <Label className="text-md w-1/4">Username</Label>{' '}
                {/* Set a fixed width */}
                <InputField placeholder="" className="w-3/4 rounded-lg py-2" />
              </div>
              <div className="mb-2 flex items-center">
                <Label className="text-md w-1/4">Photo</Label>{' '}
                {/* Set a fixed width */}
                <div className="flex w-3/4 items-start gap-4 rounded-lg py-2">
                  <Image
                    src={'/assets/images/profile.webp'}
                    width={60}
                    height={60}
                    alt="profile"
                    className="rounded-md shadow"
                  />
                  <button className="rounded-sm bg-[#dce2e7] px-3 py-1 font-semibold text-black5">
                    Change
                  </button>
                </div>
              </div>
            </div>
            <hr
              style={{
                borderColor: 'rgba(255, 255, 255, 0.14)',
              }}
              className="my-8"
            />
            <div className="mx-auto w-[80%]">
              <p className="mb-3 ml-3 text-center text-sm text-text6">
                To save your changes, please enter your password.{' '}
              </p>
              <div className="mb-2 flex items-center gap-3">
                <Label className="text-md w-1/4 text-nowrap">
                  Current Password
                </Label>{' '}
                {/* Set a fixed width */}
                <InputField
                  type="email"
                  placeholder=""
                  className="w-3/4 rounded-lg py-2"
                />
              </div>
              <div className="flex items-center justify-center">
                <button className="mb-2 text-sm text-text2 hover:underline">
                  Forgot Password?
                </button>
                {/* <button className="text-sm">
                  Send Password Reset (sohag.zayan@gmail.com)
                </button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeneralWrapper;
