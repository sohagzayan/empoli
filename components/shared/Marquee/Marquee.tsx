"use client";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const messages = [
    "Discover New Careers!",
    "😊 Explore Top Jobs Near You!",
    "New Opportunities, New Goals!",
    "Upgrade Your Skills with Online Training!",
    "All Job Listings Available for Free!",
    "New season, New Beginnings!",
    "🎯 Boost Your Career with Expert Guidance!",
    "Work from Home - Apply Now!",
    "Fresh Jobs Posted Daily!",
    "Top Companies Hiring This Week!"
];

const Marquee = () => {
    const controls = useAnimation();
    const [currentX, setCurrentX] = useState<any>(0); // Track the current position
    const [direction, setDirection] = useState("left");

    // Function to start scrolling to the left (default)
    const startScrollingLeft = (fromX: any) => {
        controls.start({
            x: [fromX, "-100%"],
            transition: {
                duration: 50,
                repeat: Infinity,
                ease: "linear"
            }
        });
    };

    // Function to reverse the direction and scroll to the right on hover
    const startScrollingRight = (fromX: any) => {
        controls.start({
            x: [fromX, "0%"], // Start from the current position
            transition: {
                duration: 50,
                repeat: Infinity,
                ease: "linear"
            }
        });
    };

    // Default animation runs on initial render (scrolling left to right)
    useEffect(() => {
        startScrollingLeft("0%"); // Start at the beginning (0%)
    }, []);

    const handleMouseEnter = () => {
        setDirection("right");
        controls.stop();
        startScrollingRight(currentX); // Continue scrolling right from the current position
    };

    const handleMouseLeave = () => {
        setDirection("left");
        controls.stop();
        startScrollingLeft(currentX); // Continue scrolling left from the current position
    };

    return (
        <div
            style={{ backgroundColor: "rgba(255,255,255,.1)" }}
            className="overflow-hidden whitespace-nowrap w-full flex items-center  py-3 font-400   text-sm"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="flex text-"
                animate={controls}
                style={{ display: 'flex', minWidth: '200%' }}
                onUpdate={(latest) => setCurrentX(latest.x)} // Track the x position dynamically
            >
                {/* First set of messages */}
                {messages.map((msg, index) => (
                    <span key={index} className="inline-block mr-10 odd:font-medium odd:text-gray400 font-bold text-white">
                        {msg}
                    </span>
                ))}

                {/* Duplicate set of messages for seamless looping */}
                {messages.map((msg, index) => (
                    <span key={index + messages.length} className="inline-block mr-10  odd:font-medium odd:text-gray400 font-bold text-white">
                        {msg}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
