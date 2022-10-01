import { useLoader } from "@react-three/fiber";
import React from "react";

import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const Quad: React.FC = () => {
  const [t1] = useLoader(FBXLoader, ["T1.FBX"]);
  const [t2] = useLoader(FBXLoader, ["T2.FBX"]);
  const [t3] = useLoader(FBXLoader, ["T3.FBX"]);
  const [t4] = useLoader(FBXLoader, ["T4.FBX"]);

  t1.scale.setScalar(0.05);
  t1.traverse((o) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  t2.scale.setScalar(0.05);
  t2.traverse((o) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
   t3.scale.setScalar(0.05);
   t3.traverse((o) => {
     o.castShadow = true;
     o.receiveShadow = true;
   });
    t4.scale.setScalar(0.05);
    t4.traverse((o) => {
      o.castShadow = true;
      o.receiveShadow = true;
    });
 


  return (
    <group>
      <primitive
        position={[0, -1.85, 90]}
        rotation={[4.71, 0, 0]}
        object={t1.clone()}
      />
      <primitive
        position={[0, -1.85, 85]}
        rotation={[4.71, 0, 0]}
        object={t3.clone()}
      />
      <primitive
        position={[0, -1.85, 80]}
        rotation={[4.71, 0, -0.2]}
        object={t2.clone()}
      />
      <primitive
        position={[0, -1.85, 75]}
        rotation={[4.71, 0, -0.2]}
        object={t3.clone()}
      />
      <primitive
        position={[0, -1.85, 70]}
        rotation={[4.71, 0, 0]}
        object={t1.clone()}
      />
      <primitive
        position={[0, -1.85, 65]}
        rotation={[4.71, 0, 0.2]}
        object={t4.clone()}
      />
      <primitive
        position={[0, -1.85, 60]}
        rotation={[4.71, 0, 0]}
        object={t3.clone()}
      />
      <primitive
        position={[0, -1.85, 55]}
        rotation={[4.71, 0, 0.2]}
        object={t2.clone()}
      />
      <primitive
        position={[0, -1.85, 50]}
        rotation={[4.71, 0, 0]}
        object={t4.clone()}
      />
      <primitive
        position={[0, -1.85, 45]}
        rotation={[4.71, 0, 0]}
        object={t1.clone()}
      />
      <primitive
        position={[0, -1.85, 40]}
        rotation={[4.71, 0, 0.2]}
        object={t3.clone()}
      />
      <primitive
        position={[0, -1.85, 35]}
        rotation={[4.71, 0, 0.2]}
        object={t2.clone()}
      />
      <primitive
        position={[0, -1.85, 30]}
        rotation={[4.71, 0, 0]}
        object={t3.clone()}
      />
      <primitive
        position={[0, -1.85, 25]}
        rotation={[4.71, 0, 0]}
        object={t1.clone()}
      ></primitive>
      <primitive
        position={[0, -1.85, 20]}
        rotation={[4.71, 0, 0]}
        object={t3.clone()}
      />
      <primitive
        position={[0, -1.85, 15]}
        rotation={[4.71, 0, 0]}
        object={t2.clone()}
      />
      <primitive
        position={[0, -1.85, 10]}
        rotation={[4.71, 0, 0]}
        object={t3.clone()}
      />
      <primitive
        position={[0, -1.85, 5]}
        rotation={[4.71, 0, 0.1]}
        object={t1.clone()}
      />
      <primitive
        position={[0, -1.85, 0]}
        rotation={[4.71, 0, 0]}
        object={t4.clone()}
      />
    </group>
  );
};

export default Quad;
