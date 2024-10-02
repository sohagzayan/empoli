import React from 'react';
import PropTypes from 'prop-types';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const AllApplicantsHeader = () => {
  return (
    <div>
      <div>
        <h3 className="text-blue text-[16px]">Applicant</h3>
        <hr className="my-4" />
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-4">
            <h3 className="text-[14px] text-gray-500">
              Select Your Job post here
            </h3>
          </div>
          <div className="col-span-8">
            <Select>
              <SelectTrigger className="focus:outline-primary w-full text-gray-500">
                <SelectValue placeholder="Select a your job " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">
                    Software Engineer (Android), Libraries
                  </SelectItem>
                  <SelectItem value="banana">Recruiting Coordinator</SelectItem>
                  <SelectItem value="blueberry">
                    Product Manager, Studio
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-12 items-center">
          <div className="col-span-4">
            <h3 className="text-[14px] text-gray-500">
              Add Your job post id here
            </h3>
          </div>
          <div className="col-span-8">
            <input
              className="focus:outline-primary w-full rounded-md border px-[10px] py-[8px] text-[14px] text-gray-500"
              type="text"
              placeholder="job id"
            />
          </div>
        </div>
      </div>
      <div className="bg-primary-50 mt-8 grid grid-cols-12 rounded-md p-4">
        <div className="col-span-5">
          <h3 className="text-primary text-[14px]">Senior Product Designer</h3>
        </div>
        <div className="col-span-7">
          <ul className="flex items-center justify-between">
            <li className="text-primary text-[14px]v">Total(s): 6</li>
            <li className="text-green-500 text-[14px]">Approved: 2</li>
            <li className="text-red-500 text-[14px]">Rejected(s): 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllApplicantsHeader;
