'use client';
import MiniLoadingCircle from '@/components/shared/mini-loading-circle/MiniLoadingCircle';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { SlashIcon } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const JobDetail = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState<any>({});
  // const [editorState, setEditorState] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const getJobDetails = async () => {
      try {
        const res = await axios.get(`/api/recruiter/job/detail/${id}`);
        console.log('Response: ', res.data);
        setJobDetails(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching job details: ', error);
      }
    };
    getJobDetails();
  }, [id]);

  const convertJSONToHTML = (jsonText: any) => {
    return { __html: jsonText };
  };

  // console.log("decodedJobDescriptionHTML", JSON.parse(jobDetails?.job_description))

  const calculateTimeAgo = (dateString: string): string => {
    const currentDate = new Date();
    const pastDate = new Date(dateString);
    const timeDifference = currentDate.getTime() - pastDate.getTime(); // Explicitly casting to number
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return `${years} year${years === 1 ? '' : 's'} ago`;
    } else if (months > 0) {
      return `${months} month${months === 1 ? '' : 's'} ago`;
    } else if (weeks > 0) {
      return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
    } else if (days > 0) {
      return `${days} day${days === 1 ? '' : 's'} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else {
      return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
    }
  };
  return (
    <>
      {loading ? (
        <div className="data-open:animate-overlay-show data-closed:animate-overlay-hide fixed inset-0 z-50 flex flex-col place-items-center items-center justify-center overflow-y-auto bg-white backdrop-blur-sm">
          <MiniLoadingCircle />
          <div className="mt-2">Job details loading...</div>
        </div>
      ) : (
        <div className="container py-8 lg:px-16 xl:px-20">
          <div className="">
            <div className="mb-4 flex items-center">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <SlashIcon />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/jobs">Jobs</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <SlashIcon />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Detail</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="bg-gray_light_400 text-blue-midnight_blue px-2 py-1">
                  {calculateTimeAgo(jobDetails?.createdDate)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="font-regular text-foreground bg-button hover:bg-selection border-button hover:border-button-hover focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover relative inline-flex cursor-pointer items-center justify-center space-x-2 rounded-md border px-2.5 py-1 text-center text-xs shadow-sm outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1">
                  <div className="bg-primary h-2 w-2 rounded-full"></div>
                  <span className="truncate">Actively Hiring</span>
                </button>

                <button className="font-regular bg-primary hover:bg-brand-button/80 border-brand focus-visible:outline-brand-600 relative inline-flex cursor-pointer items-center justify-center space-x-2 rounded-md border px-2.5 py-1 text-center text-xs text-white shadow-sm outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1">
                  <span className="truncate">
                    <span className="flex items-center gap-2 px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-plug rotate-90"
                      >
                        <path d="M12 22v-5"></path>
                        <path d="M9 8V2"></path>
                        <path d="M15 8V2"></path>
                        <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path>
                      </svg>
                      <span>Apply</span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="relative py-16 md:py-24">
            <div className="">
              <div className="grid grid-cols-1 gap-[30px] md:grid-cols-12">
                <div className="md:col-span-6 lg:col-span-3">
                  <div className="sticky top-20 rounded-md bg-white shadow dark:bg-slate-900 dark:shadow-gray-700">
                    <div className="p-6">
                      <h5 className="text-lg font-semibold">Job Information</h5>
                      <div className="border-t border-slate-100 p-6 dark:border-t-gray-700">
                        <ul className="list-none">
                          <li className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="8.5" cy="7" r="4"></circle>
                              <polyline points="17 11 19 13 23 9"></polyline>
                            </svg>
                            <div className="ms-4">
                              <p className="font-medium">Job Type:</p>
                              <span className="text-sm font-medium capitalize text-emerald-600">
                                {jobDetails.job_type}
                              </span>
                            </div>
                          </li>

                          <li className="mt-3 flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <div className="ms-4">
                              <p className="font-medium">Office Location:</p>
                              <span className="text-sm font-medium text-emerald-600">
                                {jobDetails?.office_location}
                              </span>
                            </div>
                          </li>

                          <li className="mt-3 flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <rect
                                x="2"
                                y="3"
                                width="20"
                                height="14"
                                rx="2"
                                ry="2"
                              ></rect>
                              <line x1="8" y1="21" x2="16" y2="21"></line>
                              <line x1="12" y1="17" x2="12" y2="21"></line>
                            </svg>
                            <div className="ms-4">
                              <p className="font-medium">Location:</p>
                              <span className="text-sm font-medium capitalize text-emerald-600">
                                {jobDetails?.location}
                              </span>
                            </div>
                          </li>

                          <li className="mt-3 flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <rect
                                x="2"
                                y="7"
                                width="20"
                                height="14"
                                rx="2"
                                ry="2"
                              ></rect>
                              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                            <div className="ms-4">
                              <p className="font-medium">Experience:</p>
                              <span className="text-sm font-medium capitalize text-emerald-600">
                                {jobDetails?.experience}
                              </span>
                            </div>
                          </li>

                          <li className="mt-3 flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                            </svg>
                            <div className="ms-4">
                              <p className="font-medium">Qualifications:</p>
                              <span className="text-sm font-medium uppercase text-emerald-600">
                                {jobDetails?.qualifications}
                              </span>
                            </div>
                          </li>

                          <li className="mt-3 flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <line x1="12" y1="1" x2="12" y2="23"></line>
                              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                            <div className="ms-4">
                              <p className="font-medium">Salary:</p>
                              <span className="text-sm font-medium text-emerald-600">
                                ${jobDetails.salary_range_min} - $
                                {jobDetails.salary_range_max}
                              </span>
                            </div>
                          </li>

                          <li className="mt-3 flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <div className="ms-4">
                              <p className="font-medium">
                                Application Dateline:
                              </p>
                              <span className="text-sm font-medium text-emerald-600">
                                {jobDetails?.applicationDeadline}
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6 lg:col-span-9">
                  <h3 className="text-blue-midnight_blue mb-6 text-2xl font-medium capitalize leading-snug tracking-wide md:text-3xl md:leading-snug">
                    {jobDetails?.job_title}
                  </h3>

                  <h5 className="text-lg font-semibold">Job Description:</h5>
                  <div
                    className="mt-4 flex flex-col gap-2 text-slate-400 [&>ol]:flex [&>ol]:flex-col [&>ol]:gap-3 [&>ol]:px-4 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-3 [&>ul]:px-4"
                    dangerouslySetInnerHTML={convertJSONToHTML(
                      jobDetails?.job_description,
                    )}
                  />

                  <h5 className="mt-6 text-lg font-semibold">
                    Responsibilities and Duties:{' '}
                  </h5>

                  <div
                    className="mt-4 flex flex-col gap-2 text-slate-400 [&>ol]:flex [&>ol]:flex-col [&>ol]:gap-3 [&>ol]:px-4 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-3 [&>ul]:px-4"
                    dangerouslySetInnerHTML={convertJSONToHTML(
                      jobDetails?.job_responsibilities,
                    )}
                  />

                  <h5 className="mt-6 text-lg font-semibold">
                    Required skills:
                  </h5>
                  <ul className="mt-2 flex flex-wrap gap-3">
                    {jobDetails?.required_skills.map((skill: any) => (
                      <li
                        className="font-regular text-foreground bg-button hover:bg-selection border-button hover:border-button-hover focus-visible:outline-brand-600 relative inline cursor-pointer space-x-2 rounded-md border px-4 py-2 text-center text-[12px] shadow-sm outline-none transition-all duration-200 ease-out"
                        key={skill}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>

                  <h5 className="mt-6 text-lg font-semibold">
                    Number of openings:
                  </h5>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <h3>{jobDetails?.numberOfOpenings}</h3>
                  </div>

                  <h5 className="mt-6 text-lg font-semibold">Perks:</h5>
                  <ul className="mt-2 flex flex-wrap gap-3">
                    {jobDetails?.perks.map((perk: any) => (
                      <li
                        className="font-regular text-foreground bg-button hover:bg-selection border-button hover:border-button-hover focus-visible:outline-brand-600 relative inline cursor-pointer space-x-2 rounded-md border px-4 py-2 text-center text-[12px] shadow-sm outline-none transition-all duration-200 ease-out"
                        key={perk}
                      >
                        {perk}
                      </li>
                    ))}
                  </ul>

                  <h5 className="mt-6 text-lg font-semibold">How to apply:</h5>
                  <ul className="mt-2 flex flex-col flex-wrap gap-1 font-normal">
                    {jobDetails?.how_to_apply?.apply_email && (
                      <li>
                        Gmail:{' '}
                        <span className="text-blue-midnight_blue font-semibold">
                          {jobDetails?.how_to_apply?.apply_email}
                        </span>
                      </li>
                    )}

                    {jobDetails?.how_to_apply?.apply_website && (
                      <li>
                        Website:{' '}
                        <span className="text-blue-midnight_blue font-semibold">
                          {jobDetails?.how_to_apply?.apply_website}
                        </span>
                      </li>
                    )}
                  </ul>

                  <div
                    onClick={() =>
                      router.push(
                        `/application/form/${jobDetails.job_title.replace(/\s+/g, '-')}-internship-at-She-Can-Foundation-${jobDetails.id}`,
                      )
                    }
                    className="mt-5"
                  >
                    <Button className="btn bg-primary hover:bg-primary/80 border-primary hover:border-primary/80 w-full rounded-md px-4 text-[14px] text-white md:ms-2 md:w-auto">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDetail;
