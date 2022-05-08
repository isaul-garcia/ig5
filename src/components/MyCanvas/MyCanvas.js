import * as THREE from 'three'
import React, {  Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { CameraShake } from '@react-three/drei';
import MyModel from "./MyModel"

function Rig({ children }) {
  const ref = useRef()
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 0.35 + state.mouse.x / 4, 0.1)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 0.35 + state.mouse.y / 4, 0.1)
  })
  return <group ref={ref}>{children}</group>
}

function MyCanvas()  {
    return (
      <>
        <Canvas orthographic dpr={[0.1, 0.9]} camera={{ zoom: 80, position: [0, 0, 0] }} >
          <ambientLight intensity={0.25} />
          <spotLight intensity={0.3} position={[50,-0,70]}/>
          <spotLight intensity={0.3} position={[-260,20,-90]}/>
          <spotLight intensity={0.3} position={[-260,20,-80]}/>
          <Suspense fallback={null}>
          <Rig>
            <MyModel />
          </Rig>
          </Suspense>
          <CameraShake />
        </Canvas>
      </>
    );
  }
  
export default MyCanvas