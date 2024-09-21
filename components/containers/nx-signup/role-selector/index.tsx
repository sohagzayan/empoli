"use client";

import { UserHire, UserSeeker } from '@/components/icons/user/user';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/common';
import Link from 'next/link';

const RoleSelector = () => {
    const [selected, setSelected] = useState<null | string>(null);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const roleVariants = {
        selected: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } },
        unselected: { scale: 1 },
    };


    const getButtonText = () => {
        if (selected === 'recruiter') {
            return 'Join as Recruiter';
        } else if (selected === 'seeker') {
            return 'Join as Candidate';
        } else {
            return 'Create an account';
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="w-[700px] mx-auto">
                <div>
                    <h3 className="text-white text-3xl font-white">
                        Join today to post jobs or find your next gig!
                    </h3>
                    <div className="mt-14">
                        <div className="flex justify-center space-x-8">
                            <motion.label
                                className={`cursor-pointer border-2 p-3 rounded-md w-[300px] text-left border-[rgba(255,255,255,0.08)] air3-radio-label air3-btn-box-check-icon ${selected === 'recruiter' ? 'is-active bg-[rgba(255,255,255,0.05)]' : ''}`}
                                variants={roleVariants}
                                animate={selected === 'recruiter' ? 'selected' : 'unselected'}
                            >
                                <div className="flex justify-end">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="client"
                                        className="air3-btn-box-input"
                                        checked={selected === 'recruiter'}
                                        onChange={() => setSelected('recruiter')}
                                    />
                                </div>
                                <UserHire color="text-white" width="50" />
                                <div className="air3-checkbox-fake-input">
                                    <span className="air3-radio-icon"></span>
                                </div>
                                <div className="py-3">
                                    <p className="text-white">I{"’"}m a client, hiring for a job or project</p>
                                </div>
                            </motion.label>

                            <motion.label
                                className={`cursor-pointer border-2 p-3 rounded-md w-[300px] text-left border-[rgba(255,255,255,0.08)] air3-radio-label air3-btn-box-check-icon ${selected === 'seeker' ? 'is-active bg-[rgba(255,255,255,0.05)]' : ''}`}
                                variants={roleVariants}
                                animate={selected === 'seeker' ? 'selected' : 'unselected'}
                            >
                                <div className="flex justify-end">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="client"
                                        className="air3-btn-box-input"
                                        checked={selected === 'seeker'}
                                        onChange={() => setSelected('seeker')}
                                    />
                                </div>
                                <UserSeeker color="text-white" width="50" />
                                <div className="air3-checkbox-fake-input">
                                    <span className="air3-radio-icon"></span>
                                </div>
                                <div className="py-3">
                                    <p className="text-white">I{"’"}m a candidate, Looking for a job</p>
                                </div>
                            </motion.label>
                        </div>
                        <div className='flex flex-col  w-[300px] mx-auto mt-10 text-center'>
                            <Button
                                text={getButtonText()}
                                variant="secondary"
                                className={`${!selected ? "bg-[rgba(255,255,255,0.05)] border-transparent opacity-50 pointer-events-none" : ""}`}
                            />
                            <p className='text-text6 mt-3 text-sm'>Already have an account?
                                <Link href="/" className='text-theme1 font-600 ml-1'> Log In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default RoleSelector;
