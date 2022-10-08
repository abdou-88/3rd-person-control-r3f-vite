

import * as THREE from "three";

import { useLoader } from "@react-three/fiber";
import border from "../../../assets/textures/AreaBorders.png";

export function Area() {
  const texture = useLoader(THREE.TextureLoader, border);

  return (
    <>
      <mesh rotation={[1.5708, 0, 0]} position={[-34, -1.99, -67.5]}>
        <planeBufferGeometry attach="geometry" args={[32, 25]} />
        <meshBasicMaterial
          transparent={true}
          side={THREE.DoubleSide}
          attach="material"
          map={texture}
          opacity={0.2}
          toneMapped={false}
        />
      </mesh>
      <mesh rotation={[1.5708, 0, 0]} position={[-34, -1.99, -35]}>
        <planeBufferGeometry attach="geometry" args={[32, 35]} />
        <meshBasicMaterial
          transparent={true}
          side={THREE.DoubleSide}
          attach="material"
          map={texture}
          opacity={0.2}
          toneMapped={false}
        />
      </mesh>

      <mesh rotation={[1.5708, 0, 0]} position={[-34, -1.99, 30]}>
        <planeBufferGeometry attach="geometry" args={[32, 45]} />
        <meshBasicMaterial
          transparent={true}
          side={THREE.DoubleSide}
          attach="material"
          map={texture}
          opacity={0.2}
          toneMapped={false}
        />
      </mesh>

      {/* ////right side areads//// */}

      <mesh rotation={[1.5708, 0, 0]} position={[34, -1.99, -67.5]}>
        <planeBufferGeometry attach="geometry" args={[32, 25]} />
        <meshBasicMaterial
          transparent={true}
          side={THREE.DoubleSide}
          attach="material"
          map={texture}
          opacity={0.2}
          toneMapped={false}
        />
      </mesh>
      <mesh rotation={[1.5708, 0, 0]} position={[34, -1.99, -35]}>
        <planeBufferGeometry attach="geometry" args={[32, 35]} />
        <meshBasicMaterial
          transparent={true}
          side={THREE.DoubleSide}
          attach="material"
          map={texture}
          opacity={0.2}
          toneMapped={false}
        />
      </mesh>

      <mesh rotation={[1.5708, 0, 0]} position={[34, -1.99, 30]}>
        <planeBufferGeometry attach="geometry" args={[32, 45]} />
        <meshBasicMaterial
          transparent={true}
          side={THREE.DoubleSide}
          attach="material"
          map={texture}
          opacity={0.2}
          toneMapped={false}
        />
      </mesh>
    </>
  );
}
