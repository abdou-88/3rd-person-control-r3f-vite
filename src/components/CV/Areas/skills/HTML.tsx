import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Curve003: THREE.Mesh;
  };
  materials: {};
};

export function HTMLIcon(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Skills/HTML.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={nodes.Curve003.material}
        position={[-50, -3, 49]}
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

useGLTF.preload("/HTML.glb");
