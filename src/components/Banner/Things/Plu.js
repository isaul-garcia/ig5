import React, { useEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useCompoundBody } from '@react-three/cannon'

export default function Plu({ vec = new THREE.Vector3(), mat, ...props }) {
    const { nodes } = useGLTF('/thing_Plu.glb')
    const [ref, api] = useCompoundBody(() => ({
        ...props,
        shapes: [
            { type: "Sphere", position: [0, 0, 0], rotation: [-Math.PI / 2, -Math.PI / 2, 0], args: [1.18, 1.18, 1.7] }
        ],
    }))
    useEffect(() => api.position.subscribe((p) => api.applyForce(vec.set(...p).normalize().multiplyScalar(-props.args * 25).toArray(), [0, 0, 0])), [api, props.args, vec]) // prettier-ignore
    return (
        <group ref={ref} dispose={null} scale={0.55}>
            <mesh geometry={nodes.Plu.geometry} material={mat} />
        </group>
    )
}

useGLTF.preload('/thing_Plu.glb')
