import React, { useLayoutEffect, useMemo, useRef } from "react";
// import SimplexNoise from "simplex-noise";
import * as THREE from "three";
import { usePlane } from "@react-three/cannon";
import mousepad from "../assets/textures/mousepad.png";
import { useLoader } from "@react-three/fiber";

const MousePad: React.FC = () => {
  // const simplex = useMemo(() => new SimplexNoise(), []);
  const [ref]: any = usePlane(() => ({
    position: [-320, -2, 20],
    rotation: [-Math.PI / 2, 0, 0],
  }));
  const terrain = useRef<THREE.PlaneGeometry>(null!);

  useLayoutEffect(() => {
    let pos = terrain.current.getAttribute("position");
    pos.needsUpdate = true;
    terrain.current.computeVertexNormals();
  });

  const texture = useLoader(THREE.TextureLoader, mousepad);
  return (
    <mesh ref={ref} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry
        attach="geometry"
        args={[470, 280]}
        ref={terrain}
        transparent
        receiveShadow
      />

      <meshPhongMaterial transparent={true} map={texture} attach="material" />
    </mesh>
  );
};

export default MousePad;
