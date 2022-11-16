import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Friends from './Friends';
import arrow from '../../assets/left-arrow.png';
import { Link } from 'react-router-dom';

const WithdrawBalance = () => {
    return (
        <div className='px-8 lg:px-44 pb-40 lg:pb-12'>
            <Link to={'/'}><p className='text-sm  py-8'>UI/UX <FontAwesomeIcon className='w-2 ml-1' icon={faGreaterThan}></FontAwesomeIcon> Refer & Earn <FontAwesomeIcon className='w-2 ml-1' icon={faGreaterThan}></FontAwesomeIcon> Friends Referred</p></Link>

            <p className='font-bold text-lg text-primary mb-8 visible lg:hidden'><img className='w-4 inline mr-2 pb-1' src={arrow} alt="" /> go back</p>

            <div className='flex justify-between'>
                <div>
                    <h2 className='font-bold text-lg text-primary mb-1'>Your Referral Code </h2>
                    <p className='px-4 py-2 border-2 border-primary rounded-lg mt-1 inline-block'><span className='mr-3'>E</span><span className='mr-3'>D</span><span className='mr-3'>C</span><span className='mr-3'>H</span><span className='mr-3'>5</span><span>4</span></p>
                </div>

                <div className='shadow-md px-3 pt-3 border-1'>
                    <h2 className='font-bold text-lg text-primary'>Wallet Balance</h2>
                    <p className='font-bold text-xl'>₹ 500</p>
                </div>
            </div>

            <Friends></Friends>

            <p className='font-bold text-lg text-primary mt-12'>Terms & Conditions</p>

        </div>
    );
};

export default WithdrawBalance;