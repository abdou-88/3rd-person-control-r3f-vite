import {  useLoader } from "@react-three/fiber";

import React, { Suspense } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Tesla: React.FC = () => {
 

 
   const gltf = useLoader(GLTFLoader, "/tesla_cybertruck.glb");
   
   
   return (
     <group>
      
       <primitive
         position={[-30, -3.4, -80]}
         rotation = {[0,-1.5,0]}
         scale={7}
         object={gltf.scene}
       />
     </group>
   );


};

export default Tesla;

