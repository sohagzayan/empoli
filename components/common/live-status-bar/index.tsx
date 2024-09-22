"use client"
import React, { useState, useEffect } from 'react';

const LivePortalStatus = () => {
    const [timeLeft, setTimeLeft] = useState("3 Days 2 Hours");
    const [totalJobs, setTotalJobs] = useState(0);
    const [averageRating, setAverageRating] = useState(4.8); // Example rating out of 5
    const [supportStatus, setSupportStatus] = useState("Online");
    const [activeUsers, setActiveUsers] = useState(120);
    const [totalApplicants, setTotalApplicants] = useState(0);

    useEffect(() => {
        // Simulate fetching live data
        const fetchLiveData = () => {
            // Example data updates
            setTotalJobs(523); // Example total job posts available
            setTotalApplicants(356); // Example total applicants today
        };

        fetchLiveData();
        const interval = setInterval(fetchLiveData, 10000); // Fetch new data every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex items-center justify-center'>
            <div
                style={{
                    width: "400px",
                    height: "auto",
                    backgroundColor: "#202246",
                    clipPath: "polygon(100% 0, 100% 58%, 58% 100%, 0 100%, 0 0)"
                }}
                className=""
            >
                {/* Header */}
                <div className='bg-[rgba(255,255,255,0.12)] px-4 py-3'>
                    <h2 className='text-white font-600 text-lg'>Job Portal Live Status</h2>
                </div>

                {/* Live Data Section */}
                <div className='px-4 py-6'>
                    <h3 className='text-white text-xl font-semibold'>Live Data Overview</h3>

                    {/* Total Jobs */}
                    <div className='mt-4'>
                        <p className='text-gray-400 text-sm'>Total Job Posts: <span className='text-white'>{totalJobs}</span></p>
                    </div>

                    {/* Active Users */}
                    <div className='mt-4'>
                        <p className='text-gray-400 text-sm'>Active Users Right Now: <span className='text-white'>{activeUsers}</span></p>
                    </div>

                    {/* Total Applicants Today */}
                    <div className='mt-4'>
                        <p className='text-gray-400 text-sm'>Total Applicants Today: <span className='text-white'>{totalApplicants}</span></p>
                    </div>

                    {/* Website Rating */}
                    <div className='mt-4'>
                        <p className='text-gray-400 text-sm'>Website Rating: <span className='text-yellow-400'>⭐ {averageRating}</span> / 5</p>
                    </div>

                    {/* Website Support Status */}
                    <div className='mt-4'>
                        <p className='text-gray-400 text-sm'>Support Status: <span className={`text-${supportStatus === "Online" ? 'green' : 'red'}-400`}>{supportStatus}</span></p>
                    </div>

                    {/* Countdown Timer Example */}
                    <div className='mt-4'>
                        <p className='text-gray-400 text-sm'>Job Posting Closes in: <span className='text-red-500'>{timeLeft}</span></p>
                    </div>

                    {/* Apply Button (Optional) */}
                    <div className='mt-6'>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded-full flex items-center'>
                            Browse Jobs <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LivePortalStatus;
