import * as THREE from "three";
import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import screen from "../assets/textures/MonitorScreen2.jpg";

import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Frame_ComputerFrame_0: THREE.Mesh;
    Screen_ComputerScreen_0: THREE.Mesh;
  };
  materials: {
    ComputerFrame: THREE.MeshStandardMaterial;
    ComputerScreen: THREE.MeshStandardMaterial;
  };
};

export default function Laptop(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/laptop.glb") as GLTFResult;
  const texture = useLoader(THREE.TextureLoader, screen);
  return (
    <group  position={[-300, -2.3, -120]}
        rotation={[0, -0.5, 0]}
        scale={7}{...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, 0.98, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Frame_ComputerFrame_0.geometry}
              material={materials.ComputerFrame}
            />
          </group>
          <group
            position={[0, 0.65, -10.3]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[100, 100, 88.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Screen_ComputerScreen_0.geometry}
              material={materials.ComputerScreen}
            />
          </group>
          <mesh rotation={[0, 0, 0]} position={[0,10.5,-10.6]}>
            <planeBufferGeometry attach="geometry" args={[29.6,17.5]} />
            <meshBasicMaterial
              transparent={true}
              side={THREE.DoubleSide}
              attach="material"
              map={texture}
              toneMapped={false}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/laptop.glb");