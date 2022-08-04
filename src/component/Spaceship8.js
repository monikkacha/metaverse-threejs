/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: avaslash (https://sketchfab.com/avaslash)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ava-industries-ko-ranginui-frigate-0a09b04cb88941a7ab5f2f95352a2fca
title: AVA Industries: Ko Ranginui Frigate
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SpaceShip8(props) {
  const { nodes, materials } = useGLTF('/spaceship8.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <lineSegments geometry={nodes.Material2.geometry} material={materials.edge_color000255} />
        <lineSegments geometry={nodes.Material2_12.geometry} material={materials.edge_color255255255255} />
        <lineSegments geometry={nodes.Material2_13.geometry} material={materials.edge_color303030255} />
        <lineSegments geometry={nodes.Material3_16.geometry} material={materials.edge_color585858255} />
        <lineSegments geometry={nodes.Material2_14.geometry} material={materials.edge_color868686255} />
        <lineSegments geometry={nodes.Material2_15.geometry} material={materials.edge_color167167167255} />
        <mesh geometry={nodes.Material3.geometry} material={materials.Color_M08} />
        <mesh geometry={nodes.Material2_1.geometry} material={materials.material} />
        <mesh geometry={nodes.Material2_2.geometry} material={materials.Color_M06} />
        <mesh geometry={nodes.Material2_3.geometry} material={materials.auto_9} />
        <mesh geometry={nodes.Material3_1.geometry} material={materials.Color_E03} />
        <mesh geometry={nodes.Material3_2.geometry} material={materials.Color_M04} />
        <mesh geometry={nodes.Material3_3.geometry} material={materials.Color_E02} />
        <mesh geometry={nodes.Material2_4.geometry} material={materials.auto_14} />
        <mesh geometry={nodes.Material2_5.geometry} material={materials.Color_M00} />
        <mesh geometry={nodes.Material3_4.geometry} material={materials.auto_17} />
        <mesh geometry={nodes.Material2_6.geometry} material={materials.auto_7} />
        <mesh geometry={nodes.Material2_7.geometry} material={materials.auto_7} />
        <mesh geometry={nodes.Material3_5.geometry} material={materials.auto_13} />
        <mesh geometry={nodes.Material3_6.geometry} material={materials.auto_13} />
        <mesh geometry={nodes.Material3_7.geometry} material={materials.auto_13} />
        <mesh geometry={nodes.Material3_8.geometry} material={materials.auto} />
        <mesh geometry={nodes.Material3_9.geometry} material={materials.auto_21} />
        <mesh geometry={nodes.Material3_10.geometry} material={materials.auto_15} />
        <mesh geometry={nodes.Material2_8.geometry} material={materials.auto_3} />
        <mesh geometry={nodes.Material3_11.geometry} material={materials.auto_12} />
        <mesh geometry={nodes.Material2_9.geometry} material={materials.Color_M09} />
        <mesh geometry={nodes.Material3_12.geometry} material={materials.Color_M05} />
        <mesh geometry={nodes.Material2_10.geometry} material={materials.Color_A05} />
        <mesh geometry={nodes.Material2_11.geometry} material={materials.Color_G04} />
        <mesh geometry={nodes.Material3_13.geometry} material={materials.Color_E07} />
        <mesh geometry={nodes.Material3_14.geometry} material={materials.Color_M07} />
        <mesh geometry={nodes.Material3_15.geometry} material={materials.Color_I07} />
        <mesh geometry={nodes.Material3_17.geometry} material={materials.Color_M03} />
        <mesh geometry={nodes.Material3_18.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Material3_19.geometry} material={materials.material_3} />
        <mesh geometry={nodes.Material3_20.geometry} material={materials.material_1} />
        <mesh geometry={nodes.Material3_21.geometry} material={materials.Color_E05} />
        <mesh geometry={nodes.Material2_16.geometry} material={materials.Color_M02} />
        <mesh geometry={nodes.Material3_22.geometry} material={materials.Color_M01} />
        <mesh geometry={nodes.Material3_23.geometry} material={materials.Color_E08} />
        <mesh geometry={nodes.Material3_24.geometry} material={materials.Steve_Edges} />
        <mesh geometry={nodes.Material2_17.geometry} material={materials.Color_I08} />
      </group>
    </group>
  )
}

useGLTF.preload('/spaceship8.gltf')
