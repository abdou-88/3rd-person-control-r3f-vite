import { useLoader } from "@react-three/fiber";

import React, { Suspense } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Laptop: React.FC = () => {
  const gltf = useLoader(GLTFLoader, "/Laptop.glb");

  return (
    <group>
      <primitive
        position={[-300, -5, -50]}
        rotation = {[0,-0.5,0]}
        scale={7}
        object={gltf.scene}
      />
    </group>
  );
};

export default Laptop;
