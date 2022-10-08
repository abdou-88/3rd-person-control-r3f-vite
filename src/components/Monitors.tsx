import { useLoader } from "@react-three/fiber";

import React, { Suspense } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Monitors: React.FC = () => {
  const gltf = useLoader(GLTFLoader, "/dual_monitor.glb");

  return (
    <group>
      <primitive position={[-7000, -20, -120]} scale={25} object={gltf.scene} />
    </group>
  );
};

export default Monitors;
