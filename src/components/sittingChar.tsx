import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    EyeLeft: THREE.Mesh;
    EyeRight: THREE.Mesh;
    Wolf3D_Head: THREE.Mesh;
    Wolf3D_Outfit_Bottom: THREE.Mesh;
    Wolf3D_Outfit_Footwear: THREE.Mesh;
    Wolf3D_Body: THREE.Mesh;
    Wolf3D_Outfit_Top: THREE.Mesh;
    Wolf3D_Teeth: THREE.Mesh;
  };
  materials: {
    ["Wolf3D_Eye.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Eye.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Skin.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Outfit_Bottom.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Outfit_Footwear.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Body.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Outfit_Top.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Teeth.002"]: THREE.MeshStandardMaterial;
  };
};

export default function Typing(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials, animations } = useGLTF("/Typing.glb") as GLTFResult;
  const Typing = useRef<THREE.Group>(null!);
  const { actions }: any = useAnimations(animations, Typing);

   useEffect(() => {
     console.log(actions);
   }, []);
   return(
     <group ref={Typing} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EyeLeft.geometry}
        material={materials["Wolf3D_Eye.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EyeRight.geometry}
        material={materials["Wolf3D_Eye.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials["Wolf3D_Skin.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials["Wolf3D_Outfit_Bottom.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials["Wolf3D_Outfit_Footwear.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials["Wolf3D_Body.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials["Wolf3D_Outfit_Top.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials["Wolf3D_Teeth.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/Typing.glb");
