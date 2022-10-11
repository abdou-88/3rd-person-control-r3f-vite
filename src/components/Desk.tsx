import * as THREE from "three";
import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import screen from "../assets/textures/laptopScreen.jpg";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Desk: React.FC = () => {
  const gltf = useLoader(GLTFLoader, "/Desk.glb");
  const texture = useLoader(THREE.TextureLoader, screen);

  return (
    <group>
      <primitive
        position={[150, -972.6, -1000]}
        rotation={[0, -0.5, 0]}
        scale={15}
        object={gltf.scene}
        receiveShadow
        castShadow
      />
      {/* <mesh rotation={[0, -0.5, 0]} position={[-265.5, 73, -116.2]}>
        <planeBufferGeometry attach="geometry" args={[210, 120]} />
        <meshBasicMaterial
          transparent={true}
          side={THREE.DoubleSide}
          attach="material"
          map={texture}
          toneMapped={false}
        />
      </mesh> */}
    </group>
  );
};

export default Desk;
