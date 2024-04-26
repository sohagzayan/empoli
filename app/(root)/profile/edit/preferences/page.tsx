import React from 'react'
import PropTypes from 'prop-types'
import ProfileTab from '@/components/shared/profile-tab/ProfileTab'
import { Button } from '@/components/ui/button'
import VisibilitySetting from '@/components/shared/visibility-setting/VisibilitySetting'
import { IoMdClose } from 'react-icons/io'

const Preferences = () => {
    return (
        <div>
            <div>
                <ProfileTab />
            </div>
            <div className='border p-6'>
                <div className='mb-5'>
                    <div className='grid grid-cols-12 py-4 gap-3'>
                        <div className='col-span-4'>
                            <h3 className='text-lg text-blue-midnight_blue font-semibold'>Where are you in job search? *</h3>
                            <p className='text-sm mb-1'>Your current company will never see that you are looking for a job, no matter what you choose.</p>
                        </div>
                        <div className='col-span-8'>
                            <div className='mb-6'>
                                <VisibilitySetting />
                                <p className='text-[12px] py-2'>Your job profile is not visible to startups.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='mb-5'>
                    <div className='grid grid-cols-12 py-4 gap-3'>
                        <div className='col-span-4'>
                            <h3 className='text-lg text-blue-midnight_blue font-semibold'>US work authorization 🇺🇸 *
                            </h3>

                        </div>
                        <div className='col-span-8'>
                            <div className='mb-6'>
                                <label htmlFor="Last Name" className='block text-foreground-light  mb-3'>      Do you or will you require sponsorship for a US employment visa (e.g. H‑1B)?
                                </label>
                                <div className='flex items-center gap-6'>
                                    <div className='flex items-center gap-3'>
                                        <input type="checkbox" id='yes' />
                                        <label htmlFor="yes" className='block text-foreground-light text-sm '>      Yes
                                        </label>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <input type="checkbox" id='no' />
                                        <label htmlFor="no" className='block text-foreground-light text-sm '>      No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-6'>
                                <label htmlFor="Last Name" className='block text-foreground-light  mb-3'>
                                    Are you legally authorized to work in the United States?
                                </label>
                                <div className='flex items-center gap-6'>
                                    <div className='flex items-center gap-3'>
                                        <input type="checkbox" id='yes' />
                                        <label htmlFor="yes" className='block text-foreground-light text-sm '>      Yes
                                        </label>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <input type="checkbox" id='no' />
                                        <label htmlFor="no" className='block text-foreground-light text-sm '>      No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='mb-5'>
                    <div className='grid grid-cols-12 py-4 gap-3'>
                        <div className='col-span-4'>
                            <h3 className='text-lg text-blue-midnight_blue font-semibold'>
                                What type of job are you interested in? *
                            </h3>

                        </div>
                        <div className='col-span-8'>
                            <div className='mb-6'>
                                <select id="countries" className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2">
                                    <option selected>Full-time Employee </option>
                                    <option value="US">Contractor</option>
                                    <option value="US">Intern</option>
                                    <option value="CA">Co-founder</option>
                                </select>
                            </div>
                            <div className='mb-6'>
                                <label htmlFor="Last Name" className='block text-foreground-light  mb-3'>
                                    Also open to the following job types:
                                </label>
                                <ul className='flex  gap-2 flex-col'>
                                    <li className='flex items-center gap-3'>
                                        <input type="checkbox" id='yes' />
                                        Full-time Employee
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <input type="checkbox" id='yes' />
                                        Contractor                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <input type="checkbox" id='yes' />
                                        Intern
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='mb-5'>
                    <div className='grid grid-cols-12 py-4 gap-3'>
                        <div className='col-span-4'>
                            <h3 className='text-lg text-blue-midnight_blue font-semibold'>
                                What type of job are you interested in? *
                            </h3>

                        </div>
                        <div className='col-span-8'>
                            <div className='mb-6'>
                                <ul className='my-2'>
                                    <li className='text-sm inline-flex items-center gap-3 text-blue-midnight_blue bg-light_gray py-1 px-2'>
                                        Software Engineer
                                        <IoMdClose />
                                    </li>
                                </ul>
                                <input id='Last Name' className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2'
                                    placeholder='e.g. SAn Francisco'
                                >
                                </input>
                            </div>

                            <div className='mb-6'>
                                <div className='flex items-center  gap-3'>
                                    <input type="checkbox" id='yes' />
                                    <label htmlFor="Last Name" className='block text-foreground-light '>
                                        Open to working remotely                              </label>
                                </div>

                                {/* if it true then show another field bottom avove  */}
                                <select id="countries" className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2 mt-4">
                                    <option selected>Remote preferred </option>
                                    <option value="US">Onsite or remote</option>
                                    <option value="US">Onsite preferred</option>
                                    <option value="CA">Remote preferred</option>
                                    <option value="CA">Remote only</option>
                                </select>

                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='mb-5'>
                    <div className='grid grid-cols-12 py-4 gap-3'>
                        <div className='col-span-4'>
                            <h3 className='text-lg text-blue-midnight_blue font-semibold'>
                                What is your desired salary?
                            </h3>
                            <p className='text-sm mb-1'>Let companies know how much you would like to earn annually.</p>
                        </div>
                        <div className='col-span-8'>
                            <div className='mb-6 flex items-center w-full justify-between gap-5'>
                                <select id="countries" className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2 ">
                                    <option selected> United States Dollars ($) </option>
                                    <option value="US">Euro (€)</option>
                                    <option value="US">British Founds (£)</option>
                                    <option value="CA">Canadian Dollars ($)</option>
                                    <option value="CA">Japanese Yen (¥)</option>
                                    <option value="CA">Singaporean Dollars (S$)</option>
                                    <option value="CA">Indian Rupees (₹)</option>
                                    <option value="CA">Indian Rupees (₹)</option>
                                </select>
                                <input id='Last Name' className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2'
                                    placeholder='70,000'
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Preferences
