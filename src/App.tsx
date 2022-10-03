import "./App.css";

import Abi from "./components/Abi";
import CVPaper from "./components/CVPaper";
import { Suspense, useState } from "react";
import { Loader, Environment } from "@react-three/drei";
import * as THREE from "three";

// react three fiber imports
import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Header from "./components/Areas/landing/HeaderPlane";
import { Cylinder } from "./components/Areas/landing/ProfilPicCylender";
import Tiles from "./components/Tiles";
import Crane from "./components/Areas/skills/Crane";
import { InfoTable, QuadTable } from "./components/InfoTable";

const App = () => {
  const fov = 60;
  const aspect = 1920 / 1080;
  const near = 0.5;
  const far = 1000.0;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
 
  const light:any = new THREE.DirectionalLight(0xffffff, 1.0);
 
    light.position.set(0, 100, 0);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadow.bias = -0.001;
    light.shadow.mapSize.width = 4096;
    light.shadow.mapSize.height = 4096;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.left = 50;
    light.shadow.camera.right = -50;
    light.shadow.camera.top = 50;
    light.shadow.camera.bottom = -50;

  return (
    <div className="container" tabIndex={0}>
      <Canvas camera={camera} shadows>
        <OrbitControls />

        <Suspense fallback={null}>
          <Physics>
            <InfoTable />
            <QuadTable/>
            <directionalLight {...light} />
            <Abi camera={camera} />
            <CVPaper />
            <Header />
            <Cylinder />
            <Tiles />
            <Crane />
            <Environment background={true} files="Beach.hdr" path={"/"} />
          </Physics>
        </Suspense>
      </Canvas>
      <Loader
        dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
        initialState={(active) => active}
      />
    </div>
  );
};

export default App;
