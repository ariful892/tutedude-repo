import React from 'react';
import friends from '../../assets/friends.png';
import money from '../../assets/money.png';
import transfer from '../../assets/transfer.png';
import course from '../../assets/course.png';
import off from '../../assets/off.png';

const HowWorks = () => {
    return (
        <div className=' mt-10 lg:mr-32'>
            <h2 className='text-primary font-bold text-xl'>How does it work ?</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-between mt-2'>
                <div className='flex mt-5'>
                    <div className='bg-gray-200 w-16 h-16 rounded-full flex justify-center items-center '>
                        <img className='w-8' src={friends} alt="" />
                    </div>
                    <div className='ml-4 w-64'>
                        <h2 className='font-bold text-lg'>Invite your Friends</h2>
                        <p>Share the link tutedude.com with
                            your friends</p>
                    </div>
                </div>
                <div className='flex mt-5'>
                    <div className='bg-gray-200 w-16 h-16 rounded-full flex justify-center items-center '>
                        <img className='w-6' src={course} alt="" />
                    </div>
                    <div className='ml-4 w-64'>
                        <h2 className='font-bold text-lg'>Friend purchases any course</h2>
                        <p>Using your REFERRAL CODE in the payments page</p>
                    </div>
                </div>
                <div className='flex mt-5'>
                    <div className='bg-gray-200 w-16 h-16 rounded-full flex justify-center items-center '>
                        <img className='w-6 h-6' src={money} alt="" />
                    </div>
                    <div className='ml-4 w-64'>
                        <h2 className='font-bold text-lg'>You get ₹ 200 as referral money</h2>
                        <p>On total purchase the friend makes, into your wallet</p>
                    </div>
                </div>
                <div className='flex mt-5'>
                    <div className='bg-gray-200 w-16 h-16 rounded-full flex justify-center items-center '>
                        <img className='w-6 h-6' src={off} alt="" />
                    </div>
                    <div className='ml-4 w-64'>
                        <h2 className='font-bold text-lg'>Your Friend gets ₹ 200 Off </h2>
                        <p>On his overall fee on successful purchase using your referral code</p>
                    </div>
                </div>
                <div className='flex mt-5'>
                    <div className='bg-gray-200 w-16 h-16 rounded-full flex justify-center items-center'>
                        <img className='w-6 h-6' src={transfer} alt="" />
                    </div>
                    <div className='ml-4 w-64'>
                        <h2 className='font-bold text-lg'>Transfer money from wallet</h2>
                        <p>When the wallet balance reaches
                            ₹200 or more, you can withdraw it</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HowWorks;