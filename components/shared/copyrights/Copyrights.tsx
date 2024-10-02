import React from 'react';

const Copyrights = () => {
  return (
    <div className="border-t border-t-[rgba(255,255,255,0.08)] bg-themeDark py-5">
      <div className="container lg:px-16 xl:px-20">
        <div className="flex flex-col items-center justify-between text-white md:flex-row">
          <div>© Copyrights 2023. All rights reserved.</div>
          <div>
            Joomla Version by{' '}
            <span className="underline">Windstripe Themes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyrights;
