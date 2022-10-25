/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props:any) {
  const { nodes, materials }:any = useGLTF('/cranesmalleer.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.37, -0.01, 1.84]} rotation={[Math.PI / 2, 0, 0]} scale={[0.02, 0.01, 0.02]}>
        <mesh geometry={nodes.Line070001.geometry} material={materials['wire_088144225.001']} />
        <mesh geometry={nodes.Line070001_1.geometry} material={materials['Material__1280.001']} />
      </group>
      <mesh geometry={nodes.Line182.geometry} material={materials['wire_088144225.001']} position={[-0.37, -0.01, 1.84]} rotation={[Math.PI / 2, 0, 0]} scale={[0.02, 0.01, 0.02]} />
      <mesh geometry={nodes.Line183.geometry} material={materials['wire_088144225.001']} position={[-0.37, -0.01, 1.84]} rotation={[Math.PI / 2, 0, 0]} scale={[0.02, 0.01, 0.02]} />
      <mesh geometry={nodes.Line193.geometry} material={materials['wire_088144225.001']} position={[-0.37, -0.01, 1.84]} rotation={[Math.PI / 2, 0, 0]} scale={[0.02, 0.01, 0.02]} />
    </group>
  )
}

useGLTF.preload('/cranesmalleer.glb')
