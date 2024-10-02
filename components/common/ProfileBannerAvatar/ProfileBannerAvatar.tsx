import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { IoIosCamera } from 'react-icons/io';

const ProfileBannerAvatar = () => {
  return (
    <div className="m w-full p-0">
      {/* Profile Cover Section */}
      <div className="relative">
        <div className="h-36 w-full bg-cover bg-center">
          <img
            src="/assets/users/cover.jpg"
            alt="Profile Cover"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute left-4 top-[70%]">
          <input id="profile-cover-input" className="hidden" type="file" />
          <label
            htmlFor="profile-cover-input"
            className="flex h-8 w-8 cursor-pointer items-center rounded-full bg-blue-500 p-2 text-white hover:bg-blue-700"
          >
            <FiEdit />
          </label>
        </div>
      </div>

      {/* Profile Thumbnail Section */}
      <div className="-mt-10 flex justify-center">
        <div className="relative">
          <img
            src="/assets/users/avater.jpg"
            alt="Profile Thumbnail"
            className="h-24 w-24 rounded-full border-4 border-white object-cover"
          />
          <div className="absolute bottom-0 right-0">
            <input id="profile-thumb-input" className="hidden" type="file" />
            <label
              htmlFor="profile-thumb-input"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-500 p-2 text-white hover:bg-blue-700"
            >
              <IoIosCamera />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBannerAvatar;
