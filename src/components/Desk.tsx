

import * as THREE from "three";

import img from "../assets/textures/Wood3.jpeg";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useLoader } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Curve: THREE.Mesh;
  };
  materials: {
    ["SVGMat.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Desk(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/desk.glb") as GLTFResult;
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <group
      position={[-1000, -2.5, 480]}
      scale={10000}
      {...props}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["SVGMat.001"]}
      >
        <meshBasicMaterial
          transparent={true}
          side={THREE.DoubleSide}
          attach="material"
          map={texture}
          
          toneMapped={true}
          
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/desk.glb");