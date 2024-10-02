import { Facebook, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const ShareThisJobOnSocial = () => {
  return (
    <div className="my-10 flex items-center">
      <h3 className="mr-4 font-medium">Share this job</h3>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 rounded-[8px] bg-[#3b5998] px-[25px] py-[10px] text-[14px] font-medium text-white">
          <Facebook size={20} />
          Facebook
        </button>
        <button className="flex items-center gap-1 rounded-[8px] bg-[#55acee] px-[25px] py-[10px] text-[14px] font-medium text-white">
          <Twitter size={20} />
          Twitter
        </button>
        <button className="flex items-center gap-1 rounded-[8px] bg-[#007bb5] px-[25px] py-[10px] text-[14px] font-medium text-white">
          <Linkedin size={20} />
          Linkedin
        </button>
      </div>
    </div>
  );
};

export default ShareThisJobOnSocial;
