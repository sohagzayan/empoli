'use client';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';

const messages = [
  'Remote Jobs',
  'Tech Careers',
  'Full-Time Openings',
  'Entry-Level Opportunities',
  'Apply for Internships',
  'Freelance Positions',
  'Software Developer Roles',
  'Work from Home Jobs',
  'Part-Time Vacancies',
  'Project Manager Jobs',
];

const Marquee = () => {
  const controls = useAnimation();
  const [currentX, setCurrentX] = useState<any>(0);

  const startScrollingLeft = (fromX: any) => {
    controls.start({
      x: [fromX, '-100%'],
      transition: {
        duration: 50,
        repeat: Infinity,
        ease: 'linear',
      },
    });
  };

  const startScrollingRight = (fromX: any) => {
    controls.start({
      x: [fromX, '0%'],
      transition: {
        duration: 50,
        repeat: Infinity,
        ease: 'linear',
      },
    });
  };

  useEffect(() => {
    startScrollingLeft('0%');
  }, []);

  const handleMouseEnter = () => {
    controls.stop();
    startScrollingRight(currentX);
  };

  const handleMouseLeave = () => {
    controls.stop();
    startScrollingLeft(currentX);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left overlay */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-themeDark to-transparent" />
      {/* Right overlay */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-themeDark to-transparent" />

      <div
        className="flex w-full items-center overflow-hidden whitespace-nowrap bg-themeDark py-3 text-sm"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex"
          animate={controls}
          style={{ minWidth: '200%' }}
          onUpdate={(latest) => setCurrentX(latest.x)}
        >
          {messages.map((msg, index) => (
            <span
              key={index}
              className="mr-10 inline-block font-bold text-text6"
            >
              {msg}
            </span>
          ))}

          {messages.map((msg, index) => (
            <span
              key={index + messages.length}
              className="mr-10 inline-block font-bold text-text6"
            >
              {msg}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
