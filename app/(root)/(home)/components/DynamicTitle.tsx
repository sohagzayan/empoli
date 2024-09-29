'use client';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const dynamicValues = [
  "Discover What's Next!",
  'Find Your Dream Role!',
  'Step Into Your Future!',
  'Achieve Career Goals!',
];

const variants = {
  enter: {
    opacity: 0,
    y: -20,
  },
  center: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 20,
  },
};

const DynamicTitle: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % dynamicValues.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', color: '#fff' }}>
      <h1 className="mb-2 text-[60px] leading-10 text-white">
        Dream Job{' '}
        <span className="relative">
          Awaits!
          <div className="absolute bottom-0 left-0 w-full">
            <img src="/assets/images/slider-stoke-shape.svg" alt="stroke" />
          </div>
        </span>
      </h1>
      <AnimatePresence mode="wait">
        <motion.h2
          className="text-[60px] tracking-tight text-white"
          key={index}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          {dynamicValues[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export default DynamicTitle;
