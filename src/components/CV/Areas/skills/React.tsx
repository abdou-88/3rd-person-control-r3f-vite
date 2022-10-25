import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Curve002: THREE.Mesh;
  };
  materials: {};
};

export function ReactIcon(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Skills/react.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={nodes.Curve002.material}
        position={[-30, 10, 30]}
        rotation={[1.4, 0, -1]}
        scale={40000}
      >
        <meshBasicMaterial
          transparent={true}
          side={THREE.DoubleSide}
          attach="material"
          color="#A9A9A9"
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/react.glb");
