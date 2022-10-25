import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Curve: THREE.Mesh;
  };
  materials: {};
};

export function CSSIcon(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Skills/css.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={nodes.Curve.material}
        position={[-41, -3, 49]}
        rotation={[1.5, 0, 0]}
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

useGLTF.preload("/css.glb");
