'use client';
import RichTextEditor from '@/components/shared/rich-text-editor/RichTextEditor';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { duration, jobType, required_skills } from '@/utils/data';
import { getFormatDate } from '@/utils/utilati_func';
import {
  job_facilities,
  postNewJobValidationSchema,
} from '@/utils/validation-schemas';
import { Country } from 'country-state-city';
import { Formik, FormikHelpers } from 'formik';
import { draftToMarkdown } from 'markdown-draft-js';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { LuDollarSign } from 'react-icons/lu';
import { toast } from 'sonner';
import JobResponsibilities from './job-responsibilities/JobResponsibilities';
import RequiredSkills from './required-skills/RequiredSkills';

export default function PostNewJob() {
  const countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState<any>();
  const defaultBD = countryData.filter((c) => c.name == 'Bangladesh');
  const defaultState = stateData?.filter(
    (c: any) => c.name == 'Dhaka District',
  );
  const [_cityData, setCityData] = useState<any>();
  const [country, _setCountry] = useState(defaultBD[0]);
  const [state, setState] = useState<any>(defaultState);
  const [_loading, setLoading] = useState(false);
  // const [listOfSkills, setListOfSkills] = useState([]);
  // const [skillsError, setSkillsError] = useState<any>(null);
  const [applicationDeadline, setApplicationDeadline] = useState<any>(
    getFormatDate(new Date()),
  );
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedFacilities, setSelectedFacilities] = useState<any>([]);
  const [selectedRequiredSkills, setSelectedRequiredSkills] = useState<any>([]);
  const [jobDescription, setJobDescription] = useState<any>('');
  const [jobDescriptionError, setJobDescriptionError] = useState<any>(null);
  const [jobRequiredSkillsError, setJobRequiredSkillsError] =
    useState<any>(null);

  const [jobResponsibilities, setJobResponsibilities] = useState<any>('');
  const [jobResponsibilitiesError, setJobResponsibilitiesError] =
    useState<any>(null);
  const [companyLogoUrl, _setCompanyLogoUrl] = useState<any>('');
  const [imageUploadEvent, setImageUploadEvent] = useState<any>(null);
  const [imageUploadEventError, setImageUploadEventError] = useState<any>(null);
  const [validateHowToApplyError, setValidateHowToApplyError] =
    useState<any>(null);
  const [applyEmail, setApplyEmail] = useState('');
  const [applyWebsite, setApplyWebsite] = useState('');
  const [isExternalFieldValidate, setIsExternalFieldValidate] =
    useState<any>(false);

  // const handleImageUpload = async (event: any) => {
  //   if (event) {
  //     const [imgData] = event.target.files;
  //     console.log('event.target.files', event.target.files);
  //     const formData = new FormData();
  //     formData.append('file', imgData);
  //     formData.append('upload_preset', 'apper_upload');
  //     try {
  //       const res = await axios.post(
  //         'https://api.cloudinary.com/v1_1/da0dxyn2l/image/upload',
  //         formData,
  //       );
  //       setCompanyLogoUrl(res.data.url);
  //       console.log('imagedata', res);
  //     } catch (error) {
  //       console.log('image upload error >', error);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   setStateData(State.getStatesOfCountry(country?.isoCode));
  // }, [country?.isoCode]);

  // useEffect(() => {
  //   setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  // }, [country?.isoCode,state?.isoCode ]);

  // useEffect(() => {
  //   stateData && setState(stateData);
  // }, [stateData]);

  // function validateSkills(listOfSkills: any) {
  //   const minSkills = 1;
  //   const maxSkills = 10;

  //   const numberOfSkills = listOfSkills.length;

  //   if (numberOfSkills < minSkills) {
  //     setSkillsError(`Please add at least ${minSkills} skill.`);
  //     return false;
  //   } else if (numberOfSkills > maxSkills) {
  //     setSkillsError(`You can add a maximum of ${maxSkills} skills.`);
  //     return false;
  //   } else {
  //     setSkillsError(null);
  //     return true;
  //   }
  // }

  const handleCheckboxChange = (facilityName: string) => {
    const index = selectedFacilities.indexOf(facilityName);
    if (index === -1) {
      setSelectedFacilities([...selectedFacilities, facilityName]);
    } else {
      const updatedFacilities = [...selectedFacilities];
      updatedFacilities.splice(index, 1);
      setSelectedFacilities(updatedFacilities);
    }
  };

  const handleJobDescriptionValidation = () => {
    if (jobDescription.trim().length < 10) {
      setJobDescriptionError(
        'Job description must be at least 10 characters long.',
      );
      return false;
    } else {
      setJobDescriptionError('');
      return true;
    }
  };

  const handleResponsibilitiesValidation = () => {
    if (jobResponsibilities.trim().length < 10) {
      setJobResponsibilitiesError(
        'Job responsibilities must be at least 10 characters long.',
      );
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
      setJobRequiredSkillsError('Please add at least one skill.');
      return false;
    }

    // Check if skills array length is within the allowed range
    if (skills.length < minSkills) {
      setJobRequiredSkillsError(`Please add at least ${minSkills} skills.`);
      return false;
    }
    if (skills.length > maxSkills) {
      setJobRequiredSkillsError(`You can add maximum ${maxSkills} skills.`);
      return false;
    }

    // If all validations pass, return null (indicating no error)
    setJobRequiredSkillsError(null);
    return true;
  };

  const validateCompanyLogoField = (event: any) => {
    // Check if a file is provided
    if (!event) {
      setImageUploadEventError('Please upload a company logo.');
      return false;
    }
    const file = event.target.files[0];

    // Check if the file is an image
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      setImageUploadEventError(
        'Please upload a valid image file (JPEG, PNG, or GIF).',
      );
      return false;
    }

    // Check if the file size is within the allowed range
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSizeInBytes) {
      setImageUploadEventError(
        'The file size exceeds the maximum allowed size of 5MB.',
      );
      return false;
    }

    // All validations pass, return true
    setImageUploadEventError(null);
    return true;
  };

  const handleValidateHowToApplyField = (
    applyEmail: string,
    applyWebsite: string,
  ) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    // Check if at least one field is filled
    if (!applyEmail && !applyWebsite) {
      setValidateHowToApplyError(
        'Please fill in at least one field (Email or Website)',
      );
      return false;
    }

    // Validate email if provided
    if (applyEmail && !emailRegex.test(applyEmail)) {
      setValidateHowToApplyError('Please enter a valid email address.');
      return false;
    }

    if (applyWebsite && !urlRegex.test(applyWebsite)) {
      setValidateHowToApplyError('Please enter a valid website URL.');
      return;
    }

    // All validations pass, return true
    setValidateHowToApplyError(null);
    return true;
  };

  const handleExternalValidationField = () => {
    const isJobDescriptionField = handleJobDescriptionValidation();
    const isResponsibilitiesField = handleResponsibilitiesValidation();
    const isPassRequiredValidationSkills = validate_required_SkillsField(
      selectedRequiredSkills,
    );
    const isPassCompany_logoUpload = validateCompanyLogoField(imageUploadEvent);
    const isPassHowToApplyField = handleValidateHowToApplyField(
      applyEmail,
      applyWebsite,
    );
    if (
      !isJobDescriptionField ||
      !isResponsibilitiesField ||
      !isPassRequiredValidationSkills ||
      !isPassCompany_logoUpload ||
      !isPassHowToApplyField
    ) {
      setIsExternalFieldValidate(false);
      return;
    } else {
      setIsExternalFieldValidate(true);
      return true;
    }
  };

  const onSubmit = async (values: any, actions: FormikHelpers<any>) => {
    console.log('all valuessss > >> ..', values);
    setLoading(true);

    if (!isExternalFieldValidate) {
      return;
    }

    try {
      // const { job_title } = values;
      console.log('all values >>>', values);
      const response: any = await fetch('/api/recruiter/job/new', {
        method: 'POST',
        body: JSON.stringify({
          ...values,
          required_skills: selectedRequiredSkills,
          applicationDeadline,
          perks: selectedFacilities,
          company_logo: companyLogoUrl,
          job_description: jobDescription,
          job_responsibilities: jobResponsibilities,
          assessmentQuestions: {
            question1: values.assessment_question1,
            question2: values.assessment_question2,
          },
          how_to_apply: {
            apply_email: applyEmail,
            apply_website: applyWebsite,
          },
        }),
      });
      const data = await response.json();
      console.log('response>>>', data);
      if (!response.ok) {
        throw new Error(data.message);
      }
      setLoading(false);
      toast.success(data.message);
    } catch (error: any) {
      setLoading(false);
      console.log('error>>>', error);
      toast.error(error.message);
      actions.setErrors({ email: error.message || 'An error occurred' });
    }
    actions.setSubmitting(false);
  };

  // const handleTagRemove = (tag: any) => {
  //   setSelectedRequiredSkills(
  //     selectedRequiredSkills.filter((selectedTag: any) => selectedTag !== tag),
  //   );
  // };

  console.log('selectedRequiredSkills > >', selectedRequiredSkills);

  return (
    <div>
      <div>
        <h3 className="text-blue-midnight_blue text-[32px] font-medium">
          Find your perfect developer
        </h3>
        <p className="text-blue-steel_blue mb-6 text-[14px]">
          Get your job posting seen by thousands of job seekers.
        </p>
        <div className="bg-white">
          <Formik
            initialValues={{
              job_title: '',
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
              onSubmit(values, actions);
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form
                onSubmit={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleExternalValidationField();
                  handleSubmit(e);
                }}
              >
                <div className="">
                  <div className="mb-5">
                    <Label
                      htmlFor="title"
                      className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                    >
                      Job Title:
                    </Label>
                    <input
                      type="text"
                      name="job_title"
                      id="job_title"
                      value={values.job_title}
                      onChange={handleChange}
                      className="text-blue-midnight_blue focus:outline-primary h-[2.5rem] w-full rounded-sm border bg-transparent px-[.75rem] py-[0.5rem] text-[14px] font-light outline-transparent"
                      placeholder="Web Developer"
                    />
                    <p className="text-red-500 py-1 text-[14px] font-light">
                      {errors.job_title}
                    </p>
                  </div>

                  <div className="mb-5">
                    <Label
                      htmlFor="job_responsibilities"
                      className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                    >
                      Job Description:
                    </Label>
                    <RichTextEditor
                      onChange={(draft) => {
                        setJobDescription(draftToMarkdown(draft));
                        console.log('deaft text', draftToMarkdown(draft));
                      }}
                      // ref={field.ref}
                    />
                    <p className="text-red-500 py-1 text-[14px] font-light">
                      {jobDescriptionError}
                    </p>
                  </div>

                  <div className="mb-5">
                    <Label
                      htmlFor="job_responsibilities"
                      className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                    >
                      Job Responsibilities :
                    </Label>
                    <JobResponsibilities
                      onChange={(draft) => {
                        setJobResponsibilities(draftToMarkdown(draft));
                        console.log(
                          'deaft job responsibolatis',
                          draftToMarkdown(draft),
                        );
                      }}
                      // ref={field.ref}
                    />
                    <p className="text-red-500 py-1 text-[14px] font-light">
                      {jobResponsibilitiesError}
                    </p>
                  </div>

                  <div className="mb-5 w-full">
                    <Label
                      htmlFor="job_type"
                      className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                    >
                      Job Type:
                    </Label>
                    <select
                      id="job_type"
                      name="job_type"
                      value={values.job_type}
                      onChange={handleChange}
                      className="focus:ring-primary focus:border-primary focus:outline-primary block w-full rounded-lg border border-gray-300 bg-white p-2.5 px-2 text-sm text-gray-900"
                    >
                      <option selected>Select Job Type</option>
                      {jobType.map((category, index) => (
                        <option
                          key={category.label + category.value + index}
                          value={category.value}
                        >
                          {category.label}
                        </option>
                      ))}
                    </select>
                    <p className="text-red-500 py-1 text-[14px] font-light">
                      {errors.job_type}
                    </p>
                  </div>

                  <div className="mb-5 w-full">
                    <Label
                      htmlFor="job_type"
                      className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                    >
                      Company:
                    </Label>
                    <input
                      name="company"
                      id="company"
                      type="text"
                      value={values.company}
                      onChange={handleChange}
                      className="text-blue-midnight_blue focus:outline-primary w-full rounded-sm border bg-transparent px-[.75rem] py-[0.5rem] text-[14px] font-light outline-transparent"
                    />
                    <p className="text-red-500 py-1 text-[14px] font-light">
                      {errors.company}
                    </p>
                  </div>

                  <div className="mb-5 w-full">
                    <div className="grid w-full items-center gap-1.5">
                      <Label
                        htmlFor="job_type"
                        className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                      >
                        Company logo:
                      </Label>
                      <Input
                        name="company_logo"
                        id="picture"
                        type="file"
                        className="w-full"
                        // value={values.company_logo}
                        // value={imageUploadEvent}
                        onChange={(event: any) => setImageUploadEvent(event)}
                      />
                    </div>
                    <p className="text-red-500 py-1 text-[14px] font-light">
                      {imageUploadEventError}
                    </p>
                  </div>

                  <div className="mb-5 w-full">
                    <Label
                      htmlFor="location"
                      className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                    >
                      Location:
                    </Label>
                    <select
                      id="location"
                      name="location"
                      value={values.location}
                      onChange={handleChange}
                      className="focus:ring-primary focus:border-primary focus:outline-primary block w-full rounded-lg border border-gray-300 bg-white p-2.5 px-2 text-sm text-gray-900"
                    >
                      <option selected value="">
                        Select an option
                      </option>
                      <option value="remote">Remote</option>
                      <option value="on-site">On-site</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                    <p className="text-red-500 py-1 text-[14px] font-light">
                      {errors.location}
                    </p>
                  </div>

                  <div className="mb-5">
                    <Label
                      htmlFor="location"
                      className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                    >
                      Office location:
                    </Label>
                    <input
                      id="office_location"
                      name="office_location"
                      value={values.office_location}
                      onChange={handleChange}
                      // value={defaultBD[0].name}
                      list="countryList"
                      type="text"
                      className="text-blue-midnight_blue focus:outline-primary h-[2.5rem] w-full rounded-sm border bg-transparent px-[.75rem] py-[0.5rem] text-[14px] font-light outline-transparent"
                    />
                    <p className="text-red-500 py-1 text-[14px] font-light">
                      {errors.office_location}
                    </p>
                    <datalist id="countryList">
                      {countryData.map((country, index) => (
                        <option key={country.name + index} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </datalist>
                  </div>

                  <div className="mb-5 w-full">
                    <Label
                      htmlFor="apply_email"
                      className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                    >
                      How to apply:
                    </Label>
                    <div className="flex w-full items-center gap-2">
                      <div className="w-full">
                        <input
                          name="apply_email"
                          id="apply_email"
                          type="text"
                          value={applyEmail}
                          onChange={(e) => setApplyEmail(e.target.value)}
                          className="text-blue-midnight_blue focus:outline-primary w-full rounded-sm border bg-transparent px-[.75rem] py-[0.5rem] text-[14px] font-light outline-transparent"
                          placeholder="Email"
                        />
                      </div>
                      <p className="text-blue-midnight_blue">or</p>
                      <div className="w-full">
                        <input
                          name="apply_website"
                          id="apply_website"
                          type="text"
                          value={applyWebsite}
                          onChange={(e) => setApplyWebsite(e.target.value)}
                          className="text-blue-midnight_blue focus:outline-primary w-full rounded-sm border bg-transparent px-[.75rem] py-[0.5rem] text-[14px] font-light outline-transparent"
                          placeholder="Website"
                        />
                      </div>
                    </div>
                    <p className="text-red-500 py-1 text-[14px] font-light">
                      {validateHowToApplyError}
                    </p>
                  </div>

                  <div className="mb-5">
                    <Label
                      htmlFor="payment_frequency"
                      className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                    >
                      Required Skills:
                    </Label>
                    <RequiredSkills
                      {...{
                        selectedRequiredSkills,
                        setSelectedRequiredSkills,
                        placeholder: 'Select skills',
                        dropdownOptions: required_skills,
                      }}
                    />
                    <p className="text-red-500 py-1 text-[14px] font-light">
                      {jobRequiredSkillsError}
                    </p>
                  </div>

                  <div className="mb-5">
                    <Label
                      htmlFor="qualifications"
                      className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                    >
                      Qualifications{' '}
                      <span className="text-blue-steel_blue text-[12px]">
                        (optional)
                      </span>
                      :
                    </Label>
                    <textarea
                      name="qualifications"
                      id="qualifications"
                      value={values.qualifications}
                      onChange={handleChange}
                      className="text-blue-midnight_blue focus:outline-primary min-h-[150px] w-full rounded-sm border bg-transparent px-[.75rem] py-[0.5rem] text-[14px] font-light outline-transparent"
                      placeholder="Qualifications"
                    />
                    <p className="text-red-500 py-1 text-[14px] font-light">
                      {errors.qualifications}
                    </p>
                  </div>

                  <div className="mb-5">
                    <Label
                      htmlFor="experience"
                      className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                    >
                      Experience{' '}
                      <span className="text-blue-steel_blue text-[12px]">
                        (optional)
                      </span>
                      :
                    </Label>
                    <input
                      name="experience"
                      id="experience"
                      value={values.experience}
                      onChange={handleChange}
                      className="text-blue-midnight_blue focus:outline-primary w-full rounded-sm border bg-transparent px-[.75rem] py-[0.5rem] text-[14px] font-light outline-transparent"
                      placeholder="Experience"
                    />
                    <p className="text-red-500 py-1 text-[14px] font-light">
                      {errors.experience}
                    </p>
                  </div>

                  <div className="mb-5 flex items-center justify-between">
                    <div className="relative flex flex-col">
                      <Label
                        htmlFor="experience"
                        className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                      >
                        Application Deadline:
                      </Label>
                      <button
                        onClick={() => setShowDatePicker((prev) => !prev)}
                        className="text-blue-midnight_blue focus:outline-primary relative block rounded-sm border bg-transparent px-[.75rem] py-[0.4rem] text-[14px] font-light outline-transparent"
                      >
                        {applicationDeadline}
                      </button>
                      {showDatePicker && (
                        <div className="absolute left-0 top-[100%]">
                          <DatePicker
                            // className=' block bg-transparent py-[0.5rem] px-[.75rem] text-[14px] outline-transparent  font-light text-blue-midnight_blue rounded-sm focus:outline-primary border '
                            inline
                            dateFormat="dd MMM, YYYY"
                            selected={applicationDeadline}
                            onChange={(date: any) => {
                              const formatDate = getFormatDate(date);
                              setApplicationDeadline(formatDate);
                            }}
                          />
                        </div>
                      )}
                      <p className="text-red-500 py-1 text-[14px] font-light">
                        {errors.applicationDeadline}
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <Label
                        htmlFor="job_duration"
                        className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                      >
                        Job duration:
                      </Label>
                      <input
                        id="job_duration"
                        name="job_duration"
                        value={values.job_duration}
                        onChange={handleChange}
                        // value={defaultBD[0].name}
                        list="job_duration"
                        type="number"
                        className="text-blue-midnight_blue focus:outline-primary w-full rounded-sm border bg-transparent px-[.75rem] py-1.5 text-[14px] font-light outline-transparent"
                      />
                      <datalist id="job_duration">
                        {duration.map((duration, index) => (
                          <option key={duration + index} value={duration}>
                            {duration}
                          </option>
                        ))}
                      </datalist>
                      <p className="text-red-500 py-1 text-[14px] font-light">
                        {errors.job_duration}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <Label
                        htmlFor="numberOfOpenings"
                        className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                      >
                        Number Of Openings:
                      </Label>
                      <input
                        id="numberOfOpenings"
                        name="numberOfOpenings"
                        value={values.numberOfOpenings}
                        onChange={handleChange}
                        // value={defaultBD[0].name}
                        list="numberOfOpenings"
                        type="number"
                        className="text-blue-midnight_blue focus:outline-primary w-full rounded-sm border bg-transparent px-[.75rem] py-1.5 text-[14px] font-light outline-transparent"
                      />
                      <datalist id="numberOfOpenings">
                        {duration.map((duration, index) => (
                          <option key={duration + index} value={duration}>
                            {duration}
                          </option>
                        ))}
                      </datalist>

                      <p className="text-red-500 py-1 text-[14px] font-light">
                        {errors.numberOfOpenings}
                      </p>
                    </div>
                  </div>

                  <div className="mb-5">
                    <Label
                      htmlFor="apply_email"
                      className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                    >
                      Perks:
                    </Label>
                    <div className="flex flex-col gap-2">
                      {job_facilities.map((f, index) => (
                        <div
                          key={f.name + index}
                          className="flex items-center gap-2"
                        >
                          <input
                            id={f.name}
                            type="checkbox"
                            value={f.name}
                            className="h-4 w-4"
                            checked={selectedFacilities.includes(f.name)}
                            onChange={() => handleCheckboxChange(f.name)}
                          />
                          <label
                            htmlFor={f.name}
                            className="text-blue-midnight_blue text-[16px]"
                          >
                            {f.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-5">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          <div className="text-blue-midnight_blue text-[16px]">
                            Assessment question 1{' '}
                            <span className="text-blue-steel_blue text-[12px]">
                              (optional)
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div>
                            <textarea
                              name="assessment_question1"
                              id="assessment_question1"
                              value={values.assessment_question1}
                              onChange={handleChange}
                              className="text-blue-midnight_blue focus:outline-primary min-h-[150px] w-full rounded-sm border bg-transparent px-[.75rem] py-[0.5rem] text-[14px] font-light outline-transparent"
                              placeholder="Type your question here"
                            />
                            <p className="text-red-500 py-1 text-[14px] font-light">
                              {errors.assessment_question1}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>
                          <div className="text-blue-midnight_blue text-[16px]">
                            Assessment question 2{' '}
                            <span className="text-blue-steel_blue text-[12px]">
                              (optional)
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div>
                            <textarea
                              name="assessment_question2"
                              id="assessment_question2"
                              value={values.assessment_question2}
                              onChange={handleChange}
                              className="text-blue-midnight_blue focus:outline-primary min-h-[150px] w-full rounded-sm border bg-transparent px-[.75rem] py-[0.5rem] text-[14px] font-light outline-transparent"
                              placeholder="Type your question here"
                            />
                            <p className="text-red-500 py-1 text-[14px] font-light">
                              {errors.assessment_question2}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div>
                    <Label
                      htmlFor="payment_frequency"
                      className="text-blue-midnight_blue mb-1 inline-block text-[16px] capitalize"
                    >
                      Salary:
                    </Label>
                    <div className="mb-5 w-full">
                      <div className="col-span-6 flex w-full items-center gap-3">
                        <div className="w-full">
                          <div className="grid w-full grid-cols-12 border">
                            <h5 className="bg-primary-25 text-blue-midnight_blue col-span-2 flex h-full items-center justify-center px-2">
                              <LuDollarSign />
                            </h5>
                            <input
                              id="salary_range_min"
                              name="salary_range_min"
                              value={values.salary_range_min}
                              onChange={handleChange}
                              type="number"
                              placeholder="min"
                              className="text-blue-midnight_blue focus:outline-primary col-span-10 h-[2.5rem] w-full rounded-sm bg-transparent px-[.75rem] py-[0.5rem] text-[14px] font-light outline-transparent"
                            />
                          </div>
                          <p className="text-red-500 mt-1 text-[14px] font-light">
                            {errors.salary_range_min}
                          </p>
                        </div>
                        <div className="w-full">
                          <div className="grid w-full grid-cols-12 border">
                            <h5 className="bg-primary-25 text-blue-midnight_blue col-span-2 flex h-full items-center justify-center px-2">
                              <LuDollarSign />
                            </h5>
                            <input
                              name="salary_range_max"
                              id="salary_range_min"
                              value={values.salary_range_max}
                              onChange={handleChange}
                              type="number"
                              placeholder="max"
                              className="text-blue-midnight_blue focus:outline-primary col-span-10 h-[2.5rem] w-full rounded-sm bg-transparent px-[.75rem] py-[0.5rem] text-[14px] font-light outline-transparent"
                            />
                          </div>
                          <p className="text-red-500 mt-1 text-[14px] font-light">
                            {errors.salary_range_max}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button type="submit" className="mt-6">
                  Post Now
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
