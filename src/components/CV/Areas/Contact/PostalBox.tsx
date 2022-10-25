

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
  };
  materials: {
    GRADS: THREE.MeshStandardMaterial;
  };
};

export default function PostalBox(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/boxpostal.glb") as GLTFResult;
  return (
    <group rotation={[0, -1.5, 0]}
         position={[30, -2.6, 70]}
         scale={3} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 1.25, -1]} rotation={[0, 0.26, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.GRADS}
            />
          </group>
          <group position={[0, 1.25, -1]} rotation={[0, 0.26, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.GRADS}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/boxpostal.glb");

