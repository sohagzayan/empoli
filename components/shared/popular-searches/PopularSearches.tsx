'use client';
import { useState } from 'react';

const PopularSearches = () => {
  const [keywords, setKeywords] = useState([
    'Designer',
    'Developer',
    'Web',
    'IOS',
    'Php',
    'Senior',
    'Engineer',
  ]);
  return (
    <div className="py-4">
      <div className="flex items-center">
        <span className="text-[14px] text-textBody">Popular Searches : </span>
        <div className="ml-2 flex items-center gap-2 text-white">
          {keywords.map((k, i) => (
            <span className="text-[13px] text-white" key={k + i}>
              {k},
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSearches;
