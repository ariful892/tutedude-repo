import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png';


const Navbar = () => {
    return (
        <div className="navbar bg-white pl-0 pr-8 lg:px-20 mt-8 lg:mt-0">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl"><img className='w-28' src={logo} alt="" /></Link>
            </div>
            <div className="flex-none ">
                <ul className="menu menu-horizontal text-primary p-0">
                    <li className='hidden lg:flex opacity-50'><Link to={''}>My Assignment</Link></li>

                    <li className='hidden lg:flex opacity-50'><Link to={''}>Chat with Mentor</Link></li>
                    <li tabIndex={0}>
                        <Link to={''} className='bg-primary lg:bg-white text-white lg:text-primary rounded-lg'>
                            <img className='w-4 hidden lg:flex' src={profile} alt="" />
                            <span>ProfileName</span>
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2 bg-base-100">
                            <li><Link to={''}>Submenu 1</Link></li>
                            <li><Link to={''}>Submenu 2</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;