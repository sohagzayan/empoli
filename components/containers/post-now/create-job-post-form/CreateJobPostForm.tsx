"use client"
import { Label } from '@/components/ui/label'
import { duration, experience_levels, jobType, job_profile, required_skills, skills } from '@/utils/data'
import React, { useEffect, useState } from 'react'
import { LuDollarSign } from 'react-icons/lu'
import { City, Country, State } from "country-state-city";
import { Button } from '@/components/ui/button'
import { Formik, FormikHelpers } from 'formik'
import { toast } from 'sonner'
import { job_facilities, postNewJobValidationSchema } from '@/utils/validation-schemas'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { getFormatDate } from '@/utils/utilati_func'
import axios from 'axios'
import RequiredSkills from '../../dashboard-content/post-new-job/required-skills/RequiredSkills'
import TextWrite from '@/components/shared/text-write/TextWrite'
import MiniLoadingCircle from '@/components/shared/mini-loading-circle/MiniLoadingCircle'
import JobProfileSelect from '../../find_job_page/job_profile_select/JobProfileSelect'


const CreateJobPostForm = () => {
    let countryData = Country.getAllCountries();
    const [stateData, setStateData] = useState<any>();
    const defaultBD = countryData.filter((c) => c.name == 'Bangladesh')
    const defaultState = stateData?.filter((c: any) => c.name == 'Dhaka District')
    const [cityData, setCityData] = useState<any>();
    const [country, setCountry] = useState(defaultBD[0]);
    const [state, setState] = useState<any>(defaultState);
    const [loading, setLoading] = useState(false)
    const [skillsError, setSkillsError] = useState<any>(null)
    const [applicationDeadline, setApplicationDeadline] = useState<any>(getFormatDate(new Date()));
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedFacilities, setSelectedFacilities] = useState<any>([]);
    const [selectedRequiredSkills, setSelectedRequiredSkills] = useState<any>([]);
    const [jobDescription, setJobDescription] = useState<any>('');
    const [jobDescriptionError, setJobDescriptionError] = useState<any>(null);
    const [jobRequiredSkillsError, setJobRequiredSkillsError] = useState<any>(null);

    const [jobTitleError, setJobTitleError] = useState<any>(null);
    const [jobTitleValue, setJobTitleValue] = useState('');

    const [jobResponsibilities, setJobResponsibilities] = useState<any>('');
    const [jobResponsibilitiesError, setJobResponsibilitiesError] = useState<any>(null);
    const [companyLogoUrl, setCompanyLogoUrl] = useState<any>('');
    const [imageUploadEventError, setImageUploadEventError] = useState<any>(null);
    const [validateHowToApplyError, setValidateHowToApplyError] = useState<any>(null)
    const [applyEmail, setApplyEmail] = useState('')
    const [applyWebsite, setApplyWebsite] = useState('')
    const [isExternalFieldValidate, setIsExternalFieldValidate] = useState<any>(false)




    const handleImageUpload = async (event: any) => {
        if (event) {
            const [imgData] = event.target.files
            console.log("event.target.files", event.target.files)
            const formData = new FormData()
            formData.append('file', imgData)
            formData.append("upload_preset", "apper_upload");
            try {
                const res = await axios.post('https://api.cloudinary.com/v1_1/da0dxyn2l/image/upload', formData)
                setCompanyLogoUrl(res.data.url)
                console.log('imagedata', res);
            } catch (error) {
                console.log("image upload error >", error)
            }
        }

    }



    useEffect(() => {
        setStateData(State.getStatesOfCountry(country?.isoCode));
    }, [country]);

    useEffect(() => {
        setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
    }, [state]);

    useEffect(() => {
        stateData && setState(stateData);
    }, [stateData]);



    function validateSkills(listOfSkills: any) {
        const minSkills = 1;
        const maxSkills = 10;

        const numberOfSkills = listOfSkills.length;

        if (numberOfSkills < minSkills) {
            setSkillsError(`Please add at least ${minSkills} skill.`)
            return false
        } else if (numberOfSkills > maxSkills) {
            setSkillsError(`You can add a maximum of ${maxSkills} skills.`)
            return false
        } else {
            setSkillsError(null)
            return true
        }
    }

    const handleCheckboxChange = (facilityName: string) => {
        const index = selectedFacilities.indexOf(facilityName.toLowerCase());
        if (index === -1) {
            setSelectedFacilities([...selectedFacilities, facilityName.toLowerCase()]);
        } else {
            const updatedFacilities = [...selectedFacilities];
            updatedFacilities.splice(index, 1);
            setSelectedFacilities(updatedFacilities);
        }
    };


    const handleJobDescriptionValidation = () => {
        if (jobDescription.trim().length < 10) {
            setJobDescriptionError('Job description must be at least 10 characters long.');
            return false;
        } else {
            setJobDescriptionError('');
            return true;
        }
    };


    const handleResponsibilitiesValidation = () => {
        if (jobResponsibilities.trim().length < 10) {
            setJobResponsibilitiesError('Job responsibilities must be at least 10 characters long.');
            return false;
        } else {
            setJobResponsibilitiesError('');
            return true;
        }
    };




    const validate_required_SkillsField = (skills: any) => {
        const minSkills = 3;
        const maxSkills = 30;

        // Check if skills array is not empty
        if (skills.length === 0) {
            setJobRequiredSkillsError("Please add at least one skill.")
            return false;
        }

        // Check if skills array length is within the allowed range
        if (skills.length < minSkills) {
            setJobRequiredSkillsError(`Please add at least ${minSkills} skills.`)
            return false;
        }
        if (skills.length > maxSkills) {
            setJobRequiredSkillsError(`You can add maximum ${maxSkills} skills.`)
            return false;
        }

        // If all validations pass, return null (indicating no error)
        setJobRequiredSkillsError(null)
        return true;
    };

    const validateCompanyLogoField = (event: any) => {
        // Check if a file is provided
        if (!event) {
            setImageUploadEventError("Please upload a company logo.")
            return false;
        }
        let file = event.target.files[0]

        // Check if the file is an image
        const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
        if (!allowedTypes.includes(file.type)) {
            setImageUploadEventError("Please upload a valid image file (JPEG, PNG, or GIF).")
            return false;
        }

        // Check if the file size is within the allowed range
        const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSizeInBytes) {
            setImageUploadEventError("The file size exceeds the maximum allowed size of 5MB.")
            return false;
        }

        // All validations pass, return true
        setImageUploadEventError(null)
        return true;
    };


    const handleValidateHowToApplyField = (applyEmail: string, applyWebsite: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

        // Check if at least one field is filled
        if (!applyEmail && !applyWebsite) {
            setValidateHowToApplyError("Please fill in at least one field (Email or Website)")
            return false;
        }

        // Validate email if provided
        if (applyEmail && !emailRegex.test(applyEmail)) {
            setValidateHowToApplyError("Please enter a valid email address.")
            return false;
        }

        if (applyWebsite && !urlRegex.test(applyWebsite)) {
            setValidateHowToApplyError("Please enter a valid website URL.")
            return;
        }

        // All validations pass, return true
        setValidateHowToApplyError(null)
        return true;
    };


    const handleExternalValidationField = () => {
        const isJobDescriptionField = handleJobDescriptionValidation()
        const isResponsibilitiesField = handleResponsibilitiesValidation()
        const isPassRequiredValidationSkills = validate_required_SkillsField(selectedRequiredSkills)
        // const isPassCompany_logoUpload = validateCompanyLogoField(imageUploadEvent)
        const isPassHowToApplyField = handleValidateHowToApplyField(applyEmail, applyWebsite)
        if (!isJobDescriptionField || !isResponsibilitiesField || !isPassRequiredValidationSkills || !isPassHowToApplyField) {
            setIsExternalFieldValidate(false)
            return
        } else {
            setIsExternalFieldValidate(true)
            return true
        }
    }


    const onSubmit = async (values: any, actions: FormikHelpers<any>) => {
        console.log("all valuessss > >> ..", values)
        setLoading(true)

        if (!isExternalFieldValidate) {
            return
        }

        console.log("companyLogoUrl >", companyLogoUrl)


        try {
            const { job_title } = values
            console.log("all values >>>", values)
            let response: any = await fetch('/api/recruiter/job/new', {
                method: 'POST',
                body: JSON.stringify(
                    {
                        ...values,
                        required_skills: selectedRequiredSkills,
                        applicationDeadline: applicationDeadline,
                        perks: selectedFacilities,
                        job_title: jobTitleValue,
                        job_description: jobDescription,
                        job_responsibilities: jobResponsibilities,
                        assessmentQuestions: {
                            question1: values.assessment_question1,
                            question2: values.assessment_question2,
                        },
                        how_to_apply: {
                            apply_email: applyEmail,
                            apply_website: applyWebsite
                        }
                    }),
            })
            const data = await response.json()
            console.log("response>>>", data)
            if (!response.ok) {
                setLoading(false)
                throw new Error(data.message)
            }
            setLoading(false)
            toast.success(data.message)

        } catch (error: any) {
            setLoading(false)
            console.log("error>>>", error)
            toast.error(error.message)
            actions.setErrors({ email: error.message || 'An error occurred' })
        }
        actions.setSubmitting(false)
    }


    const handleTagRemove = (tag: any) => {
        setSelectedRequiredSkills(selectedRequiredSkills.filter((selectedTag: any) => selectedTag !== tag));
    };


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

    // const handleSelect = (option: any) => {
    //     console.log('Selected:', option);
    // };

    console.log("jobTitleValue >> >", jobTitleValue)

    return (
        <div className='container lg:px-16 xl:px-20 ' >
            <div className='w-[850px] mx-auto py-10'>
                <h3 className=' text-[32px] font-medium text-blue-midnight_blue text-3xl md:text-5xl mb-2' >Find your perfect developer</h3>
                <p className='text-blue-steel_blue text-[14px] mb-6'>Get your job posting seen by thousands of job seekers.</p>
                <div className='bg-white mt-8'>
                    <Formik
                        initialValues={{
                            job_type: '',
                            salary_range_min: '',
                            salary_range_max: '',
                            experience: '',
                            qualifications: '',
                            applicationDeadline: '',
                            numberOfOpenings: '1',
                            assessment_question1: '',
                            assessment_question2: '',
                            job_duration: '2',
                            location: '',
                            company: '',
                            // company_logo: '',
                            office_location: defaultBD[0].name,
                        }}
                        validationSchema={postNewJobValidationSchema}
                        validateOnChange={false}
                        validateOnBlur={false}
                        enableReinitialize={true}
                        onSubmit={(values, actions) => {
                            onSubmit(values, actions)
                        }}
                    >
                        {({ values,
                            errors,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form
                                onSubmit={(e) => {
                                    e.stopPropagation()
                                    e.preventDefault()
                                    handleExternalValidationField()
                                    handleSubmit(e)
                                }}
                            >
                                <div className=''>


                                    <div className='mb-5'>
                                        <Label htmlFor="title" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>Job Title:</Label>
                                        <JobProfileSelect
                                            options={job_profile}
                                            setJobTitleError={setJobTitleError}
                                            jobTitleError={jobTitleError}
                                            jobTitleValue={jobTitleValue}
                                            setJobTitleValue={setJobTitleValue}
                                        />
                                        <p className="text-red-500 text-[14px] font-light py-1">{jobTitleError}</p>
                                    </div>


                                    <div className='mb-5'>
                                        <Label htmlFor="job_responsibilities" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>Job Description:</Label>
                                        <TextWrite
                                            content={jobDescription}
                                            onChange={setJobDescription}
                                        />
                                        <p className="text-red-500 text-[14px] font-light py-1">{jobDescriptionError}</p>
                                    </div>





                                    <div className='mb-5'>
                                        <Label htmlFor="job_responsibilities" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>Job Responsibilities:</Label>
                                        <TextWrite
                                            content={jobResponsibilities}
                                            onChange={setJobResponsibilities}
                                        />
                                        <p className="text-red-500 text-[14px] font-light py-1">{jobResponsibilitiesError}</p>
                                    </div>


                                    <div className='mb-5 w-full '>
                                        <Label htmlFor="job_type" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>Job Type:</Label>
                                        <select
                                            id="job_type"
                                            name="job_type"
                                            value={values.job_type}
                                            onChange={handleChange}
                                            className="bg-white px-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary focus:outline-primary block w-full p-2.5 "
                                        >
                                            <option selected>Select Job Type</option>
                                            {jobType.map((category, index) =>
                                                <option
                                                    key={category.label + category.value + index}
                                                    value={category.value}>{category.label}
                                                </option>)
                                            }
                                        </select>
                                        <p className="text-red-500 text-[14px] font-light py-1">{errors.job_type}</p>
                                    </div>

                                    <div className='mb-5 w-full '>
                                        <Label htmlFor="job_type" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>Company:</Label>
                                        <input
                                            name='company'
                                            id='company'
                                            type='text'
                                            value={values.company}
                                            onChange={handleChange}
                                            className='w-full  bg-transparent py-[0.5rem] px-[.75rem] text-[14px] outline-transparent border font-light text-blue-midnight_blue rounded-sm  focus:outline-primary'
                                        />
                                        <p className="text-red-500 text-[14px] font-light py-1">{errors.company}</p>
                                    </div>


                                    {/* <div className='mb-5 w-full '>
                                        <div className="grid w-full items-center gap-1.5">
                                            <Label htmlFor="job_type" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>Company logo:</Label>
                                            <Input
                                                name='company_logo'
                                                id="picture"
                                                type="file"
                                                className='w-full'
                                                // value={values.company_logo}
                                                // value={imageUploadEvent}
                                                onChange={(event) => setImageUploadEvent(event)}
                                            />
                                        </div>
                                        <p className="text-red-500 text-[14px] font-light py-1">{imageUploadEventError}</p>
                                    </div> */}



                                    <div className='mb-5 w-full '>
                                        <Label htmlFor="location" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>Location:</Label>
                                        <select
                                            id="location"
                                            name="location"
                                            value={values.location}
                                            onChange={handleChange}
                                            className="bg-white px-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary focus:outline-primary block w-full p-2.5 "
                                        >
                                            <option selected value="">Select an option</option>
                                            <option value="remote">Remote</option>
                                            <option value="on-site">On-site</option>
                                            <option value="hybrid">Hybrid</option>

                                        </select>
                                        <p className="text-red-500 text-[14px] font-light py-1">{errors.location}</p>
                                    </div>

                                    <div className='mb-5'>
                                        <Label htmlFor="location" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>Office location:</Label>
                                        <input
                                            id='office_location'
                                            name='office_location'
                                            value={values.office_location}
                                            onChange={handleChange}
                                            // value={defaultBD[0].name}
                                            list='countryList'
                                            type="text"
                                            className='w-full h-[2.5rem] bg-transparent py-[0.5rem] px-[.75rem] text-[14px] outline-transparent border font-light text-blue-midnight_blue rounded-sm focus:outline-primary'
                                        />
                                        <p className="text-red-500 text-[14px] font-light py-1">{errors.office_location}</p>
                                        <datalist id="countryList">
                                            {countryData.map((country, index) => <option
                                                key={country.name + index}
                                                value={country.name}>{country.name}</option>
                                            )}
                                        </datalist>
                                    </div>


                                    <div className='mb-5 w-full'>
                                        <Label htmlFor="apply_email" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>How to apply:</Label>
                                        <div className='flex items-center gap-2 w-full'>
                                            <div className='w-full'>
                                                <input
                                                    name='apply_email'
                                                    id='apply_email'
                                                    type='text'
                                                    value={applyEmail}
                                                    onChange={(e) => setApplyEmail(e.target.value)}
                                                    className='w-full  bg-transparent py-[0.5rem] px-[.75rem] text-[14px] outline-transparent border font-light text-blue-midnight_blue rounded-sm  focus:outline-primary'
                                                    placeholder='Email'
                                                />
                                            </div>
                                            <p className='text-blue-midnight_blue'>or</p>
                                            <div className='w-full'>
                                                <input
                                                    name='apply_website'
                                                    id='apply_website'
                                                    type='text'
                                                    value={applyWebsite}
                                                    onChange={(e) => setApplyWebsite(e.target.value)}
                                                    className='w-full  bg-transparent py-[0.5rem] px-[.75rem] text-[14px] outline-transparent border font-light text-blue-midnight_blue rounded-sm  focus:outline-primary'
                                                    placeholder='Website'
                                                />

                                            </div>
                                        </div>
                                        <p className="text-red-500 text-[14px] font-light py-1">{validateHowToApplyError}</p>
                                    </div>



                                    <div className='mb-5'>
                                        <Label htmlFor="payment_frequency" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>Required Skills:</Label>
                                        <RequiredSkills {...{ selectedRequiredSkills, setSelectedRequiredSkills, placeholder: "Select skills", dropdownOptions: required_skills }} />
                                        <p className="text-red-500 text-[14px] font-light py-1">{jobRequiredSkillsError}</p>
                                    </div>



                                    <div className='mb-5'>
                                        <Label htmlFor="qualifications" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>Qualifications <span className='text-[12px] text-blue-steel_blue'>(optional)</span>:</Label>
                                        <textarea
                                            name='qualifications'
                                            id='qualifications'
                                            value={values.qualifications}
                                            onChange={handleChange}
                                            className='w-full  bg-transparent py-[0.5rem] px-[.75rem] text-[14px] outline-transparent border font-light text-blue-midnight_blue rounded-sm min-h-[150px] focus:outline-primary'
                                            placeholder='Qualifications'

                                        />
                                        <p className="text-red-500 text-[14px] font-light py-1">{errors.qualifications}</p>
                                    </div>


                                    <div className='mb-5'>
                                        <Label htmlFor="experience" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>Experience:</Label>

                                        <select
                                            id='experience'
                                            name='experience'
                                            value={values.experience}
                                            onChange={handleChange}

                                            className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2">
                                            <option selected value="">Experience</option>
                                            {experience_levels.map((ex) => <option key={ex} value={ex}>{ex}</option>
                                            )}
                                        </select>



                                        <p className="text-red-500 text-[14px] font-light py-1">{errors.experience}</p>
                                    </div>


                                    <div className='mb-5 flex items-center justify-between'>
                                        <div className='flex flex-col relative'>
                                            <Label htmlFor="experience" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>Application Deadline:</Label>
                                            <button
                                                onClick={() => setShowDatePicker((prev) => !prev)}
                                                className=' block bg-transparent py-[0.4rem] px-[.75rem] text-[14px] outline-transparent  font-light text-blue-midnight_blue rounded-sm focus:outline-primary border relative'
                                            >
                                                {applicationDeadline}
                                            </button>
                                            {showDatePicker &&
                                                <div className='absolute top-[100%] left-0'>
                                                    <DatePicker
                                                        // className=' block bg-transparent py-[0.5rem] px-[.75rem] text-[14px] outline-transparent  font-light text-blue-midnight_blue rounded-sm focus:outline-primary border '
                                                        inline
                                                        dateFormat="dd MMM, YYYY"
                                                        selected={applicationDeadline}
                                                        onChange={(date: any) => {
                                                            const formatDate = getFormatDate(date)
                                                            setApplicationDeadline(formatDate)
                                                        }}
                                                    />
                                                </div>
                                            }
                                            <p className="text-red-500 text-[14px] font-light py-1">{errors.applicationDeadline}</p>

                                        </div>

                                        <div className='flex flex-col'>
                                            <Label htmlFor="job_duration" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>Job duration:</Label>
                                            <input
                                                id='job_duration'
                                                name='job_duration'
                                                value={values.job_duration}
                                                onChange={handleChange}
                                                // value={defaultBD[0].name}
                                                list='job_duration'
                                                type="number"
                                                className='w-full  bg-transparent py-1.5 px-[.75rem] text-[14px] outline-transparent border font-light text-blue-midnight_blue rounded-sm focus:outline-primary'
                                            />
                                            <datalist id="job_duration">
                                                {duration.map((duration, index) => <option
                                                    key={duration + index}
                                                    value={duration}>{duration}</option>
                                                )}
                                            </datalist>
                                            <p className="text-red-500 text-[14px] font-light py-1">{errors.job_duration}</p>
                                        </div>
                                        <div className='flex flex-col'>
                                            <Label htmlFor="numberOfOpenings" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>Number Of Openings:</Label>
                                            <input
                                                id='numberOfOpenings'
                                                name='numberOfOpenings'
                                                value={values.numberOfOpenings}
                                                onChange={handleChange}
                                                // value={defaultBD[0].name}
                                                list='numberOfOpenings'
                                                type="number"
                                                className='w-full  bg-transparent py-1.5 px-[.75rem] text-[14px] outline-transparent border font-light text-blue-midnight_blue rounded-sm focus:outline-primary'
                                            />
                                            <datalist id="numberOfOpenings">
                                                {duration.map((duration, index) => <option
                                                    key={duration + index}
                                                    value={duration}>{duration}</option>
                                                )}
                                            </datalist>

                                            <p className="text-red-500 text-[14px] font-light py-1">{errors.numberOfOpenings}</p>
                                        </div>
                                    </div>

                                    <div className='mb-5'>
                                        <Label htmlFor="apply_email" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>Perks:</Label>
                                        <div className='flex  flex-col gap-2'>
                                            {job_facilities.map((f, index) => <div key={f.name + index} className='flex items-center gap-2'>
                                                <input
                                                    id={f.name}
                                                    type="checkbox"
                                                    value={f.name}
                                                    className='h-4 w-4'
                                                    checked={selectedFacilities.includes(f.name.toLowerCase())}
                                                    onChange={() => handleCheckboxChange(f.name)}
                                                />
                                                <label
                                                    htmlFor={f.name}
                                                    className='text-[16px] text-blue-midnight_blue'
                                                >
                                                    {f.name}
                                                </label>
                                            </div>)}

                                        </div>
                                    </div>


                                    <div className='mb-5 '>
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger>
                                                    <div className='text-blue-midnight_blue text-[16px]'>
                                                        Assessment question 1 <span className='text-[12px] text-blue-steel_blue'>(optional)</span>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <div>
                                                        <textarea
                                                            name='assessment_question1'
                                                            id='assessment_question1'
                                                            value={values.assessment_question1}
                                                            onChange={handleChange}
                                                            className='w-full  bg-transparent py-[0.5rem] px-[.75rem] text-[14px] outline-transparent border font-light text-blue-midnight_blue rounded-sm min-h-[150px] focus:outline-primary'
                                                            placeholder='Type your question here'
                                                        />
                                                        <p className="text-red-500 text-[14px] font-light py-1">{errors.assessment_question1}</p>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-2">
                                                <AccordionTrigger>
                                                    <div className='text-blue-midnight_blue text-[16px]'>
                                                        Assessment question 2 <span className='text-[12px] text-blue-steel_blue'>(optional)</span>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <div>
                                                        <textarea
                                                            name='assessment_question2'
                                                            id='assessment_question2'
                                                            value={values.assessment_question2}
                                                            onChange={handleChange}
                                                            className='w-full  bg-transparent py-[0.5rem] px-[.75rem] text-[14px] outline-transparent border font-light text-blue-midnight_blue rounded-sm min-h-[150px] focus:outline-primary'
                                                            placeholder='Type your question here'
                                                        />
                                                        <p className="text-red-500 text-[14px] font-light py-1">{errors.assessment_question2}</p>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>

                                    <div>
                                        <Label htmlFor="payment_frequency" className='text-[16px] capitalize text-blue-midnight_blue mb-1 inline-block'>Salary:</Label>
                                        <div className='mb-5  w-full'>
                                            <div className='w-full col-span-6 flex items-center gap-3'>
                                                <div className='w-full'>
                                                    <div className='w-full border grid grid-cols-12'>
                                                        <h5 className='bg-primary-25 px-2 text-blue-midnight_blue  h-full col-span-2 flex items-center justify-center'><LuDollarSign /></h5>
                                                        <input
                                                            id='salary_range_min'
                                                            name='salary_range_min'
                                                            value={values.salary_range_min}
                                                            onChange={handleChange}
                                                            type="number"
                                                            placeholder='min'
                                                            className='w-full h-[2.5rem] bg-transparent py-[0.5rem] px-[.75rem] text-[14px] outline-transparent  font-light text-blue-midnight_blue rounded-sm focus:outline-primary col-span-10'
                                                        />
                                                    </div>
                                                    <p className="text-red-500 text-[14px] font-light mt-1 ">{errors.salary_range_min}</p>
                                                </div>
                                                <div className='w-full'>
                                                    <div className='w-full border grid grid-cols-12'>
                                                        <h5 className='bg-primary-25 px-2 text-blue-midnight_blue  h-full col-span-2 flex items-center justify-center'><LuDollarSign /></h5>
                                                        <input
                                                            name='salary_range_max'
                                                            id='salary_range_min'
                                                            value={values.salary_range_max}
                                                            onChange={handleChange}
                                                            type="number"
                                                            placeholder='max'
                                                            className='w-full h-[2.5rem] bg-transparent py-[0.5rem] px-[.75rem] text-[14px] outline-transparent  font-light text-blue-midnight_blue rounded-sm focus:outline-primary col-span-10'
                                                        />
                                                    </div>
                                                    <p className="text-red-500 text-[14px] font-light mt-1 ">{errors.salary_range_max}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <Button disabled={loading} type='submit' className='mt-6 flex items-center gap-2'>
                                    {loading && <MiniLoadingCircle width="20" height="20" />
                                    }
                                    Post Now
                                </Button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}



export default CreateJobPostForm

