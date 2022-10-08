import {  useLoader } from "@react-three/fiber";

import React, { Suspense } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Lamps: React.FC = () => {
 

 
   const gltf = useLoader(GLTFLoader, "/lamp.glb");
   
   
   return (
     <group>
      
       <primitive
         position={[-10, -2.1, -50]}
         scale={0.27}
         object={gltf.scene.clone()}
       />
       <primitive
         rotation={[0, 3, 0]}
         position={[10, -2.1, -20]}
         scale={0.27}
         object={gltf.scene.clone()}
       />
       <primitive
         position={[-10, -2.1, 10]}
         scale={0.27}
         object={gltf.scene.clone()}
       />
       <primitive
         rotation={[0, 3, 0]}
         position={[10, -2.1, 30]}
         scale={0.27}
         object={gltf.scene.clone()}
       />
       <primitive
         position={[-10, -2.1, 50]}
         scale={0.27}
         object={gltf.scene.clone()}
       />
       <primitive
         rotation={[0, 3, 0]}
         position={[10, -2.1, 70]}
         scale={0.27}
         object={gltf.scene.clone()}
       />
       <primitive
         position={[-10, -2.1, 90]}
         scale={0.27}
         object={gltf.scene.clone()}
       />
     </group>
   );


};

export default Lamps;

