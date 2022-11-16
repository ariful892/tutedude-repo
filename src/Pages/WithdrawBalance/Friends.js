import React from 'react';

const Friends = () => {
    return (
        <div className='mt-16'>
            <h2 className='font-bold text-xl text-p                               imary'>Friends who enrolled(3)</h2>

            <div className='mt-4 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-40 overflow-hidden lg:rounded-r-xl'>
                <div className='text-white bg-gradient-to-r from-secondary to-primary rounded-xl p-5 lg:w-80 mr-8'>
                    <div className='flex justify-between'>
                        <h2 className='font-bold text-lg'>Dhiraj Saxsena</h2>
                        <p>14 Sep, 2022</p>
                    </div>
                    <div className='mt-2'>
                        <h2>Courses Enrolled(6)</h2>
                        <div className='mt-3 flex flex-wrap gap-3 pr-5 lg:pr-0'>
                            <p className='border-2 border-white p-2 rounded-full text-sm '>UI/UX</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm '>Photoshop</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm '>Illustrator</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm '>Python</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm '>MERN</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm'>Java</p>

                        </div>
                        <p className='mt-8'>Referral Amount <span className='font-bold text-2xl'>₹185</span></p>
                    </div>
                </div>

                <div className='text-white bg-gradient-to-r from-secondary to-primary rounded-xl p-5 lg:w-80 lg:h-72'>
                    <div className='flex justify-between'>
                        <h2 className='font-bold text-lg'>Subhash Mishra</h2>
                        <p>115 Sep, 2022</p>
                    </div>
                    <div className='mt-2'>
                        <h2>Courses Enrolled(23)</h2>
                        <div className='mt-3 flex flex-wrap gap-3 pr-5 lg:pr-0 scroll'>
                            <p className='border-2 border-white p-2 rounded-full text-sm '>UI/UX</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm '>Photoshop</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm '>Illustrator</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm '>Python</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm '>MERN</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm'>Java</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm'>C++</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm'>C++</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm'>C++</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm'>C++</p>

                        </div>
                        <p className='mt-8'>Referral Amount <span className='font-bold text-2xl'>₹485</span></p>
                    </div>
                </div>

                <div className='text-white bg-gradient-to-r from-secondary to-primary rounded-xl p-5 lg:w-80 overflow-hidden'>
                    <div className='flex justify-between'>
                        <h2 className='font-bold text-lg'>Prafull Kumar</h2>
                        <p>16 Sep, 2022</p>
                    </div>
                    <div className='mt-2'>
                        <h2>Courses Enrolled(23)</h2>
                        <div className='mt-3 flex flex-wrap gap-3 pr-5'>
                            <p className='border-2 border-white p-2 rounded-full text-sm '>UI/UX</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm '>Photoshop</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm '>Illustrator</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm '>Python</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm '>MERN</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm'>Java</p>
                            <p className='border-2 border-white p-2 rounded-full text-sm'>C++</p>
                        </div>
                        <p className='mt-8'>Referral Amount <span className='font-bold text-2xl'>₹485</span></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Friends;