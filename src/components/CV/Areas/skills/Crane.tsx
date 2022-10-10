import {  useLoader } from "@react-three/fiber";
import * as THREE from "three";
import React, { Suspense } from "react";
import img from "../../../../assets/textures/CharacterInfo.png";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Crane: React.FC = () => {
 
const texture = useLoader(THREE.TextureLoader, img);
 
   const gltf = useLoader(GLTFLoader, "/cranesmalleer.glb");
   
   return (
     <Suspense fallback={null}>
       <primitive
         
         position={[-15, -2.6, 0]}
         scale={25}
         
         object={gltf.scene}
       
       />
       
     </Suspense>
   );


};

export default Crane;

