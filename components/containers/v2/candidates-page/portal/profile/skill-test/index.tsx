import React from 'react'

const SkillTest = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-[rgba(255,255,255,0.06)]'>
            <div className='text-center mt-10'>
                <h2 className='text-3xl text-white font-bold mb-4'>No Skill Test Available</h2>
                <p className='font-medium text-gray-400 mb-6'>
                    This feature is not available yet, but it will be ready soon. Stay tuned!
                </p>
                <button className='text-white bg-theme1 px-4 py-2 rounded-lg font-semibold opacity-50 cursor-not-allowed' disabled>
                    Add Note
                </button>
            </div>
        </div>
    )
}

export default SkillTest