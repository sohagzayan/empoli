"use client"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"
import { motion } from "framer-motion"
import * as React from "react"



const ApplyJobModal = ({ applyJobModal, setApplyJobModal }: any) => {


    return (

        <>
            {
                applyJobModal &&
                <div className={`w-full backdrop h-screen bg-black bg-opacity-60  fixed top-0 left-0 z-50 `}></div>
            }
            <motion.div
                initial={{ opacity: 0, top: applyJobModal ? '0px' : '50%' }}
                animate={{ opacity: 1, top: applyJobModal ? "50%" : '-100%' }}
                transition={{ duration: 0.5 }}
                className={`bg-white md:w-[500px] w-[100%] md:h-auto h-full  fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  z-50 p-9 rounded-lg `}>
                <div>
                    <h5 className="absolute top-2 right-2 bg-primary-50 w-10 h-10 flex items-center justify-center rounded-full  text-primary cursor-pointer"
                        onClick={() => setApplyJobModal(false)}
                    ><X /></h5>
                    <h3 className="text-center font-medium text-[18px]">Apply for this job</h3>
                    <div className="border py-4 text-center mt-3 border-dashed text-[14px] border-primary ">
                        <span>Upload CV (doc, docx, pdf)</span>
                    </div>
                    <Textarea className="bg-primary-50 mt-5 min-h-[200px] max-h-[200px] my-6" placeholder="Message" />
                    <div className="flex items-center space-x-2 mt-4">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[12px]"
                        >
                            You accept our Terms and Conditions and Privacy Policy                        </label>
                    </div>
                    <Button className="w-full mt-6">Apply Job</Button>
                </div>
            </motion.div>
        </>
    )
}

export default ApplyJobModal