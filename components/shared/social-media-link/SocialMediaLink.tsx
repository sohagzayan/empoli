import React from 'react';

const SocialMediaLink = () => {
  return (
    <div className="py-2">
      <ul className="flex items-center gap-2">
        <li className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-white text-white">
          <i className="ri-facebook-line cursor-pointer text-[20px]"></i>
        </li>
        <li className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-white text-white">
          <i className="ri-twitter-fill cursor-pointer text-[20px]"></i>
        </li>
        <li className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-white text-white">
          <i className="ri-instagram-fill cursor-pointer text-[20px]"></i>
        </li>
        <li className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-white text-white">
          <i className="ri-pinterest-fill cursor-pointer text-[20px]"></i>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaLink;
