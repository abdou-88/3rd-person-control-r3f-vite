import * as THREE from 'three'

import {  useLoader } from '@react-three/fiber'
import img from "../../assets/textures/CharacterInfo.png";
import quadInfo from "../../assets/textures/QuadInfo.png";


export  function InfoTable() {
  const texture = useLoader(THREE.TextureLoader, img)
  
  return (
    <>
      <mesh position={[7, 6, 90]}>
        <planeBufferGeometry attach="geometry" args={[9.5, 12]} />
        <meshBasicMaterial
          transparent={true}
          side={THREE.DoubleSide}
          attach="material"
          map={texture}
          toneMapped={false}
        />
      </mesh>
     
    </>
  );
}



export  function QuadTable() {
  const texture = useLoader(THREE.TextureLoader, quadInfo);
  return (
    <>
      <mesh rotation= {[0,1.6,0]}position={[-20, 6, -60]}>
        <planeBufferGeometry attach="geometry" args={[9.5, 12]} />
        <meshBasicMaterial
          transparent={true}
          side={THREE.DoubleSide}
          attach="material"
          map={texture}
          toneMapped={false}
        />
      </mesh>
     
    </>
  );
}