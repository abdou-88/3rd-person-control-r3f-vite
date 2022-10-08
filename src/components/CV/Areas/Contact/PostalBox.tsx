import {  useLoader } from "@react-three/fiber";

import React, { Suspense } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const PostalBox: React.FC = () => {
 

 
   const gltf = useLoader(GLTFLoader, "/boxpostal.glb");
   
   
   return (
     
      
     
       <primitive
         rotation={[0, -1.5, 0]}
         position={[30, -2.6, 70]}
         scale={3}
         object={gltf.scene.clone()}
       />
  
   );


};

export default PostalBox;

