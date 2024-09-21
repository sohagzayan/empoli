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
    const [currentX, setCurrentX] = useState<any>(0);
    const [direction, setDirection] = useState("left");

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

    const startScrollingRight = (fromX: any) => {
        controls.start({
            x: [fromX, "0%"],
            transition: {
                duration: 50,
                repeat: Infinity,
                ease: "linear"
            }
        });
    };

    useEffect(() => {
        startScrollingLeft("0%");
    }, []);

    const handleMouseEnter = () => {
        setDirection("right");
        controls.stop();
        startScrollingRight(currentX);
    };

    const handleMouseLeave = () => {
        setDirection("left");
        controls.stop();
        startScrollingLeft(currentX);
    };

    return (
        <div
            className=" bg-themeDark overflow-hidden whitespace-nowrap w-full flex items-center  py-3 font-400   text-sm"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="flex text-"
                animate={controls}
                style={{ display: 'flex', minWidth: '200%' }}
                onUpdate={(latest) => setCurrentX(latest.x)}
            >
                {messages.map((msg, index) => (
                    <span key={index} className="inline-block mr-10 odd:font-medium font-bold text-text6">
                        {msg}
                    </span>
                ))}

                {messages.map((msg, index) => (
                    <span key={index + messages.length} className="inline-block mr-10  odd:font-medium  font-bold text-text6">
                        {msg}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
