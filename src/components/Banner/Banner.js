import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { DriftMaterial } from '../DriftMaterial/DriftMaterial';

function ShaderPlane() {
  const ref = useRef()
  const { width, height } = useThree((state) => state.viewport)
  useFrame((state, delta) => (ref.current.time += delta))
  return (
    <mesh scale={[width, height, 1]}>
      <planeGeometry />
      <driftMaterial ref={ref} key={DriftMaterial.key} toneMapped={true} />
    </mesh>
  )
}

const Banner = () => {
  return (
    <>
      <Canvas dpr={[0.1, 1.0]}>
        <ShaderPlane />
      </Canvas>
    </>
  )
}

export default Banner;