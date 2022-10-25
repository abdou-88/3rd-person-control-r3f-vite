import * as THREE from "three";

import { useLoader } from "@react-three/fiber";
import border from "../../../../assets/textures/AreaBorders.png";

export function SArea() {
  const Border = useLoader(THREE.TextureLoader, border);

  return (
    <>
      <mesh rotation={[1.5708, 0, 0]} position={[-17, -1.98, 14.8]}>
        <planeBufferGeometry attach="geometry" args={[6, 10]} />
        <meshBasicMaterial
          transparent={true}
          side={THREE.DoubleSide}
          attach="material"
          map={Border}
          opacity={0.3}
          toneMapped={false}
        />
      </mesh>
    </>
  );
}
