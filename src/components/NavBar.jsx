import React from 'react'
import MobileMenu from './MobileMenu'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  return (
    <div className='flex justify-center py-[20px]  m-auto'>
        <div className='desk-menu flex justify-between w-full items-center'>
            <div className='mr-auto'>
                <a href="/">
                    <img src="./logo.svg" alt="SimHub Logo"  className='h-8 sm:h-12'/>
                </a>
            </div>
            <ul className='hidden lg:flex justify-between'>
                    <a href="#about" className='relative px-5 text-white  cursor-pointer group hover:text-teal-500'>
                        <li>
                        About SimHub
                        </li>
                    </a>
                    <a href="#download" className='relative px-5 text-white  cursor-pointer group hover:text-teal-500'>
                        <li>
                        Download
                        </li>
                    </a>
                    <a href="#license" className='relative px-5 text-white  cursor-pointer group hover:text-teal-500'>
                        <li>
                        Get a license
                        </li>
                    </a>
                    <a href="#resources" className='relative px-5 text-white  cursor-pointer group hover:text-teal-500'>
                        <li>
                        Motion
                        <span className='inline-block ml-2 transition-transform transform group-hover:animate-translateDown'>
                        <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                        </li>
                    </a>
                    <a href="#help" className='relative px-5 text-white  cursor-pointer group hover:text-teal-500'>
                        <li>
                        Help
                        <span className='inline-block ml-2 transition-transform transform group-hover:animate-translateDown'>
                        <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                        </li>
                    </a>
                    <a href="#contact" className='relative px-5 text-white  cursor-pointer group hover:text-teal-500'>
                        <li>
                        Contact
                        </li>
                    </a>
               
            </ul>
        </div>
        <div className='z-[100]'>
            <MobileMenu />
        </div>
    </div>
  )
}

export default NavBar