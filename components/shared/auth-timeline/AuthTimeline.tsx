import React from 'react';
import { motion } from 'framer-motion';

const JobJoyTimeline: React.FC = () => {
    // Milestones data directly in the component
    const milestones = [
        {
            date: 'January 2024',
            title: 'Job Portal UI in Tailwind CSS',
            description:
                'Designed the JobJoy UI with responsive components, job listings, and user profile pages using Tailwind CSS.',
            link: '#',
        },
        {
            date: 'March 2024',
            title: 'Job Matching Algorithm',
            description:
                'Implemented a job matching algorithm to recommend relevant job opportunities to users based on their profile and preferences.',
        },
        {
            date: 'May 2024',
            title: 'Advanced Job Posting Features',
            description:
                'Released advanced job posting features, allowing employers to filter candidates by skills, experience, and location.',
        },
    ];

    // Animation for the timeline dot
    const pulseAnimation = {
        scale: [1, 1.3, 1],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop' as const,
            ease: 'easeInOut' as const,
        },
    };

    // Variants for text reveal animation
    const textRevealVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3, // Delay each item for a staggered reveal effect
                duration: 0.5,
                ease: 'easeInOut',
            },
        }),
    };

    return (
        <ol className="relative border-s border-gray-200 dark:border-gray-700 text-primary ">
            {milestones.map((milestone, index) => (
                <motion.li
                    key={index}
                    className="mb-6 ms-3"
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={textRevealVariants}
                >
                    <motion.div
                        className="absolute w-2 h-2 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-blue-700"
                        animate={pulseAnimation}
                    />
                    <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                        {milestone.date}
                    </time>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                        {milestone.title}
                    </h3>
                    <p className="mb-2 text-xs w-[400px] font-normal text-gray-500 dark:text-gray-400">
                        {milestone.description}
                    </p>
                    {milestone.link && (
                        <a
                            href={milestone.link}
                            className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                            Learn more
                            <svg
                                className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    )}
                </motion.li>
            ))}
        </ol>
    );
};

export default JobJoyTimeline;
