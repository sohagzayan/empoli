'use client';
import React, { useRef } from 'react';
import { GoPencil } from 'react-icons/go';
import { LuPlus } from 'react-icons/lu';
import { MdOutlineFileDownload } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

const ResumeMain = () => {
  return (
    <div>
      <div className="bg-surface-100 marker: relative w-full rounded-xl border p-10 shadow-sm transition-all">
        <div className="mb-5 flex justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-blue-midnight_blue flex items-center gap-6 text-3xl font-medium">
              Sohag Hossain Zayan
              <GoPencil size={20} />
            </h2>
            <span className="">sohag.zayan@gmail.com</span>
            <span className="">+880 1980796731</span>
            <span className="">Dhaka</span>
          </div>
          <div>
            <button className="text-primary flex items-center gap-1">
              {' '}
              <MdOutlineFileDownload /> Download
            </button>
          </div>
        </div>
        <hr />
        <div className="flex py-5 text-[14px]">
          <div className="w-[224px] pr-[85px]">
            <h3>EDUCATION</h3>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="text-blue-midnight_blue text-lg font-medium">
                  Diploma, Diploma In Engineering
                </h3>
                <h5 className="text-blue-midnight_blue">
                  City University Dhaka Bangladesh
                </h5>
                <h5>2021 - 2025</h5>
              </div>
              <div className="">
                <div className="flex items-center gap-3">
                  <span>
                    <GoPencil size={20} className="text-blue-steel_blue" />
                  </span>
                  <span>
                    <RiDeleteBin6Line
                      size={20}
                      className="text-blue-steel_blue"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <button className="text-primary mt-1 flex items-center gap-2 font-medium">
                <LuPlus />
                Add education
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex py-5 text-[14px]">
          <div className="w-[224px] pr-[85px]">
            <h3 className="text-[14px]">WORK EXPERIENCE</h3>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="text-blue-midnight_blue text-lg font-medium">
                  Diploma, Diploma In Engineering
                </h3>
                <h5 className="text-blue-midnight_blue">
                  City University Dhaka Bangladesh
                </h5>
                <h5>2021 - 2025</h5>
              </div>
              <div className="">
                <div className="flex items-center gap-3">
                  <span>
                    <GoPencil size={20} className="text-blue-steel_blue" />
                  </span>
                  <span>
                    <RiDeleteBin6Line
                      size={20}
                      className="text-blue-steel_blue"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-primary mt-1 flex items-center gap-2 font-medium">
                <LuPlus />
                Add Job
              </button>
              <button className="text-primary mt-1 flex items-center gap-2 font-medium">
                <LuPlus />
                Add internship
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex py-5 text-[14px]">
          <div className="w-[224px] pr-[85px]">
            <h3 className="text-[14px]">POSITIONS OF RESPONSIBILITY</h3>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="text-blue-midnight_blue text-lg font-medium">
                  Diploma, Diploma In Engineering
                </h3>
                <h5 className="text-blue-midnight_blue">
                  City University Dhaka Bangladesh
                </h5>
                <h5>2021 - 2025</h5>
              </div>
              <div className="">
                <div className="flex items-center gap-3">
                  <span>
                    <GoPencil size={20} className="text-blue-steel_blue" />
                  </span>
                  <span>
                    <RiDeleteBin6Line
                      size={20}
                      className="text-blue-steel_blue"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-primary mt-1 flex items-center gap-2 font-medium">
                <LuPlus />
                Add position of responsibility{' '}
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex py-5 text-[14px]">
          <div className="w-[224px] pr-[85px]">
            <h3 className="text-[14px]">TRAININGS/ COURSES</h3>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="text-blue-midnight_blue text-lg font-medium">
                  Diploma, Diploma In Engineering
                </h3>
                <h5 className="text-blue-midnight_blue">
                  City University Dhaka Bangladesh
                </h5>
                <h5>2021 - 2025</h5>
              </div>
              <div className="">
                <div className="flex items-center gap-3">
                  <span>
                    <GoPencil size={20} className="text-blue-steel_blue" />
                  </span>
                  <span>
                    <RiDeleteBin6Line
                      size={20}
                      className="text-blue-steel_blue"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-primary mt-1 flex items-center gap-2 font-medium">
                <LuPlus />
                Add training/ course
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex py-5 text-[14px]">
          <div className="w-[224px] pr-[85px]">
            <h3 className="text-[14px]">ACADEMICS/ PERSONAL PROJECTS</h3>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="text-blue-midnight_blue text-lg font-medium">
                  Diploma, Diploma In Engineering
                </h3>
                <h5 className="text-blue-midnight_blue">
                  City University Dhaka Bangladesh
                </h5>
                <h5>2021 - 2025</h5>
              </div>
              <div className="">
                <div className="flex items-center gap-3">
                  <span>
                    <GoPencil size={20} className="text-blue-steel_blue" />
                  </span>
                  <span>
                    <RiDeleteBin6Line
                      size={20}
                      className="text-blue-steel_blue"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-primary mt-1 flex items-center gap-2 font-medium">
                <LuPlus />
                Add academic/ personal project{' '}
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex py-5 text-[14px]">
          <div className="w-[224px] pr-[85px]">
            <h3 className="text-[14px]">SKILLS</h3>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="text-blue-midnight_blue text-lg font-medium">
                  Diploma, Diploma In Engineering
                </h3>
                <h5 className="text-blue-midnight_blue">
                  City University Dhaka Bangladesh
                </h5>
                <h5>2021 - 2025</h5>
              </div>
              <div className="">
                <div className="flex items-center gap-3">
                  <span>
                    <GoPencil size={20} className="text-blue-steel_blue" />
                  </span>
                  <span>
                    <RiDeleteBin6Line
                      size={20}
                      className="text-blue-steel_blue"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-primary mt-1 flex items-center gap-2 font-medium">
                <LuPlus />
                Add skill
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex py-5 text-[14px]">
          <div className="w-[224px] pr-[85px]">
            <h3 className="text-[14px]">PORTFOLIO/ WORK SAMPLES</h3>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="text-blue-midnight_blue text-lg font-medium">
                  Diploma, Diploma In Engineering
                </h3>
                <h5 className="text-blue-midnight_blue">
                  City University Dhaka Bangladesh
                </h5>
                <h5>2021 - 2025</h5>
              </div>
              <div className="">
                <div className="flex items-center gap-3">
                  <span>
                    <GoPencil size={20} className="text-blue-steel_blue" />
                  </span>
                  <span>
                    <RiDeleteBin6Line
                      size={20}
                      className="text-blue-steel_blue"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-primary mt-1 flex items-center gap-2 font-medium">
                <LuPlus />
                Add portfolio/ work sample
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex py-5 text-[14px]">
          <div className="w-[224px] pr-[85px]">
            <h3 className="text-[14px]">ACCOMPLISHMENTS/ ADDITIONAL DETAILS</h3>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="text-blue-midnight_blue text-lg font-medium">
                  Diploma, Diploma In Engineering
                </h3>
                <h5 className="text-blue-midnight_blue">
                  City University Dhaka Bangladesh
                </h5>
                <h5>2021 - 2025</h5>
              </div>
              <div className="">
                <div className="flex items-center gap-3">
                  <span>
                    <GoPencil size={20} className="text-blue-steel_blue" />
                  </span>
                  <span>
                    <RiDeleteBin6Line
                      size={20}
                      className="text-blue-steel_blue"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-primary mt-1 flex items-center gap-2 font-medium">
                <LuPlus />
                Add accomplishment/ additional detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeMain;
