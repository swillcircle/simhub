import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function SpeakerModal({ position = [0, 0, 0], scale = [1, 1, 1], ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('..//public/speaker.glb');
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null} position={position} scale={scale}>
      <group name="Scene">
        <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials['Material.002']} position={[-0.547, 2.006, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials['Material.003']} position={[-0.748, 2.006, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.914} />
        <mesh name="Circle001" geometry={nodes.Circle001.geometry} material={materials['Material.003']} position={[-0.276, 2.006, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.914} />
        <mesh name="Circle002" geometry={nodes.Circle002.geometry} material={materials['Material.005']} position={[-0.281, 2.006, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.914} />
        <mesh name="Circle003" geometry={nodes.Circle003.geometry} material={materials['Material.004']} position={[-0.257, 2.011, -0.003]} rotation={[0, 0, -Math.PI / 2]} scale={0.914} />
        <mesh name="Circle004" geometry={nodes.Circle004.geometry} material={materials['Material.007']} position={[-0.273, 2.011, -0.003]} rotation={[0, 0, -Math.PI / 2]} scale={0.914} />
        <mesh name="Circle005" geometry={nodes.Circle005.geometry} material={materials.Material} position={[0.74, 2.006, 0]} rotation={[0, 0, -Math.PI / 2]} scale={1.924} />
        <mesh name="Torus" geometry={nodes.Torus.geometry} material={materials['Material.008']} position={[0.742, 2.006, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.927} />
        <mesh name="Torus001" geometry={nodes.Torus001.geometry} material={materials['Material.001']} position={[0.742, 2.006, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh name="Torus002" geometry={nodes.Torus002.geometry} material={materials['Material.006']} position={[0.743, 2.006, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.927} />
        <mesh name="Circle006" geometry={nodes.Circle006.geometry} material={materials['Material.009']} position={[-0.281, 2.006, 0.017]} rotation={[0, 0, -Math.PI / 2]} scale={0.914} />
        <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials['Material.010']} position={[-0.112, 2.006, 1.251]} rotation={[Math.PI, -1.031, Math.PI / 2]} scale={[0.049, 0.019, 0.049]} />
        <mesh name="Spiral" geometry={nodes.Spiral.geometry} material={materials['Material.011']} position={[-0.664, 2.018, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.304, 0.195, 0.304]} />
      </group>
    </group>
  );
}

useGLTF.preload('/speaker.glb');


useGLTF.preload('..//public/speaker.glb')
