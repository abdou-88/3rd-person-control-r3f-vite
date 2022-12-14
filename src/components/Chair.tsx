
import { useLoader } from "@react-three/fiber";
import screen from "../assets/textures/Chair.jpg";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";




type GLTFResult = GLTF & {
  nodes: {
    pCube4_lambert2_0: THREE.Mesh;
  };
  materials: {
    lambert2: THREE.MeshStandardMaterial;
  };
};

export default function Chair(props: JSX.IntrinsicElements["group"]) {

  const { nodes, materials } = useGLTF("/desk_chair.glb") as GLTFResult;
  const texture = useLoader(THREE.TextureLoader, screen);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-355, -250, 215]} rotation={[0, -2.4, 0]} scale={20}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube4_lambert2_0.geometry}
              material={materials.lambert2}
            >
              <meshBasicMaterial
                transparent={true}
                side={THREE.DoubleSide}
                attach="material"
                map={texture}
                toneMapped={false}
              />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/desk_chair.glb");