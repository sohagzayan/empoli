"use client"

import { useGetAllJobsQuery } from "@/redux/features/getJobs";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";
import PaginationC from "@/components/shared/pagination/PaginationC";
import JobCart from "@/components/shared/job_card/JobCard"


const JobResults = ({ searchParams }: any) => {

    const [isOpenFilter, setIsOpenFilter] = useState(false)
    const [allJobs, setAllJobs] = useState([])
    const [itemOffset, setItemOffset] = useState(0);
    let itemsPerPage = 4
    const endOffset = itemOffset + itemsPerPage;
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const queryString = new URLSearchParams(searchParams).toString();

    const { data, isLoading } = useGetAllJobsQuery(queryString)

    console.log("res form rtk", data)
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    console.log("jobs", data)

    return (
        <>
            <div className='w-full'>
                <div>
                    {isLoading ?
                        <div className='flex items-center justify-center py-10'>
                            <PropagateLoader color="#36d7b7" />
                        </div> :
                        <div>
                            <div className='grid grid-cols-1 gap-4'>
                                {!data?.jobs.length && <div className='flex flex-col justify-center items-center py-20'>
                                    <h3>No job Found </h3>
                                    <p>🙅‍♂️🙅‍♂️</p>
                                </div>}
                                {data?.jobs.map((job: any, index: any) =>
                                    <JobCart key={job?.job_title + index} data={job} />)}
                            </div>
                            <PaginationC
                                totalJobs={data?.totalCount}
                                jobsPerPage={10}
                            />
                        </div>
                    }
                </div>
            </div>
        </>
    )
}


export default JobResults
