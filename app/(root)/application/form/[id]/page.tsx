"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Header from '@/components/shared/Nav/Header'
import { FiCopy } from "react-icons/fi"
import { IoCloudUploadOutline } from 'react-icons/io5'
import { Button } from '@/components/ui/button'
import Footer from '@/components/shared/footer/Footer'
import { usePathname } from 'next/navigation'
import axios from 'axios'
import MiniLoadingCircle from '@/components/shared/mini-loading-circle/MiniLoadingCircle'
import { useSession } from 'next-auth/react'
import { useDropzone } from 'react-dropzone'
import { truncateSync } from 'fs'
import { toast } from 'sonner'


const ApplicationForm = () => {
    const { data: session } = useSession()
    const [loading, setLoading] = useState(false)
    const [ALoading, setALoading] = useState(false)
    const [jobDetails, setJobDetails] = useState<any>({})

    const [yourAvailability, setYourAvailability] = useState(true)
    const [coverLatter, setCoverLatter] = useState('')
    const [unavailableReason, setUnavailableReason] = useState('')
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [resumeFileEvent, setResumeFileEvent] = useState<any>(null)
    const [prevCoverLatter, setPrevCoverLatter] = useState<any>({})







    const pathname = usePathname();
    const segments = pathname.split('/');
    const lastSegment = segments[segments.length - 1];
    const match = lastSegment.match(/\d+/);
    const id = match ? match[0] : null;





    const handleToggle = (newValue: any) => {
        setYourAvailability(newValue);
    };


    useEffect(() => {
        const getJobDetails = async () => {
            try {
                const res = await axios.get(`/api/recruiter/job/detail/${id}`);
                const prevCoverLatter = await axios.get(`/api/user/recent_cover_letter/${id}`)
                setPrevCoverLatter(prevCoverLatter.data)
                console.log("PrevCoverLatter", prevCoverLatter)
                console.log("Response: ", res.data);
                setJobDetails(res.data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.error("Error fetching job details: ", error);
            }
        }
        getJobDetails()
    }, [id])



    const handleFileUpload = async (event: any) => {
        if (event) {
            const [fileData] = event.target.files;
            console.log("event.target.files", event.target.files);

            // File type validation
            const allowedFileTypes = ['application/pdf']; // Only allow PDF files
            if (!allowedFileTypes.includes(fileData.type)) {
                console.log('Invalid file type. Please upload a PDF file.');
                // You can show an error message to the user or handle it in your application's UI
                return;
            }

            // File size validation (in bytes)
            const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
            if (fileData.size > maxSizeInBytes) {
                console.log('File size exceeds the maximum allowed size.');
                // You can show an error message to the user or handle it in your application's UI
                return;
            }

            const formData = new FormData();
            formData.append('file', fileData);
            formData.append('upload_preset', 'apper_upload'); // Replace 'your_upload_preset' with your Cloudinary upload preset

            try {
                const res = await axios.post('https://api.cloudinary.com/v1_1/da0dxyn2l/auto/upload', formData);
                console.log('file upload response:', res);

                // Handle the response according to your needs
                if (res.data && res.data.url) {
                    // Handle PDF upload
                    console.log('PDF uploaded successfully:', res.data.url);
                    return {
                        resume: res.data.url,
                        success: true
                    }
                } else {
                    // console.log('Unexpected response:', res);
                    return {
                        error: "Unexpected Error upload resume ",
                        success: false
                    }
                }
            } catch (error) {
                // console.log("File upload error:", error);
                return {
                    error: "Resume upload error",
                    success: false
                }
            }
        }
    }

    const handleApplication = async (e: any) => {
        e.preventDefault()
        setALoading(true)
        const loadingToast = toast.loading("Submitting in...", {
            position: 'bottom-center',
            // autoClose: false
        })

        console.log("application submit")
        try {
            let resume = null
            if (resumeFileEvent) {
                let isUploadResume = await handleFileUpload(resumeFileEvent)
                if (isUploadResume?.success) {
                    resume = isUploadResume.resume
                } else
                    console.log("isUploadResume", isUploadResume)
            }
            const res = await axios.post("/api/user/application", {
                id: id,
                your_availability: yourAvailability,
                cover_latter: coverLatter,
                unavailable_reason: unavailableReason,
                question1: {
                    question: jobDetails.assessmentQuestions.question1,
                    answer: question1
                },
                question2: {
                    question: jobDetails.assessmentQuestions.question2,
                    answer: question2
                },
                resume: resume,
                jobId: jobDetails?.id
            })
            if (res?.statusText) {
                toast.success(res?.data?.message, {
                    position: "top-center"
                })
            }

            toast.dismiss(loadingToast);
            setALoading(false)
        } catch (error: any) {
            console.log("error >", error.message)
        }

    }


    const copyFromLastApplication = () => {
        setCoverLatter(prevCoverLatter.cover_latter)
    }

    console.log("jobDetails >", jobDetails)
    console.log("prevCoverLatter >", prevCoverLatter)

    return (
        <>
            {loading
                ?
                <div className='bg-white backdrop-blur-sm z-50 fixed inset-0  place-items-center overflow-y-auto data-open:animate-overlay-show data-closed:animate-overlay-hide flex items-center justify-center flex-col'>
                    <MiniLoadingCircle />
                    <div className='mt-2'>
                        job application loading...
                    </div>
                </div>
                :
                <div className='w-full'>
                    <Header variant='primary' />
                    <div className='flex  justify-center  py-6'>
                        <div>
                            <h2 className='mt-8 mb-2 text-2xl lg:text-3xl  py-3'>
                                {jobDetails.job_title} Intern ({jobDetails?.job_type} / {jobDetails?.location})
                            </h2>
                            <div className='w-[1000px] border rounded-md p-5'>
                                <form action="" onSubmit={handleApplication}>

                                    <div className='mb-4'>
                                        <h3 className=' mb-2 text-xl lg:text-xl  py-3 font-medium'>Cover letter</h3>
                                        <label className="block text-foreground-light text-sm mb-1" htmlFor="email">Why should you be hired for this role?
                                        </label>
                                        {prevCoverLatter && <button
                                            onClick={() => copyFromLastApplication()}
                                            className='text-primary flex items-center gap-2 text-sm mb-4'>
                                            <FiCopy />
                                            Copy from your last application & edit
                                        </button>
                                        }
                                        <textarea
                                            name='cover_letter'
                                            dirName='cover_letter'
                                            required
                                            value={coverLatter}
                                            onChange={(e) => setCoverLatter(e.target.value)}
                                            placeholder='Mention in detail what relevant skill or past experience you have for this internship. What excites you about this internship? Why would you be a good fit?'
                                            className='  min-h-[200px]  focus:outline-primary peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2'>
                                        </textarea>
                                    </div>

                                    <div className='mb-4'>
                                        <h3 className='mt-8 mb-2 text-xl lg:text-xl  py-3 font-medium'>Your availability</h3>
                                        <label className="block text-foreground-light text-sm mb-1" htmlFor="email">Confirm your availability
                                        </label>

                                        <div className='flex flex-col gap-1 mt-3'>
                                            <div className='flex items-center gap-2'>
                                                <input
                                                    name='yourAvailability'
                                                    type="checkbox"
                                                    className='w-4 h-4'
                                                    id='availabilityyes'
                                                    checked={yourAvailability}
                                                    onChange={() => handleToggle(true)}
                                                />
                                                <label className="block text-foreground-light text-sm mb-1" htmlFor="availabilityyes">Yes, I am available to join immediately
                                                </label>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <input
                                                    name='yourAvailability'
                                                    checked={!yourAvailability}
                                                    onChange={() => handleToggle(false)}
                                                    type="checkbox"
                                                    className='w-4 h-4'
                                                    id='availabilityno'
                                                />
                                                <label className="block text-foreground-light text-sm mb-1" htmlFor="availabilityno">No (Please specify your availability)
                                                </label>
                                            </div>
                                        </div>
                                        {!yourAvailability && <div>
                                            <textarea
                                                required={!yourAvailability && true}
                                                value={unavailableReason}
                                                onChange={(e) => setUnavailableReason(e.target.value)}
                                                name='unavailable_reason'
                                                className='w-full min-h-[200px] border p-3 text-[14px] text-blue-midnight_blue rounded-md focus:outline-primary mt-3'
                                                placeholder='Eg. I am available full-time in Pune for the next 6 months but will have exams for 15 days in June. '
                                            ></textarea>
                                        </div>
                                        }
                                    </div>

                                    {jobDetails?.assessmentQuestions?.question1 && jobDetails?.assessmentQuestions?.question2 && <div className='mb-4'>
                                        <h3 className='mt-8 mb-2 text-xl lg:text-xl  py-3 font-medium'>Assessment</h3>

                                        {jobDetails?.assessmentQuestions?.question1 && <div className='mb-4'>
                                            <label className="block text-foreground-light text-sm mb-1" htmlFor="email">Q1. {jobDetails?.assessmentQuestions?.question1}
                                            </label>
                                            <p className='text-[14px] text-blue-steel_blue'>If you want to share any documents or files, please upload it on Google Drive or Dropbox and paste the public link in the answer.</p>
                                            <textarea
                                                value={question1}
                                                required
                                                onChange={(e) => setQuestion1(e.target.value)}
                                                name='question1'
                                                className=' min-h-[200px]  focus:outline-primary mt-2 peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2'>
                                            </textarea>
                                        </div>}


                                        {jobDetails?.assessmentQuestions?.question2 && <div className=''>
                                            <label className="block text-foreground-light text-sm mb-1" htmlFor="email">Q2. {jobDetails?.assessmentQuestions?.question2}
                                            </label>
                                            <p className='text-[14px] text-blue-steel_blue'>If you want to share any documents or files, please upload it on Google Drive or Dropbox and paste the public link in the answer.</p>
                                            <textarea
                                                value={question2}
                                                required
                                                onChange={(e) => setQuestion2(e.target.value)}
                                                name='question2'
                                                className=' min-h-[200px]  focus:outline-primary mt-2 peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2'></textarea>
                                        </div>}


                                    </div>
                                    }




                                    <div className='mb-4'>
                                        <h3 className='mt-8  text-xl lg:text-xl  py-1 font-medium'>Custom resume <span className='font-normal text-sm text-blue-steel_blue'>
                                            (Optional)</span></h3>
                                        <label className="block text-foreground-light text-sm mb-5" htmlFor="email">
                                            Recruiter can download and view this resume
                                        </label>
                                        <input
                                            onChange={(e) => setResumeFileEvent(e)}
                                            type="file"
                                            accept='.pdf'
                                            id='resumeUpload'
                                        // className='hidden'
                                        />
                                        {/* <label htmlFor='resumeUpload' className='inline-flex border border-dashed border-blue-steel_blue items-center gap-3 w-2/4 justify-center px-16 py-3 text-blue-steel_blue'>
                                            <IoCloudUploadOutline />
                                            Upload file
                                        </label> */}
                                        <p className='text-[12px] text-blue-steel_blue mt-1'>Max file size: 10Mb. File type - PDF, DOC, DOCX</p>

                                    </div>
                                    <div className='flex justify-center mt-10'>
                                        <Button
                                            className={`px-10 ${ALoading && 'bg-primary/50 pointer-events-none'}`}
                                            disabled={session?.user?.role == "RECRUITER"}
                                        >
                                            {ALoading && <MiniLoadingCircle width="20" height="20" />
                                            }
                                            Submit
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                    <Footer />
                </div >
            }


        </>
    )
}


export default ApplicationForm
