import React from 'react';
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
import { ListFilter } from 'lucide-react';

const FindJobHeader = ({ setIsOpenFilter }: any) => {
  return (
    <div className="">
      <div className="flex w-full flex-col items-center justify-between md:flex-row">
        <div className="flex w-full items-center gap-2">
          <button
            onClick={() => setIsOpenFilter(true)}
            className="bg-primary block flex w-full items-center gap-2 rounded-lg px-4 py-2 text-[12px] text-white md:w-auto lg:hidden"
          >
            <ListFilter size={20} />
            Filter
          </button>
          <h3 className="hidden text-[12px] text-purple lg:block">
            Show <strong>10</strong> jobs
          </h3>
        </div>
        <div className="mt-4 flex w-full flex-col items-center gap-4 md:mt-0 md:flex-row">
          <Button variant="destructive" className="hidden md:block">
            Clear All
          </Button>
          <Select>
            <SelectTrigger className="text-[13px] md:w-[150px]">
              <SelectValue placeholder="Sort by (default)" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="text-[13px] md:w-[150px]">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="10">10 per page</SelectItem>
                <SelectItem value="20">20 per page</SelectItem>
                <SelectItem value="30">30 per page</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            variant="destructive"
            className="block w-full md:hidden md:w-auto"
          >
            Clear All
          </Button>
        </div>
      </div>
      <h3 className="mt-4 block text-[12px] text-purple lg:hidden">
        Show <strong>10</strong> jobs
      </h3>
    </div>
  );
};

export default FindJobHeader;
