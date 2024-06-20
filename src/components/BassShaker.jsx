import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SpeakerModal from '../components/SpeakerModal';

const BassShaker = () => {
  return (
    <section className='max-w-6xl mx-auto pb-36'>
      <div className='flex flex-row justify-between items-center relative'>
        <div className='relative sm:block w-full md:w-1/2 h-[300px] sm:h-[550px] brightness-25'>
          <Canvas>
            <ambientLight intensity={1} color='#315556'/>
            <directionalLight position={[1, 1, 1]} />
            <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={0.5} />
            <SpeakerModal position={[-1.5, -2.5, 0]} scale={[1.35, 1.35, 1.35]} color='#315556' />
          </Canvas>
        </div>
        <div className='max-w-[450px] absolute md:relative'>
          <h3 className='text-center sm:text-left text-2xl sm:text-5xl font-bold text-white pb-6'>
          Bass shakers, Forcefeel, Gametrix, DIY vibration motors and fans
          </h3>
          <div className='mx-auto sm:mx-0 mb-6 text-center sm:text-left w-[60px] h-[4px] bg-teal-500 '></div>
            <p className='text-center sm:text-left text-lg sm:tracking-wide font-normal text-white '>
              SimHub supports many games including: Assetto Corsa, Automobilista, iRacing, 
              RFactor, Project Cars and many more!
            </p>
        </div>
      </div>
    </section>
  );
};

export default BassShaker;
