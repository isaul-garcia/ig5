import React, { useEffect, useState } from 'react';
import * as THREE from "three"
import { Physics, usePlane, useCompoundBody, useSphere } from "@react-three/cannon"
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer } from "@react-three/postprocessing"
import { LayerMaterial, Color, Depth, Fresnel, Noise } from 'lamina/vanilla'
import { BannerWrapper } from './Banner.elements';
import Tri from './Things/Tri';
import Plu from './Things/Plu';

//Physics used from React Three Fiber Christmas Baubles Example: https://codesandbox.io/s/bestservedbold-christmas-baubles-zxpv7
//Material used from React Three Fiber Figma Noodles Example: https://codesandbox.io/s/figma-noodles-iedfg

THREE.ColorManagement.legacyMode = false
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28)
const spheres = [...Array(7)].map(() => ({ args: 1.15, mass: 1, angularDamping: 0.02, linearDamping: 0.85 }))
const pluses = [...Array(3)].map(() => ({ args: 1.1, mass: 1, angularDamping: 0.2, linearDamping: 0.85 }))
const trises = [...Array(2)].map(() => ({ args: 1.1, mass: 1, angularDamping: 0.2, linearDamping: 0.85 }))

const colorA = new THREE.Color('#0032A5').convertSRGBToLinear()
const colorB = new THREE.Color('#44eecc').convertSRGBToLinear()
const colorC = new THREE.Color('#0066aa').convertSRGBToLinear()
const colorD = new THREE.Color('#44ff44').convertSRGBToLinear()
const colorE = new THREE.Color('#ff3377').convertSRGBToLinear()
const colorF = new THREE.Color('#ff00aa').convertSRGBToLinear()
const fresnel = new THREE.Color('#cc11cc').convertSRGBToLinear()

const LightBlue = new LayerMaterial({
  layers: [
    new Color({ color: colorA }),
    new Depth({ colorA: colorA, colorB: colorB, alpha: 0.5, mode: 'normal', near: 0, far: 2.3, origin: [1, 1, 1] }),
    new Depth({ colorA: '#0033ff', colorB: colorB, alpha: 0.015, mode: 'add', near: 3, far: 2, origin: [1, 1, 1] }),
    new Fresnel({ mode: 'add', color: fresnel, intensity: 0.4, power: 1.5, bias: 0.0 }),
    new Noise({ mapping: 'local', type: 'simplex', scale: 100, colorA: '#ff5540', colorB: '#0066aa', mode: 'overlay' })
  ]
})

const DarkBlue = new LayerMaterial({
  layers: [
    new Color({ color: colorC }),
    new Depth({ colorC: colorC, colorD: colorD, alpha: 0.1, mode: 'normal', near: 0, far: 2, origin: [1, 1, 1] }),
    new Depth({ colorC: '#0045dd', colorD: colorD, alpha: 0.15, mode: 'add', near: 3, far: 2, origin: [1, 1, 1] }),
    new Fresnel({ mode: 'add', color: colorB, intensity: 0.4, power: 1.5, bias: 0.0 }),
    new Noise({ mapping: 'local', type: 'simplex', scale: 100, colorC: '#0045dd', colorD: '#44eecc', mode: 'overlay' })
  ]
})

const MagentaOrange = new LayerMaterial({
  layers: [
    new Color({ color: colorE }),
    new Depth({ colorE: colorE, colorF: colorF, alpha: 0.1, mode: 'normal', near: 0, far: 2, origin: [1, 1, 1] }),
    new Depth({ colorE: '#ee6666', colorF: colorF, alpha: 0.15, mode: 'add', near: 3, far: 2, origin: [1, 1, 1] }),
    new Fresnel({ mode: 'add', color: colorB, intensity: 0.4, power: 1.5, bias: 0.0 }),
    new Noise({ mapping: 'local', type: 'simplex', scale: 100, colorE: '#0045dd', colorF: '#44eecc', mode: 'overlay' })
  ]
})

function Sfera({ vec = new THREE.Vector3(), ...props }) {
  const [ref, api] = useCompoundBody(() => ({
    ...props,
    shapes: [
      { type: "Sphere", args: [1.05, 1, 2] }
    ],
  }))
  useEffect(() => api.position.subscribe((p) => api.applyForce(vec.set(...p).normalize().multiplyScalar(-props.args * 25).toArray(), [0, 0, 0])), [api, props.args, vec])
  return (
    <group ref={ref} dispose={null}>
      <mesh castShadow receiveShadow scale={props.args} geometry={sphereGeometry} material={LightBlue} />
    </group>
  )
}

function Collisions() {
  const viewport = useThree((state) => state.viewport)
  usePlane(() => ({ position: [0, 0, 0], rotation: [0, 0, 0] }))
  usePlane(() => ({ position: [0, 0, 8], rotation: [0, -Math.PI, 0] }))
  usePlane(() => ({ position: [-3, -0.25, 0], rotation: [-Math.PI / 2, 0.8, 0] }))
  usePlane(() => ({ position: [3, 0, 0], rotation: [Math.PI / 2, -2.4, 0] }))
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [3] }))
  return useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * 12 + viewport.height) / 2, 2.5))
}

const Banner = () => {
  const [res, setRes] = useState(1.1);

  const checkRes = () => {
    if (window.innerWidth <= 960) {
      setRes(2.2)
    } else {
      setRes(1.1)
    }
  };

  useEffect(() => {
    checkRes();
  }, []);

  window.addEventListener('resize', checkRes);
  
  return (
    <>
      <Canvas
        dpr={res}
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 35, near: 10, far: 40 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}>
        <group position={[0, -5.5, 0]} dispose={null}>
          <Physics gravity={[0, 0.5, 0]}>
            <Collisions />
            {spheres.map((props, i) => <Sfera key={i} {...props} />)}
            {pluses.map((props, i) => <Plu key={i} mat={DarkBlue} {...props} />)}
            {trises.map((props, i) => <Tri key={i} mat={MagentaOrange} {...props} />)}
          </Physics>
        </group>
        <EffectComposer multisampling={0} />
      </Canvas>
    </>
  )
}

const BannerContainer = () => {
  const [showBanner, setShowBanner] = useState(false)
  useEffect(() => {
    setTimeout(function () {
      setShowBanner(true)
    }, 1310);
  }, []);
  return (
    <>
      <BannerWrapper>
        {showBanner &&
          <Banner />
        }
      </BannerWrapper>
    </>
  )
}



export default BannerContainer;