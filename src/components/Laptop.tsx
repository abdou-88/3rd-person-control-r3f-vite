import * as THREE from "three";
import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import screen from "../assets/textures/laptopScreen.jpg";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Laptop: React.FC = () => {
  const gltf = useLoader(GLTFLoader, "/Laptop.glb");
  const texture = useLoader(THREE.TextureLoader, screen);

  return (
    <group>
      <primitive
        position={[-300, -2, -50]}
        rotation={[0, -0.5, 0]}
        scale={7}
        object={gltf.scene}
      />
      <mesh rotation={[0, -0.5, 0]} position={[-265.5, 73, -116.2]}>
        <planeBufferGeometry attach="geometry" args={[210, 120]} />
        <meshBasicMaterial
          transparent={true}
          side={THREE.DoubleSide}
          attach="material"
          map={texture}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

export default Laptop;
