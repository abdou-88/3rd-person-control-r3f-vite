import { useLoader } from "@react-three/fiber";
import React from "react";

import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const Quad: React.FC = () => {
  const [quad] = useLoader(FBXLoader, ["/Quad.FBX"]);

  quad.scale.setScalar(1);
  quad.traverse((o) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
 


  return (
    <group>
     <primitive        
          position={[0,-2,0]}
          object={quad.clone()}
        />
    </group>
  );
};

export default Quad;
