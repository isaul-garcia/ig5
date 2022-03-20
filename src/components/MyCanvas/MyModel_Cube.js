import React, { useRef } from "react";
import { useGLTF } from '@react-three/drei';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import model from '../../assets/boxesGreen.glb';

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, model)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.2, -0.1, 0]} rotation={[-0.035, 2.22, Math.PI / 4]} scale={0.75}>
        <group>
          <mesh geometry={nodes.Object_22_1.geometry} material={materials.Orange} />
          <mesh geometry={nodes.Object_22_2.geometry} material={materials.OrangeGradient} />
          <mesh geometry={nodes.Object_22_3.geometry} material={materials.Ograd2}  />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/plantBud.glb')