import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const HowTtWorks = () => {
    return (
        <div className='container lg:px-16 xl:px-20 mt-14'>
            <div>
                <div className='grid grid-cols-2 items-center '>
                    <div className='p-14'>
                        <Image src="/assets/images/how-it-works-girl.jpg" style={{ width: "100%", height: "100%" }} width={0} height={0} sizes='100wv' alt="Ranch Investor" className='max-w-[420px] rounded-[30px] ' />
                    </div>
                    <div className='p-14'>
                        <h2 className='text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-6xl text-blue-midnight_blue font-medium mb-10'>How it Works</h2>
                        <div>
                            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1</time>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Create an outstanding job post</h3>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Joblist makes it quick and easy to create your listing and post - no account required.</p>
                                </li>
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2</time>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Reach millions of job seekers</h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">We immediately alert qualified candidates and showcase your opening to active job seekers in your area.</p>
                                </li>
                                <li className="ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">3</time>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Review your candidate matches</h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Receive applications seamlessly however you like - via your email inbox, own career site, or applicant tracking system.</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HowTtWorks

