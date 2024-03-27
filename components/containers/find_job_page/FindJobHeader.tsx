import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { ListFilter } from 'lucide-react'

const FindJobHeader = ({ setIsOpenFilter }: any) => {
    return (
        <div className=''>
            <div className='flex md:flex-row flex-col  items-center justify-between w-full'>
                <div className='flex w-full items-center gap-2'>
                    <button
                        onClick={() => setIsOpenFilter(true)}
                        className=' md:w-auto w-full lg:hidden block  text-[12px] flex  items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg'>
                        <ListFilter size={20} />
                        Filter
                    </button>
                    <h3 className=' lg:block hidden text-[12px] text-purple'>Show <strong>10</strong> jobs</h3>
                </div>
                <div className='flex md:mt-0 mt-4 w-full md:flex-row  flex-col items-center gap-4'>
                    <Button variant="destructive" className='md:block hidden'>Clear All</Button>
                    <Select >
                        <SelectTrigger className="md:w-[150px] text-[13px]">
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
                        <SelectTrigger className="md:w-[150px] text-[13px]">
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
                    <Button variant="destructive" className='md:w-auto w-full md:hidden block'>Clear All</Button>

                </div>
            </div>
            <h3 className=' lg:hidden block mt-4 text-[12px] text-purple'>Show <strong>10</strong> jobs</h3>
        </div>

    )
}

export default FindJobHeader