import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import React, { Suspense } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import screen1 from "../assets/textures/MonitorScreen1.jpg";
import screen2 from "../assets/textures/MonitorScreen2.jpg";

const Monitors: React.FC = () => {
  const gltf = useLoader(GLTFLoader, "/dual_monitor.glb");
  const texture1 :any = useLoader(THREE.TextureLoader, screen1);
  const texture2 :any = useLoader(THREE.TextureLoader, screen2);

  return (
    <group>
      <primitive position={[-7000, -20, -120]} scale={25} object={gltf.scene} />
      {/* ///// screens ////// */}
      <mesh rotation={[0, -0.07, 0]} position={[-500, 122, -165.5]}>
        <planeBufferGeometry attach="geometry" args={[230, 135]} />
        <meshBasicMaterial
          transparent={true}
          side={THREE.DoubleSide}
          attach="material"
          map={texture1}
          toneMapped={false}
        />
      </mesh>
      <mesh rotation={[0, 0.07, 0]} position={[-735, 122, -165.5]}>
        <planeBufferGeometry attach="geometry" args={[230, 135]} />
        <meshBasicMaterial
          transparent={true}
          side={THREE.DoubleSide}
          attach="material"
          map={texture2}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

export default Monitors;
