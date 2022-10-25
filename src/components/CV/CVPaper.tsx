import React, { useLayoutEffect, useMemo, useRef } from "react";
// import SimplexNoise from "simplex-noise";
import * as THREE from "three";
import {  usePlane } from "@react-three/cannon";





const CVPaper: React.FC = () => {
  // const simplex = useMemo(() => new SimplexNoise(), []);
const [ref]:any = usePlane(() => ({
  position: [0, -2, 0],
  rotation: [-Math.PI / 2, 0, 0],
}));
  const terrain = useRef<THREE.PlaneGeometry>(null!);

  useLayoutEffect(() => {
    let pos = terrain.current.getAttribute("position"); 
    pos.needsUpdate = true;
    terrain.current.computeVertexNormals();
  });

  return (
    <mesh ref={ref} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry
        attach="geometry"
        args={[100, 185]}
        ref={terrain}
        receiveShadow
      />

      <meshPhongMaterial attach="material" color="#fff" />
    </mesh>
  );
};

export default CVPaper;
