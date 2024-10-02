'use client';
import Footer from '@/components/shared/footer/Footer';
import MiniLoadingCircle from '@/components/shared/mini-loading-circle/MiniLoadingCircle';
import Header from '@/components/shared/Nav/Header';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import { toast } from 'sonner';

const ApplicationForm = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [ALoading, setALoading] = useState(false);
  const [jobDetails, setJobDetails] = useState<any>({});

  const [yourAvailability, setYourAvailability] = useState(true);
  const [coverLatter, setCoverLatter] = useState('');
  const [unavailableReason, setUnavailableReason] = useState('');
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [resumeFileEvent, setResumeFileEvent] = useState<any>(null);
  const [prevCoverLatter, setPrevCoverLatter] = useState<any>({});

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
        const prevCoverLatter = await axios.get(
          `/api/user/recent_cover_letter/${id}`,
        );
        setPrevCoverLatter(prevCoverLatter.data);
        console.log('PrevCoverLatter', prevCoverLatter);
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

  const handleFileUpload = async (event: any) => {
    if (event) {
      const [fileData] = event.target.files;
      console.log('event.target.files', event.target.files);

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
        const res = await axios.post(
          'https://api.cloudinary.com/v1_1/da0dxyn2l/auto/upload',
          formData,
        );
        console.log('file upload response:', res);

        // Handle the response according to your needs
        if (res.data && res.data.url) {
          // Handle PDF upload
          console.log('PDF uploaded successfully:', res.data.url);
          return {
            resume: res.data.url,
            success: true,
          };
        } else {
          // console.log('Unexpected response:', res);
          return {
            error: 'Unexpected Error upload resume ',
            success: false,
          };
        }
      } catch (error) {
        // console.log("File upload error:", error);
        return {
          error: 'Resume upload error',
          success: false,
        };
      }
    }
  };

  const handleApplication = async (e: any) => {
    e.preventDefault();
    setALoading(true);
    const loadingToast = toast.loading('Submitting in...', {
      position: 'bottom-center',
      // autoClose: false
    });

    console.log('application submit');
    try {
      let resume = null;
      if (resumeFileEvent) {
        const isUploadResume = await handleFileUpload(resumeFileEvent);
        if (isUploadResume?.success) {
          resume = isUploadResume.resume;
        } else console.log('isUploadResume', isUploadResume);
      }
      const res = await axios.post('/api/user/application', {
        id,
        your_availability: yourAvailability,
        cover_latter: coverLatter,
        unavailable_reason: unavailableReason,
        question1: {
          question: jobDetails.assessmentQuestions.question1,
          answer: question1,
        },
        question2: {
          question: jobDetails.assessmentQuestions.question2,
          answer: question2,
        },
        resume,
        jobId: jobDetails?.id,
      });
      if (res?.statusText) {
        toast.success(res?.data?.message, {
          position: 'top-center',
        });
      }

      toast.dismiss(loadingToast);
      setALoading(false);
    } catch (error: any) {
      console.log('error >', error.message);
    }
  };

  const copyFromLastApplication = () => {
    setCoverLatter(prevCoverLatter.cover_latter);
  };

  console.log('jobDetails >', jobDetails);
  console.log('prevCoverLatter >', prevCoverLatter);

  return (
    <>
      {loading ? (
        <div className="data-open:animate-overlay-show data-closed:animate-overlay-hide fixed inset-0 z-50 flex flex-col place-items-center items-center justify-center overflow-y-auto bg-white backdrop-blur-sm">
          <MiniLoadingCircle />
          <div className="mt-2">job application loading...</div>
        </div>
      ) : (
        <div className="w-full">
          <Header />
          <div className="flex justify-center py-6">
            <div>
              <h2 className="mb-2 mt-8 py-3 text-2xl lg:text-3xl">
                {jobDetails.job_title} Intern ({jobDetails?.job_type} /{' '}
                {jobDetails?.location})
              </h2>
              <div className="w-[1000px] rounded-md border p-5">
                <form action="" onSubmit={handleApplication}>
                  <div className="mb-4">
                    <h3 className="mb-2 py-3 text-xl font-medium lg:text-xl">
                      Cover letter
                    </h3>
                    <label
                      className="text-foreground-light mb-1 block text-sm"
                      htmlFor="email"
                    >
                      Why should you be hired for this role?
                    </label>
                    {prevCoverLatter && (
                      <button
                        onClick={() => copyFromLastApplication()}
                        className="text-primary mb-4 flex items-center gap-2 text-sm"
                      >
                        <FiCopy />
                        Copy from your last application & edit
                      </button>
                    )}
                    <textarea
                      name="cover_letter"
                      required
                      value={coverLatter}
                      onChange={(e) => setCoverLatter(e.target.value)}
                      placeholder="Mention in detail what relevant skill or past experience you have for this internship. What excites you about this internship? Why would you be a good fit?"
                      className="focus:outline-primary peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-destructive-200 border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 group box-border block min-h-[200px] w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus-visible:shadow-md"
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <h3 className="mb-2 mt-8 py-3 text-xl font-medium lg:text-xl">
                      Your availability
                    </h3>
                    <label
                      className="text-foreground-light mb-1 block text-sm"
                      htmlFor="email"
                    >
                      Confirm your availability
                    </label>

                    <div className="mt-3 flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <input
                          name="yourAvailability"
                          type="checkbox"
                          className="h-4 w-4"
                          id="availabilityyes"
                          checked={yourAvailability}
                          onChange={() => handleToggle(true)}
                        />
                        <label
                          className="text-foreground-light mb-1 block text-sm"
                          htmlFor="availabilityyes"
                        >
                          Yes, I am available to join immediately
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          name="yourAvailability"
                          checked={!yourAvailability}
                          onChange={() => handleToggle(false)}
                          type="checkbox"
                          className="h-4 w-4"
                          id="availabilityno"
                        />
                        <label
                          className="text-foreground-light mb-1 block text-sm"
                          htmlFor="availabilityno"
                        >
                          No (Please specify your availability)
                        </label>
                      </div>
                    </div>
                    {!yourAvailability && (
                      <div>
                        <textarea
                          required={!yourAvailability && true}
                          value={unavailableReason}
                          onChange={(e) => setUnavailableReason(e.target.value)}
                          name="unavailable_reason"
                          className="text-blue-midnight_blue focus:outline-primary mt-3 min-h-[200px] w-full rounded-md border p-3 text-[14px]"
                          placeholder="Eg. I am available full-time in Pune for the next 6 months but will have exams for 15 days in June. "
                        ></textarea>
                      </div>
                    )}
                  </div>

                  {jobDetails?.assessmentQuestions?.question1 &&
                    jobDetails?.assessmentQuestions?.question2 && (
                      <div className="mb-4">
                        <h3 className="mb-2 mt-8 py-3 text-xl font-medium lg:text-xl">
                          Assessment
                        </h3>

                        {jobDetails?.assessmentQuestions?.question1 && (
                          <div className="mb-4">
                            <label
                              className="text-foreground-light mb-1 block text-sm"
                              htmlFor="email"
                            >
                              Q1. {jobDetails?.assessmentQuestions?.question1}
                            </label>
                            <p className="text-blue-steel_blue text-[14px]">
                              If you want to share any documents or files,
                              please upload it on Google Drive or Dropbox and
                              paste the public link in the answer.
                            </p>
                            <textarea
                              value={question1}
                              required
                              onChange={(e) => setQuestion1(e.target.value)}
                              name="question1"
                              className="focus:outline-primary peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-destructive-200 border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 group mt-2 box-border block min-h-[200px] w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus-visible:shadow-md"
                            ></textarea>
                          </div>
                        )}

                        {jobDetails?.assessmentQuestions?.question2 && (
                          <div className="">
                            <label
                              className="text-foreground-light mb-1 block text-sm"
                              htmlFor="email"
                            >
                              Q2. {jobDetails?.assessmentQuestions?.question2}
                            </label>
                            <p className="text-blue-steel_blue text-[14px]">
                              If you want to share any documents or files,
                              please upload it on Google Drive or Dropbox and
                              paste the public link in the answer.
                            </p>
                            <textarea
                              value={question2}
                              required
                              onChange={(e) => setQuestion2(e.target.value)}
                              name="question2"
                              className="focus:outline-primary peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-destructive-200 border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 group mt-2 box-border block min-h-[200px] w-full rounded-md border px-4 py-2 text-sm shadow-sm outline-none transition-all focus:ring-2 focus-visible:shadow-md"
                            ></textarea>
                          </div>
                        )}
                      </div>
                    )}

                  <div className="mb-4">
                    <h3 className="mt-8 py-1 text-xl font-medium lg:text-xl">
                      Custom resume{' '}
                      <span className="text-blue-steel_blue text-sm font-normal">
                        (Optional)
                      </span>
                    </h3>
                    <label
                      className="text-foreground-light mb-5 block text-sm"
                      htmlFor="email"
                    >
                      Recruiter can download and view this resume
                    </label>
                    <input
                      onChange={(e) => setResumeFileEvent(e)}
                      type="file"
                      accept=".pdf"
                      id="resumeUpload"
                      // className='hidden'
                    />
                    {/* <label htmlFor='resumeUpload' className='inline-flex border border-dashed border-blue-steel_blue items-center gap-3 w-2/4 justify-center px-16 py-3 text-blue-steel_blue'>
                                            <IoCloudUploadOutline />
                                            Upload file
                                        </label> */}
                    <p className="text-blue-steel_blue mt-1 text-[12px]">
                      Max file size: 10Mb. File type - PDF, DOC, DOCX
                    </p>
                  </div>
                  <div className="mt-10 flex justify-center">
                    <Button
                      className={`px-10 ${ALoading && 'bg-primary/50 pointer-events-none'}`}
                      disabled={session?.user?.role == 'RECRUITER'}
                    >
                      {ALoading && <MiniLoadingCircle width="20" height="20" />}
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ApplicationForm;
