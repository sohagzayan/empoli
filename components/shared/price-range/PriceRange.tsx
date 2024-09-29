import React, { useState } from 'react';

const PriceRange = () => {
  const [price, setPrice] = useState(100);
  console.log(price);
  return (
    <div className="relative mb-6 w-full">
      <label htmlFor="labels-range-input" className="sr-only">
        Labels range
      </label>
      <input
        id="labels-range-input"
        type="range"
        value={price}
        onChange={(e: any) => setPrice(e.target.value)}
        min="100"
        max="1500"
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
      />
      <span className="absolute -bottom-6 start-0 text-sm text-gray-500 dark:text-gray-400">
        Min ($100)
      </span>
      <span className="absolute -bottom-6 start-1/3 -translate-x-1/2 text-sm text-gray-500 dark:text-gray-400 rtl:translate-x-1/2">
        $500
      </span>
      <span className="absolute -bottom-6 start-2/3 -translate-x-1/2 text-sm text-gray-500 dark:text-gray-400 rtl:translate-x-1/2">
        $1000
      </span>
      <span className="absolute -bottom-6 end-0 text-sm text-gray-500 dark:text-gray-400">
        Max ($1500)
      </span>
    </div>
  );
};

export default PriceRange;
