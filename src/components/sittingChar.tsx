


import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    EyeLeft: THREE.SkinnedMesh;
    EyeRight: THREE.SkinnedMesh;
    Wolf3D_Head: THREE.SkinnedMesh;
    Wolf3D_Body: THREE.SkinnedMesh;
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh;
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh;
    Wolf3D_Outfit_Top: THREE.SkinnedMesh;
    Wolf3D_Teeth: THREE.SkinnedMesh;
    Hips: THREE.Bone;
  };
  materials: {
    ["Wolf3D_Eye.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Skin.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Body.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Outfit_Bottom.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Outfit_Footwear.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Outfit_Top.002"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Teeth.002"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName =
  | "Armature|mixamo.com|Layer0"
  | "EyeLeft"
  | "EyeRight"
  | "Wolf3D_Body"
  | "Wolf3D_Head"
  | "Wolf3D_Outfit_Bottom"
  | "Wolf3D_Outfit_Footwear"
  | "Wolf3D_Outfit_Top"
  | "Wolf3D_Teeth";

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
 }
 
export default function Typing(props: JSX.IntrinsicElements["group"]) {
  const group: any = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/typingshapekeys.glb"
  ) as GLTFResult;
  const { actions }:any = useAnimations(animations, group);

  useEffect(() => {
    
    actions["Armature|mixamo.com|Layer0"].play();
  },[]);
  return (
    <group  position = {[-400,-355, 309]} rotation= {[0,-2.5,0.05]} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group scale= {490} name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials["Wolf3D_Eye.002"]}
            skeleton={nodes.EyeLeft.skeleton}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials["Wolf3D_Eye.002"]}
            skeleton={nodes.EyeRight.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials["Wolf3D_Skin.002"]}
            skeleton={nodes.Wolf3D_Head.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials["Wolf3D_Body.002"]}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials["Wolf3D_Outfit_Bottom.002"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials["Wolf3D_Outfit_Footwear.002"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials["Wolf3D_Outfit_Top.002"]}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials["Wolf3D_Teeth.002"]}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/typingshapekeys.glb");

