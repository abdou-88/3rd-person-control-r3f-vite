import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_21: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
  };
};

export default function Tesla(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/tesla_cybertruck.glb") as GLTFResult;

  const [tdirection, setTdirection] = useState(0);

  return (
    <group
      position={[-30, -3.4, -80]}
      rotation={[0, -1.5, 0]}
      scale={7}
      {...props}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[1.85, 0.86, 0.81]} scale={0.45}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Material}
            />
            {/* top roof glass */}
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials["Material.001"]}
            />
            {/* back boot glass */}
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials["Material.002"]}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials["Material.005"]}
            />
          </group>
          {/* //back left wheele */}
          <group
            position={[2.35, 0.46, -0.25]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.24, 0.26, 0.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials["Material.006"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials["Material.007"]}
            />
          </group>

          {/* //front left wheel */}
          <group
            position={[2.35, 0.46, 1.87]}
            rotation={[0, -0.4, -Math.PI / 2]}
            scale={[0.24, 0.26, 0.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials["Material.006"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials["Material.007"]}
            />
          </group>
          {/* //front right wheele */}
          <group
            position={[1.35, 0.46, 1.87]}
            rotation={[Math.PI, 0.4, Math.PI / 2]}
            scale={[0.24, 0.26, 0.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials["Material.006"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials["Material.007"]}
            />
          </group>
          {/* //back right wheele */}
          <group
            position={[1.35, 0.46, -0.25]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={[0.24, 0.26, 0.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials["Material.006"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_21.geometry}
              material={materials["Material.007"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/tesla_cybertruck.glb");
