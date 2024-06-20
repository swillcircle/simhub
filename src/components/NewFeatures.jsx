import React from 'react'

const NewFeatures = () => {
  return (
    <section className='max-w-6xl mx-auto'>
      <div className='flex justify-center items-center'>
        <h3 className='text-center sm:text-left text-5xl font-bold text-white'>
        New additions to SimHub
        </h3>
      </div>
      <div className='container mx-auto py-24'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2'>
        <div className='max-w-sm py-12'>
          <p className='text-center sm:text-left text-2xl sm:sm:tracking-wide font-base text-white pb-6'>
          Bass Shakers
          </p>
          <div className='mx-auto sm:mx-0 mb-6 text-center sm:text-left w-[60px] h-[4px] bg-teal-500 '></div>
          <p className='text-center sm:text-left text-lg sm:sm:tracking-wide font-normal text-white'>
          Feel the tires on the road, it will be a bumpy ride!
            </p>
        </div>
        <div className='max-w-sm py-12 sm:ml-auto'>
          <p className='text-center sm:text-left text-2xl sm:sm:tracking-wide font-base text-white pb-6'>
          Dashboards
          </p>
          <div className='mx-auto sm:mx-0 mb-6 text-center sm:text-left w-[60px] h-[4px] bg-teal-500 '></div>
          <p className='text-center sm:text-left text-lg sm:sm:tracking-wide font-normal text-white'>
          Create your own dashboard and share with others
           </p>
        </div>
        <div className='max-w-sm py-12'>
          <p className='text-center sm:text-left text-2xl sm:sm:tracking-wide font-base text-white pb-6'>
          Wind Simulator
          </p>
          <div className='mx-auto sm:mx-0 mb-6 text-center sm:text-left w-[60px] h-[4px] bg-teal-500 '></div>
          <p className='text-center sm:text-left text-lg sm:sm:tracking-wide font-normal text-white'>
          Feel the wind that a Formula 1 driver has            </p>
        </div>
        <div className='max-w-sm py-12 sm:ml-auto'>
          <p className='text-center sm:text-left text-2xl sm:sm:tracking-wide font-base text-white pb-6'>
          Button Boxes
          </p>
          <div className='mx-auto sm:mx-0 mb-6 text-center sm:text-left w-[60px] h-[4px] bg-teal-500 '></div>
          <p className='text-center sm:text-left text-lg sm:sm:tracking-wide font-normal text-white'>
          OUse a realistic button box instead of keyboard keys            </p>
        </div>

      </div>
    </div>
    </section>
  )
}

export default NewFeatures