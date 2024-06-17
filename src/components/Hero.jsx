import React from 'react'

import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, PerspectiveCamera, RenderTexture, Sphere, Text } from '@react-three/drei'

const Hero = () => {
  return (
    <section className='max-w-6xl mx-auto'>
        <div className='relative  py-64 flex flex-row'>
          <div className='left-container relative w-full z-50'>
            <h1 className='text-4xl sm:text-7xl md:text-8xl font-bold text-white pb-6'>External hardware to your simulator.</h1>
            <h2 className='text-sm sm:text-2xl sm:tracking-wide font-reg text-teal-100 pb-6'>SimHub is a modular multi sim dashboard and tactile feedback software. You can construct your very own simulator!</h2>
            <button className='flex text-xl font-bold text-white px-12 py-4 bg-teal-500 hover:bg-teal-400 ease-in-out duration-300 rounded-lg shadow-md shadow-teal-500/50'>
              <a href="https://www.simhubdash.com/download-2/">Download Now</a>
              <span className='pl-2'><img src="./download.svg" alt="download" /></span>
            </button>
          </div>
          <div className='right-container relative w-1/2 h-full contents z-10'>
            <div className='absolute inset-0 translate-x-[20%] translate-y-[30%] sm:translate-x-[40%] sm:translate-y-[0%] h-[480px] sm:h-auto'>
              <Canvas>
                <OrbitControls enableZoom={false} autoRotate />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 200]} scale={2}>
                  <MeshDistortMaterial color='#315556' attach='material' distort={0.5} speed={2} />
                </Sphere>
              </Canvas>
            </div>
            <div className='absolute inset-0 flex items-center justify-end w-52 sm:w-auto'>
              <img src="controller-gr.png" alt="controller" className='animate-[float_3s_ease-in-out_infinite]' /> 
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero