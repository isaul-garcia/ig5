import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { DriftMaterial } from '../DriftMaterial/DriftMaterial';

function ShaderPlane({projection}) {
  const ref = useRef()
  const { width, height } = useThree((state) => state.viewport)
  useFrame((state, delta) => (ref.current.time += delta))
  return (
    <mesh scale={[width, height, 1]}>
      <planeGeometry />
      <driftMaterial ref={ref} key={DriftMaterial.key} toneMapped={true} projection={projection}/>
    </mesh>
  )
}

const Banner = () => {
  //Canvas DPR
  const [cdpr, setCdpr] = useState([0.9, 1.0]);
  //Shader Projection Width
  const [projection, setProjection] = useState(400);

    const isMobile = () => {
        if(window.innerWidth <= 960) {
          setCdpr([2.0, 2.0])
          setProjection(10)
        } else {
          setCdpr([1.5, 2])
          setProjection(400)
        }
    };

    useEffect(() => {
        isMobile();
    }, []);
    
  return (
    <>
      <Canvas dpr={cdpr}>
        <ShaderPlane projection={projection}/>
      </Canvas>
    </>
  )
}

export default Banner;