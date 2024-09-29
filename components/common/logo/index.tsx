import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-1 text-[1.5rem] font-extrabold text-white">
        <span className="-mx-2 px-0 text-theme1">Job</span>
        <sup>Joy.</sup>
      </div>
    </Link>
  );
};

export default Logo;
