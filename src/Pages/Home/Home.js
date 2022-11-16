import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import HowWorks from './HowWorks';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='px-5 lg:px-48 pb-12'>
            <p className='text-sm  py-8'>UI/UX <FontAwesomeIcon className='w-2 ml-1' icon={faGreaterThan}></FontAwesomeIcon> Refer & Earn </p>

            {/* withdraw balance */}
            <div >
                <div className='lg:flex justify-between'>
                    <div className=" bg-white px-4 lg:px-6 py-4 shadow-xl border-2 border-gray-100 rounded-lg relative">
                        <div className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-y-12 gap-x-20 lg:gap-x-12">
                            <div>
                                <h2 className='text-sm text-primary'>Referral Earning</h2>
                                <p className='font-bold text-2xl'>₹ 2,500</p>
                            </div>
                            <div>
                                <h2 className='text-sm text-primary'>Total Referrals</h2>
                                <p className='font-bold text-2xl'>7</p>
                            </div>
                            <div>
                                <h2 className='text-sm text-primary'>Wallet Balance</h2>
                                <p className='font-bold text-2xl'>₹ 500</p>
                            </div>
                        </div>
                        <div className='flex justify-center mt-8 mb-2 absolute bottom-0 right-10 lg:static'>
                            <Link to={'/withdraw'} className='text-white font-medium bg-primary py-2 px-3 rounded-full'>Withdraw Balance</Link>
                        </div>
                    </div>

                    <div className='pt-6 lg:pt-0 lg:ml-20 lg:mr-28 text-primary'>
                        <p className='text-primary font-bold text-xl'>Your Referral Code </p>
                        <p className='referral-code px-12 py-2 rounded-lg mt-1'><span className='mr-5'>E</span><span className='mr-5'>D</span><span className='mr-5'>C</span><span className='mr-5'>H</span><span className='mr-5'>5</span><span>4</span></p>
                    </div>
                </div>
            </div>

            {/* how it works */}
            <HowWorks></HowWorks>

            <div className='mt-16'>
                <p className='font-bold text-lg text-primary mb-4'>Friends Who Enrolled</p>
                <p className='font-bold text-lg text-primary'>Terms & Conditions</p>
            </div>

        </div>
    );
};

export default Home;