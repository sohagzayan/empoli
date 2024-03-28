import { Button } from '@/components/ui/button'
import { FileCheck } from 'lucide-react'
import React from 'react'

const Resume = () => {
    return (
        <div className='container lg:px-16 xl:px-20 h-screen'>
            <div>
                <div className='text-center py-8'>
                    <h2 className='mb-3 text-3xl font-semibold text-blue-midnight_blue'>Upload a recent resume or CV</h2>
                    <p className='text-blue-midnight_blue'>Autocomplete your profile in just a few seconds by uploading a resume.</p>
                </div>
                <div className='flex items-center justify-center bg-white rounded-xl p-10 w-[800px] mx-auto'>
                    <div className='flex flex-col justify-center items-center'>
                        <FileCheck size={50} strokeWidth={1.25} />
                        <p className='text-sm text-blue-midnight_blue py-5'>Click the button below to upload your resume as a .pdf, .doc, .docx, .rtf, .wp or .txt file</p>
                        <div className='text-center mt-2 '>
                            <Button >Upload Resume</Button>
                            <div className='flex items-center mt-1 gap-2 text-blue-midnight_blue'>
                                <input id='resume_review' type="checkbox" />
                                <label htmlFor="resume_review " className='text-sm '>Id like a free resume review</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-center mt-6'>
                    <Button variant="outline" className='text-blue-midnight_blue font-semibold' >Skip for now</Button>
                </div>
            </div>
        </div>
    )
}

export default Resume