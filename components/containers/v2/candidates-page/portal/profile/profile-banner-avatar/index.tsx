import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { IoIosCamera } from 'react-icons/io';

const ProfileBannerAvatar = () => {
    return (
        <div className="w-full p-0  m ">
            {/* Profile Cover Section */}
            <div className="relative">
                <div className="w-full h-36 bg-cover bg-center">
                    <img
                        src="/assets/users/cover.jpg"
                        alt="Profile Cover"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute top-[70%] left-4">
                    <input
                        id="profile-cover-input"
                        className="hidden"
                        type="file"
                    />
                    <label
                        htmlFor="profile-cover-input"
                        className="cursor-pointer p-2 w-8 h-8 flex items-center items-center rounded-full bg-blue-500 text-white hover:bg-blue-700"
                    >
                        <FiEdit />
                    </label>
                </div>
            </div>

            {/* Profile Thumbnail Section */}
            <div className="flex justify-center -mt-10">
                <div className="relative">
                    <img
                        src="/assets/users/avater.jpg"
                        alt="Profile Thumbnail"
                        className="rounded-full w-24 h-24 object-cover border-4 border-white"
                    />
                    <div className="absolute bottom-0 right-0">
                        <input
                            id="profile-thumb-input"
                            className="hidden"
                            type="file"
                        />
                        <label
                            htmlFor="profile-thumb-input"
                            className="cursor-pointer p-2 w-8 h-8 flex items-center justify-center  rounded-full bg-blue-500 text-white hover:bg-blue-700"
                        >
                            <IoIosCamera />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileBannerAvatar;
