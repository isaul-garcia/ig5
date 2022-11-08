import React, { useEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useCompoundBody } from '@react-three/cannon'

export default function Tri({ vec = new THREE.Vector3(), mat, ...props }) {
    const { nodes } = useGLTF('/thing_Tri.glb')
    const [ref, api] = useCompoundBody(() => ({
        ...props,
        shapes: [
            { type: "Sphere", position: [0, 0, 0], rotation: [-Math.PI / 2, -Math.PI / 2, 0], args: [1.23, 1.23, 1.2] }
        ],
    }))
    useEffect(() => api.position.subscribe((p) => api.applyForce(vec.set(...p).normalize().multiplyScalar(-props.args * 25).toArray(), [0, 0, 0])), [api, props.args, vec]) // prettier-ignore
    return (
        <group ref={ref} dispose={null} scale={0.185}>
            <mesh geometry={nodes.Tri.geometry} material={mat} />
        </group>
    )
}

useGLTF.preload('/thing_Tri.glb')
