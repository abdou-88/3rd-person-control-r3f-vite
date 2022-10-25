import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Curve001: THREE.Mesh;
  };
  materials: {};
};

export function TSIcon(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Skills/TS.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={nodes.Curve001.material}
        position={[-30.5, -3.5, 49]}
        rotation={[1.5, 0, 0]}
        scale={40000}
      >
        <meshBasicMaterial
          
          transparent={true}
          side={THREE.DoubleSide}
          attach="material"
          color="#696969"
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/TS.glb");
