import React from 'react';
import { FaRegNoteSticky } from 'react-icons/fa6';
import { GoHistory } from 'react-icons/go';
import { PiNotepadLight } from 'react-icons/pi';
import AllPersonalInfoOverview from '../all-personal-info-overview';

const Overview = () => {



    return (
        <div>
            <div className=" mx-auto p-6 bg-[rgba(255,255,255,0.06)] rounded-xl mt-6">
                <div className="text-left mb-0">
                    <h2 className="text-2xl text-white font-bold ">Sohag Hossain</h2>
                    <p className="text-sm text-text5 ">Coderspace .Senior Software Developer</p>

                    <div className='mt-8 flex items-center gap-8'>
                        <div className='flex text-white items-center gap-2 '>
                            <FaRegNoteSticky />
                            Note
                        </div>
                        <div className='flex text-white items-center gap-2 '>
                            <PiNotepadLight />
                            Tests
                        </div>
                        <div className='flex text-white items-center gap-2 '>
                            <GoHistory />
                            Tests
                        </div>
                    </div>
                </div>
            </div>
            <AllPersonalInfoOverview />
        </div>
    );
};

export default Overview;
