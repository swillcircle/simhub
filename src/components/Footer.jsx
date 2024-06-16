import React from 'react'

const Footer = () => {
  return (
    <section className='bg-teal-800'>
        <div className='max-w-7xl m-auto px-8 sm:px-6'>
            <div className='relative py-12 flex flex-row max-w-6xl mx-auto' >
                <div className=''>
                    <ul>
                        <li>
                            <p className='text-sm sm:text-lg text-white hover:text-teal-100 cursor-pointer px-1 sm-px2'>About SimHub</p>
                        </li>
                        <li className='text-sm sm:text-lg text-white hover:text-teal-100 cursor-pointer px-1 sm-px2'>
                            <p>Download</p>
                        </li>
                        <li className='text-sm sm:text-lg text-white hover:text-teal-100 cursor-pointer px-1 sm-px2'>
                            <p>Get a license </p>
                        </li>
                        <li className='text-sm sm:text-lg text-white hover:text-teal-100 cursor-pointer px-1 sm-px2'>
                            <p>Motion</p>
                        </li>
                        <li className='text-sm sm:text-lg text-white hover:text-teal-100 cursor-pointer px-1 sm-px2'>
                            <p>Help</p>
                        </li>
                        <li className='text-sm sm:text-lg text-white hover:text-teal-100 cursor-pointer px-1 sm-px2'>
                            <p>Contact</p>
                        </li>
                    </ul>
                </div>
                <div className='ml-auto mt-auto'>
                    <img src="GH-logo.svg" alt="GitHub Logo" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer