import React from 'react';

const JobSkills = () => {
  return (
    <div className="mt-5">
      <div>
        <h3>Job Skills</h3>
        <ul className="mt-2 flex flex-wrap gap-3">
          <li className="bg-primary-50 inline-block rounded-md px-2 py-1 text-[13px]">
            app
          </li>
          <li className="bg-primary-50 inline-block rounded-md px-2 py-1 text-[13px]">
            administrative
          </li>
          <li className="bg-primary-50 inline-block rounded-md px-2 py-1 text-[13px]">
            android
          </li>
          <li className="bg-primary-50 inline-block rounded-md px-2 py-1 text-[13px]">
            wordpress
          </li>
          <li className="bg-primary-50 inline-block rounded-md px-2 py-1 text-[13px]">
            design
          </li>
          <li className="bg-primary-50 inline-block rounded-md px-2 py-1 text-[13px]">
            react
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobSkills;
