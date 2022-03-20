import React, { useRef } from "react";
import { useGLTF } from '@react-three/drei';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import model from '../../assets/ArrayThings.glb';

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, model)
  return (    
    <group ref={group} {...props} position={[0, -3.5, 0]} dispose={null}>
      <mesh
        geometry={nodes.RockOn.geometry}
        material={materials.Yellow}
        position={[1.65, 1.5, -0.24]}
        rotation={[-2.97, 0.46, 3.11]}
        scale={[0.44, 0.43, 0.44]}
      />
      <mesh
        geometry={nodes.Mint.geometry}
        material={materials.Mint}
        position={[-1.96, 1.98, -3.44]}
        rotation={[1.4, 0.01, -0.4]}
        scale={0.27}
      />
      <mesh
        geometry={nodes.Spark.geometry}
        material={materials.Beige}
        position={[-2.27, 5.45, -1.61]}
        rotation={[1.24, 0.13, -0.03]}
        scale={[0.3, 0.3, 0.3]}
      />
      <mesh
        geometry={nodes.Rune.geometry}
        material={materials.Silver}
        position={[3.13, 5.31, -0.78]}
        rotation={[1.67, -0.53, 0.18]}
        scale={[0.26, 0.26, 0.26]}
      />
      <group position={[-3.1, 2.3, -1.88]} rotation={[1.63, 0.14, -0.49]} scale={0.27}>
        <mesh geometry={nodes.MessageBubble_1.geometry} material={materials.LightGreen} />
        <mesh geometry={nodes.MessageBubble_2.geometry} material={materials.DarkGreen} />
      </group>
      <mesh
        geometry={nodes.Xvx.geometry}
        material={materials.BlackXVX}
        position={[0.25, 6.78, -1.13]}
        rotation={[-1.48, 0.02, 0.21]}
        scale={[0.79, -0.16, 0.79]}
      />
      <mesh
        geometry={nodes.IG.geometry}
        material={materials.WhiteIG}
        position={[3.9, 0.98, -1.44]}
        rotation={[0, -0.34, -0.29]}
        scale={[0.64, 0.31, 0.31]}
      />
      <group position={[0.41, 3.45, -2.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.25}>
        <mesh geometry={nodes.Spheres_1.geometry} material={materials.LightPeach} />
        <mesh geometry={nodes.Spheres_2.geometry} material={materials.Orange} />
        <mesh geometry={nodes.Spheres_3.geometry} material={materials.Pink} />
      </group>
      <group position={[1, 4.18, -2.06]} rotation={[0.13, -0.25, 1.58]} scale={[0.24, 0.24, 0.24]}>
        <mesh geometry={nodes.BigBlue_1.geometry} material={materials.DarkBlue} />
        <mesh geometry={nodes.BigBlue_2.geometry} material={materials.LightBlue} />
      </group>
    </group>
  )
}

useGLTF.preload('/ArrayThings.glb')