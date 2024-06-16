import React from 'react'

const KeyFeatures = () => {
  return (
    <section className='max-w-6xl mx-auto'>
      <div className='flex justify-center items-center'>
        <h3 className='text-xl sm:text-3xl font-bold text-white'>
          Key Features
        </h3>
      </div>
      <div className='container mx-auto py-24'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2'>
        <div className='max-w-sm py-12'>
          <p className='text-center sm:text-left text-lg sm:text-2xl sm:tracking-wide font-bold text-white pb-6'>
            Wide Compatibility
          </p>
          <div className='mx-auto sm:mx-0 mb-6 text-center sm:text-left w-[60px] h-[4px] bg-teal-500 '></div>
          <p className='text-center sm:text-left text-xs sm:text-lg sm:tracking-wide font-normal text-white'>
            SimHub supports many games including: Assetto Corsa, Automobilista, iRacing, 
            RFactor, Project Cars and many more!
            </p>
        </div>
        <div className='max-w-sm py-12 sm:ml-auto'>
          <p className='text-center sm:text-left text-lg sm:text-2xl sm:tracking-wide font-bold text-white pb-6'>
          Dash Studio
          </p>
          <div className='mx-auto sm:mx-0 mb-6 text-center sm:text-left w-[60px] h-[4px] bg-teal-500 '></div>
          <p className='text-center sm:text-left text-xs sm:text-lg sm:tracking-wide font-normal text-white'>
          Design and download dashes, and show them anywhere you want! Works on
          a secondary monitor, phone, tablet and more!
           </p>
        </div>
        <div className='max-w-sm py-12'>
          <p className='text-center sm:text-left text-lg sm:text-2xl sm:tracking-wide font-bold text-white pb-6'>
          Arduino
          </p>
          <div className='mx-auto sm:mx-0 mb-6 text-center sm:text-left w-[60px] h-[4px] bg-teal-500 '></div>
          <p className='text-xs sm:text-lg sm:tracking-wide font-normal text-white'>
          Pick your instruments and gauges from the large range of components 
          available. Support for new hardware is constantly being added!            </p>
        </div>
        <div className='max-w-sm py-12 sm:ml-auto'>
          <p className='text-center sm:text-left text-lg sm:text-2xl sm:tracking-wide font-bold text-white pb-6'>
          Live Support
          </p>
          <div className='mx-auto sm:mx-0 mb-6 text-center sm:text-left w-[60px] h-[4px] bg-teal-500 '></div>
          <p className='text-center sm:text-left text-lg fon sm:tracking-widet-normal text-white'>
          Our Discord channel is open 24 hours a day and 7 days a week for all your questions!            </p>
        </div>
        <div className='max-w-sm py-12'>
          <p className='text-center sm:text-left text-lg sm:text-2xl sm:tracking-wide font-bold text-white pb-6'>
          Motion
          </p>
          <div className='mx-auto sm:mx-0 mb-6 text-center sm:text-left w-[60px] h-[4px] bg-teal-500 '></div>
          <p className='text-center sm:text-left text-lg fon sm:tracking-widet-normal text-white'>
          Drive your motion system! The balance between simplicity and detailed motion.           </p>
        </div>

      </div>
    </div>
    </section>
  )
}

export default KeyFeatures