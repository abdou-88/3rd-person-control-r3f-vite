//Header
import { usePlane } from '@react-three/cannon'

const Header: React.FC = () => {
  
   const [ref]:any = usePlane(() => ({
     position: [0, -1.8, -100],
     rotation: [-Math.PI / 2, 0, 0],
     
   }));  

  return (
    <mesh ref={ref} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry"   args={[100, 40]} receiveShadow />
      <meshLambertMaterial attach="material" color="#000" />
    </mesh>
  );
};

export default Header;

