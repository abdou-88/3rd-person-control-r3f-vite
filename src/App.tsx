import "./App.css";
import MultiKeyControler from "./components/MultiKeyControler";
import { Abi } from "./components/Abi";
import Floor from "./components/Floor";
import {Suspense} from 'react';
import { Environment} from "@react-three/drei";

// react three fiber imports
import { Canvas } from "@react-three/fiber";

import {OrbitControls} from '@react-three/drei';
import { Physics } from "@react-three/cannon";

const App = () => {
 
  
  return (
    <div className="container" tabIndex={0}>
      <Canvas camera={{ fov: 20, position: [0, 2, -20] }} shadows>
        <OrbitControls />

        <Suspense fallback={null}>
          <Physics>
            <directionalLight
              intensity={1.3}
              position={[0, 10, 0]}
              castShadow
              shadow-mapSize-height={512}
              shadow-mapSize-width={512}
            />
            <Abi position={[0, -2, 0]} />
            <Floor />
          </Physics>
          <Environment background={true} files="Beach.hdr" path={"/"} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
