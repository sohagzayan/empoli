"use client"
import React, { useEffect, useRef, useState } from 'react'
import { City, Country, State } from "country-state-city";
import { countryList, currencies, job_profile, required_skills } from '@/utils/data';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import JobProfileSelect from '@/components/containers/find_job_page/job_profile_select/JobProfileSelect';
import RequiredSkills from '@/components/containers/dashboard-content/post-new-job/required-skills/RequiredSkills';
import MultiSelect from '@/components/shared/multi-select/MultiSelect';
import { CiCircleCheck, CiSearch } from 'react-icons/ci';
import { Search } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';




const Preferences = () => {
    const [activeCurrenciesSymbol, setActiveCurrenciesSymbol] = useState<any>(currencies[0].symbol)
    const [selectedRole, setSelectedRole] = useState<string[]>([]);

    const preferred_roleValidation = (value: any) => {
        formik.setFieldValue("preferred_role", value)

    }

    const handleSelectToleRemove = (role: string) => {
        const exclude = selectedRole.filter((selected: any) => selected !== role)
        setSelectedRole(exclude);
        preferred_roleValidation(exclude)
    };



    const formik = useFormik({
        initialValues: {
            job_search_status: "",
            preferred_job_type: '',
            desired_salary: "",
            desired_salary_info: null,
            preferred_role: null,
            preferred_work_locations: "",
            remote_work_flexibility: false,
        },
        validationSchema: Yup.object({
            job_search_status: Yup.string().required("Please tell us where you are in your job search"),
            preferred_job_type: Yup.string().min(1, "Min one job type should select").required('Please let us know what kind of job youre looking for.'),
            desired_salary: Yup.string(),
            desired_salary_info: Yup.object().shape({
                name: Yup.string(),
                symbol: Yup.string(),
            }).default(() => currencies[0]),
            preferred_role: Yup.array().of(Yup.string()).required("Please choose the kind of role you're looking for."),
            preferred_work_locations: Yup.string(),
            remote_work_flexibility: Yup.boolean()
        }),
        onSubmit: values => {
            console.log("all values >", values);
            alert(JSON.stringify(values, null, 2));
        },
    });






    return (
        <div className='container lg:px-16 xl:px-20 mt-10'>
            <div className='w-[900px] bg-white border rounded-[8px] p-[30px] mx-auto'>
                <form onSubmit={formik.handleSubmit}>

                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">Where are you in your job search?</h2>
                        <div className='flex items-center justify-between gap-3 flex-wrap md:flex-nowrap mt-2'>
                            <div className=''>
                                <div className='flex items-center gap-2 border p-2 rounded-full'>
                                    <input
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                formik.setFieldValue("job_search_status", e.target.checked ? 'ready to interview' : "")
                                            }
                                        }}
                                        id='job_search_status'
                                        name='job_search_status'
                                        value="ready to interview"
                                        type="checkbox"
                                        checked={formik.values.job_search_status === "ready to interview"}
                                        className='w-4 h-4  rounded-full border-light_gray' />
                                    <label className="block  text-foreground-light text-sm" htmlFor="email">
                                        Ready to interview
                                    </label>
                                </div>
                                <div className='border-l px-2 mx-2 mt-1'>
                                    <span className='text-[12px] font-medium'>This means:</span>
                                    <p className='text-[12px]'>You’re actively looking for new work and ready to interview. Your job profile will be visible by startups.</p>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex items-center gap-2 border p-2 rounded-full'>
                                    <input
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                formik.setFieldValue("job_search_status", e.target.checked ? 'open to offer' : "")
                                            }
                                        }}
                                        id='job_search_status'
                                        name='job_search_status'
                                        value="open to offer"
                                        checked={formik.values.job_search_status === "open to offer"}
                                        type="checkbox"
                                        className='w-4 h-4 
                                    rounded-full  border-light_gray'
                                    />
                                    <label className="block  text-foreground-light text-sm" htmlFor="email">
                                        Open to offers
                                    </label>
                                </div>
                                <div className='border-l px-2 mx-2 mt-1'>
                                    <span className='text-[12px] font-medium'>This means:</span>
                                    <p className='text-[12px]'>You’re not looking but open to hear about new opportunities. Your job profile will be visible to startups.</p>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex items-center gap-2 border p-2 rounded-full'>
                                    <input
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                formik.setFieldValue("job_search_status", e.target.checked ? 'closed to offers' : "")
                                            }
                                        }}
                                        id='job_search_status'
                                        name='job_search_status'
                                        value="closed to offers"
                                        checked={formik.values.job_search_status === "closed to offers"}
                                        type="checkbox"
                                        className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                    <label className="block  text-foreground-light text-sm" htmlFor="email">
                                        Closed to offers
                                    </label>
                                </div>
                                <div className='border-l px-2 mx-2 mt-1'>
                                    <span className='text-[12px] font-medium'>This means:</span>
                                    <p className='text-[12px]'>You’re not looking and don’t want to hear about new opportunities. Your job profile will be hidden to startups.</p>
                                </div>
                            </div>
                        </div>
                        {formik.touched.job_search_status && formik.errors.job_search_status ? (
                            <p className='text-sm text-red-500 mt-1'>{formik.errors.job_search_status}</p>
                        ) : null}
                    </div>

                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">
                            What type of job are you interested in?
                        </h2>
                        <p className='text-[12px]'>Choose just one for now. You can change this or add more types later</p>

                        <div className='flex items-center gap-4 mt-2'>
                            <div className='flex items-center gap-2 border py-2 px-4 rounded-full'>
                                <input
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("preferred_job_type", e.target.checked ? 'full-time employee' : "")
                                        }
                                    }}
                                    value="full-time employee"
                                    checked={formik.values.preferred_job_type === "full-time employee"}
                                    id='preferred_job_type'
                                    name='preferred_job_type'
                                    type="checkbox"
                                    className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                <label className="block  text-foreground-light text-sm" htmlFor="email">
                                    Full-time Employee
                                </label>
                            </div>

                            <div className='flex items-center gap-2 border py-2 px-4 rounded-full'>
                                <input
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("preferred_job_type", e.target.checked ? 'contractor' : "")
                                        }
                                    }}
                                    value="contractor"
                                    id='preferred_job_type'
                                    name='preferred_job_type'
                                    checked={formik.values.preferred_job_type === "contractor"}
                                    type="checkbox" className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                <label className="block  text-foreground-light text-sm" htmlFor="email">
                                    Contractor
                                </label>
                            </div>

                            <div className='flex items-center gap-2 border py-2 px-4 rounded-full'>
                                <input
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("preferred_job_type", e.target.checked ? 'intern' : "")
                                        }
                                    }}
                                    value="intern"
                                    id='preferred_job_type'
                                    name='preferred_job_type'
                                    type="checkbox"
                                    checked={formik.values.preferred_job_type === "intern"}
                                    className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                <label className="block  text-foreground-light text-sm" htmlFor="email">
                                    Intern
                                </label>
                            </div>

                            <div className='flex items-center gap-2 border py-2 px-4 rounded-full'>
                                <input
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("preferred_job_type", e.target.checked ? 'co-founder' : "")
                                        }
                                    }}
                                    value="co-founder"
                                    id='preferred_job_type'
                                    name='preferred_job_type'
                                    checked={formik.values.preferred_job_type === "co-founder"}
                                    type="checkbox" className='w-4 h-4 
                                    rounded-full  border-light_gray' />
                                <label className="block  text-foreground-light text-sm" htmlFor="email">
                                    Co-founder
                                </label>
                            </div>
                        </div>
                        {formik.touched.preferred_job_type && formik.errors.preferred_job_type ? (
                            <p className='text-sm text-red-500 mt-1'>{formik.errors.preferred_job_type}</p>
                        ) : null}
                    </div>

                    <div className="relative mb-6">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">
                            What is your desired salary?
                        </h2>
                        <p className='text-[12px]'>
                            This information will never be shown on your public profile
                        </p>
                        <div className=' mt-2'>
                            <div className='flex items-center gap-6'>
                                <div className='flex items-center gap-2'>
                                    <label htmlFor="">{activeCurrenciesSymbol}</label>
                                    <input
                                        name='desired_salary'
                                        onChange={formik.handleChange}
                                        value={formik.values.desired_salary}
                                        type="text"
                                        className='peer/input block box-border  rounded-md w-[100px] shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border  border-control text-sm px-4 py-2'
                                    />
                                </div>
                                <select
                                    onChange={(e) => {
                                        // formik.handleChange(e);
                                        formik.setFieldValue("desired_salary_info", JSON.parse(e.target.value))

                                        console.log("e", e.target.value)
                                        console.log("JSON.parse(e.target.value", (JSON.parse(e.target.value)))
                                        setActiveCurrenciesSymbol(JSON.parse(e.target.value).symbol)
                                    }}
                                    id="countries"
                                    name='desired_salary_info'
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {currencies.map((c: any) =>
                                        <option key={c.name} value={JSON.stringify(c)} >{c.name} ({c.symbol})</option>
                                    )}
                                </select>

                            </div>
                        </div>
                    </div>

                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">
                            What kind of role are you looking for?
                        </h2>
                        <p className='text-[12px]'>Tip: You can select more than one</p>
                        <div className=' mt-2 flex items-center gap-4'>
                            <div>
                                <ul className='flex flex-wrap items-center gap-4 mb-2'>
                                    {selectedRole.map((role: any) =>
                                        <li
                                            className='bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2'

                                            onClick={() => handleSelectToleRemove(role)}
                                            key={role + 10}>
                                            <CiCircleCheck strokeWidth={1.25} size={20} /> {role}
                                        </li>)}
                                </ul>
                                <div className='w-[260px]'>
                                    <MultiSelect
                                        validationFunc={preferred_roleValidation}
                                        allSelectList={required_skills}
                                        placeholder="Select a role.. "
                                        setSelected={setSelectedRole}
                                        selected={selectedRole}
                                        searchIcon={true}
                                    />
                                    {formik.touched.preferred_role && formik.errors.preferred_role ? (
                                        <p className='text-sm text-red-500 mt-1'>{formik.errors.preferred_role}</p>
                                    ) : null}
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="relative mb-6 before:content-['*'] before:absolute before:top-0 before:-left-4 before:text-primary">
                        <h2 className="text-base font-semibold text-blue-midnight_blue ">What locations do you want to work in?</h2>
                        <div className='w-[260px] mt-2'>
                            <select
                                onChange={formik.handleChange}
                                name='preferred_work_locations'
                                id="preferred_work_locations"
                                className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border border-control text-sm px-4 py-2">
                                {countryList.map((country) => <option key={country}>{country}</option>
                                )}
                            </select>
                            {formik.touched.preferred_work_locations && formik.errors.preferred_work_locations ? (
                                <p className='text-sm text-red-500 mt-1'>{formik.errors.preferred_work_locations}</p>
                            ) : null}
                        </div>
                    </div>

                    <div>
                        <div className="relative mb-6 flex items-center gap-2">
                            <input
                                onChange={(e) => {
                                    formik.setFieldValue("remote_work_flexibility", e.target.checked ? true : false)
                                    console.log("e.target.checked", e.target.checked)
                                }}
                                checked={formik.values.remote_work_flexibility}
                                value="true"
                                type="checkbox" name="" id="open_to_working_remotely" className='w-4 h-4' />
                            <label htmlFor="open_to_working_remotely" className='text-sm text-blue-midnight_blue'>Im open to working remotely</label>
                        </div>
                        {formik.touched.remote_work_flexibility && formik.errors.remote_work_flexibility ? (
                            <p className='text-sm text-red-500 mt-1'>{formik.errors.remote_work_flexibility}</p>
                        ) : null}
                    </div>
                    <Button className=''>Create you profile</Button>
                </form>
            </div >
        </div >
    )
}

export default Preferences