import * as THREE from 'three'

import {  useLoader } from '@react-three/fiber'
import screen from "../assets/textures/laptopScreen.jpg";



export default function LScreen() {
  const texture = useLoader(THREE.TextureLoader, screen);
  
  return (
    <>
      <mesh rotation = {[0,-0.50,0]} position={[-270, 73, -118.5]}>
        <planeBufferGeometry attach="geometry" args={[210, 120]} />
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
