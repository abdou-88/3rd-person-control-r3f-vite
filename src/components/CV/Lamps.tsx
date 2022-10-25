import {  useLoader } from "@react-three/fiber";

import React from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

export function Lamp(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/lamp.glb") as GLTFResult;
  return (
    <group scale={1.8}  {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials["Material.001"]}
          />

          {/* lamps glass  */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials["Material.002"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/lamp.glb");



const Lamps: React.FC = () => {
 

 
   const gltf = useLoader(GLTFLoader, "/lamp.glb");
   
   
   return (
     <group>
       <Lamp position={[-10, -3, -40]} />
       <Lamp position={[10, -3, -20]} />
       <Lamp position={[-10, -3, 10]} />
       <Lamp position={[10, -3, 30]} />
       <Lamp position={[-10, -3, 50]} />
       <Lamp position={[10, -3, 70]} />
       <Lamp position={[-10, -3, 90]} />

      
     </group>
   );


};

export default Lamps;

