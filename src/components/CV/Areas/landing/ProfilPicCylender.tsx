import { useCylinder } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import profilPic from "../../../../assets/textures/profilePic.png";

export  function Cylinder() {
  const [ref, api]: any = useCylinder(() => ({
    
    rotation: [-Math.PI/2 , 1.6, 0],
    position: [-10, 4, -95],
  }));
  // useFrame(() => (myref.current.rotation.x = myref.current.rotation.y += 0.01))
const texture = useLoader(THREE.TextureLoader, profilPic);
  
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 8, 0);
      }}
      ref={ref}
    >
      <cylinderGeometry  attach="geometry" args={[8, 8, 0.4, 60]} />
      <meshBasicMaterial map={texture} attach="material"  />
    </mesh>
  );
}
