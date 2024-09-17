import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const dynamicValues = ["Discover What's Next!", "Find Your Dream Role!", "Step Into Your Future!", "Achieve Career Goals!"];

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
        }, 4000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ textAlign: "center", color: "#fff" }}>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-2" >Dream Job Awaits!</h1>
            <AnimatePresence mode="wait">
                <motion.h2
                    className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                    key={index}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                // style={{ fontSize: "3.5rem", fontWeight: "bold" }}
                // className="text-6xl"
                >
                    {dynamicValues[index]}
                </motion.h2>
            </AnimatePresence>
            {/* <p style={{ fontSize: "1rem", color: "#aaa", marginTop: "1rem" }}>
                Unlock endless opportunities and take the next step in your career journey. Whether you're chasing your passion or
                exploring new paths, we’re here to help you find the perfect fit. Your dream job is just a click away—let's make it
                happen together!
            </p> */}
        </div >
    );
};

export default DynamicTitle;
