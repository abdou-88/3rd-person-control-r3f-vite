
import * as THREE from "three";
import { MeshDistortMaterial, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import FrameT from "../assets/textures/frametexture.jpg";
import AdamPic from "../assets/textures/Bittu.jpg";
import { useLoader } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Model_0: THREE.Mesh;
    Model_1: THREE.Mesh;
  };
  materials: {
    Frame: THREE.MeshStandardMaterial;
    Inner_Stuff: THREE.MeshStandardMaterial;
  };
};

export default function PicFrame(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/picture_frame.glb"
  ) as GLTFResult;

  const texture = useLoader(THREE.TextureLoader, FrameT);
  const PicTexture = useLoader(THREE.TextureLoader, AdamPic);

  return (
    <group {...props} dispose={null}>
      <group scale={35} position={[-840, -2.7, -120]} rotation={[-Math.PI / 2, 0, 1.2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Model_0.geometry}
          material={materials.Frame}
        >
          <MeshDistortMaterial
            attach="material"
            map={texture}
            distort={0} // Strength, 0 disables the effect (default=1)
            speed={0} // Speed (default=1)
            wireframe={false}
          />
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Model_1.geometry}
          material={materials.Inner_Stuff}
        >
          
          <meshBasicMaterial
            transparent={true}
            //side={THREE.DoubleSide}
            attach="material"
            map={PicTexture}            
            toneMapped={true}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/picture_frame.glb");
