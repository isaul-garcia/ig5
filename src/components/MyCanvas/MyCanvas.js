import * as THREE from 'three'
import React, {  Suspense, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { CameraShake } from '@react-three/drei';
import MyModel from "./MyModel"

function Rig({ children }) {
  const ref = useRef()
  const vec = new THREE.Vector3()
  const { camera, mouse } = useThree()
  useFrame((state) => {
    camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.5)
    ref.current.position.lerp(vec.set(mouse.x * 1.5, mouse.y * 0.35, 0), 1)
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 30, 0.1)
  })
  return <group ref={ref}>{children}</group>
}

function MyCanvas()  {
    return (
      <>
        <Canvas orthographic dpr={[0.1, 0.9]} camera={{ zoom: 70, position: [0, 0, 0] }} >
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