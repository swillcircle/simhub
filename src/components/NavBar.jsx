import React from 'react'
import MobileMenu from './MobileMenu'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  return (
    <div className='flex justify-center p-[20px] m-auto'>
        <div className='desk-menu flex justify-between w-full items-center'>
            <div className='mr-auto'>
                <img src="./logo.svg" alt="SimHub Logo"  className='h-8 sm:h-12'/>
            </div>
            <ul className='hidden md:flex justify-between'>
                <li className='px-5 text-white hover:text-teal-100 cursor-pointer'>
                About SimHub
                </li>
                <li className='relative px-5 text-white hover:text-teal-100 cursor-pointer group'>
                    Download
                    {/* <span className='inline-block ml-2 transition-transform transform group-hover:animate-translateDown'>
                     <FontAwesomeIcon icon={faChevronDown} />
                    </span> */}
                </li>
                <li className='px-5 text-white hover:text-teal-100 cursor-pointer'>
                Get a license 
                </li>
                <li className='relative px-5 text-white hover:text-teal-100 cursor-pointer group'>
                Motion 
                    <span className='inline-block ml-2 transition-transform transform group-hover:animate-translateDown'>
                     <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </li>
                <li className='relative px-5 text-white hover:text-teal-100 cursor-pointer group'>
                Help 
                    <span className='inline-block ml-2 transition-transform transform group-hover:animate-translateDown'>
                     <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </li>
                <li className='px-5 text-white hover:text-teal-100 cursor-pointer'>
                Contact 
                </li>
            </ul>
        </div>
        <div>
            <MobileMenu />
        </div>
    </div>
  )
}

export default NavBar