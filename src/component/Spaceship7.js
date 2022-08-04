/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: mohamedhussien (https://sketchfab.com/mohamedhussien)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/hull-spaceship-72ab5f7cbeb541c69f0ca286b2c0310b
title: hull spaceship
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SpaceShip7(props) {
  const { nodes, materials } = useGLTF('/spaceship7.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[1298.76, 1015.27, 462.68]} rotation={[-1.4, 0, 0]} scale={8.13}>
            <mesh geometry={nodes['Object002_Material_#1_0'].geometry} material={materials.Material_1} />
            <mesh geometry={nodes['Object002_Material_#1_0_1'].geometry} material={materials.Material_1} />
            <mesh geometry={nodes['Object002_Material_#1_0_2'].geometry} material={materials.Material_1} />
            <mesh geometry={nodes['Object002_Material_#1_0_3'].geometry} material={materials.Material_1} />
            <mesh geometry={nodes['Object002_Material_#1_0_4'].geometry} material={materials.Material_1} />
            <mesh geometry={nodes['Object002_Material_#1_0_5'].geometry} material={materials.Material_1} />
            <mesh geometry={nodes['Object002_Material_#1_0_6'].geometry} material={materials.Material_1} />
          </group>
          <group position={[1298.76, 1015.27, 462.68]} rotation={[-1.4, 0, 0]} scale={8.13}>
            <mesh geometry={nodes['Object003_Material_#1s_0'].geometry} material={materials.Material_1s} />
            <mesh geometry={nodes['Object003_Material_#1s_0_1'].geometry} material={materials.Material_1s} />
            <mesh geometry={nodes['Object003_Material_#1s_0_2'].geometry} material={materials.Material_1s} />
            <mesh geometry={nodes['Object003_Material_#1s_0_3'].geometry} material={materials.Material_1s} />
            <mesh geometry={nodes['Object003_Material_#1s_0_4'].geometry} material={materials.Material_1s} />
            <mesh geometry={nodes['Object003_Material_#1s_0_5'].geometry} material={materials.Material_1s} />
            <mesh geometry={nodes['Object003_Material_#1s_0_6'].geometry} material={materials.Material_1s} />
            <mesh geometry={nodes['Object003_Material_#1s_0_7'].geometry} material={materials.Material_1s} />
            <mesh geometry={nodes['Object003_Material_#1s_0_8'].geometry} material={materials.Material_1s} />
          </group>
          <group position={[1298.76, 1015.27, 462.68]} rotation={[-1.4, 0, 0]} scale={8.13}>
            <mesh geometry={nodes['Object004_Material_#1da_0'].geometry} material={materials.Material_1da} />
            <mesh geometry={nodes['Object004_Material_#1da_0_1'].geometry} material={materials.Material_1da} />
            <mesh geometry={nodes['Object004_Material_#1da_0_2'].geometry} material={materials.Material_1da} />
            <mesh geometry={nodes['Object004_Material_#1da_0_3'].geometry} material={materials.Material_1da} />
            <mesh geometry={nodes['Object004_Material_#1da_0_4'].geometry} material={materials.Material_1da} />
            <mesh geometry={nodes['Object004_Material_#1da_0_5'].geometry} material={materials.Material_1da} />
            <mesh geometry={nodes['Object004_Material_#1da_0_6'].geometry} material={materials.Material_1da} />
            <mesh geometry={nodes['Object004_Material_#1da_0_7'].geometry} material={materials.Material_1da} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/spaceship7.gltf')