import {  useLoader } from "@react-three/fiber";
import img from "../../../../assets/textures/Crane.jpg";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";


type GLTFResult = GLTF & {
  nodes: {
    Line070001: THREE.Mesh;
    Line070001_1: THREE.Mesh;
    Line182: THREE.Mesh;
    Line183: THREE.Mesh;
    Line193: THREE.Mesh;
  };
  materials: {
    ["wire_088144225.001"]: THREE.MeshStandardMaterial;
    ["Material__1280.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Crane(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/cranesmalleer.glb") as GLTFResult;
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <group {...props} dispose={null}>
      <group
        position={[-30, -3, 19]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line070001.geometry}
          material={materials["wire_088144225.001"]}
        >
          <meshBasicMaterial
            transparent={true}
            side={THREE.DoubleSide}
            attach="material"
            map={texture}
            toneMapped={false}
            
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line070001_1.geometry}
          material={materials["Material__1280.001"]}
        />
          
      </group>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line182.geometry}
        material={materials["wire_088144225.001"]}
        position={[-0.37, -0.01, 1.84]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.02, 0.01, 0.02]}
     / >
        
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line183.geometry}
        material={materials["wire_088144225.001"]}
        position={[-0.37, -0.01, 1.84]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.02, 0.01, 0.02]}
      />
        
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line193.geometry}
        material={materials["wire_088144225.001"]}
        position={[-0.37, -0.01, 1.84]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.02, 0.01, 0.02]}
      />
        
    </group>
  );
}

useGLTF.preload("/cranesmalleer.glb");