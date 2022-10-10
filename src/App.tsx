import "./App.css";

import Abi from "./components/Abi";
import CVPaper from "./components/CV/CVPaper";
import { Suspense, useState } from "react";
import { Environment} from "@react-three/drei";
import * as THREE from "three";
import { CustomLoader } from "./components/Loader";
// react three fiber imports
import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Header from "./components/CV/Areas/landing/HeaderPlane";
import { Cylinder } from "./components/CV/Areas/landing/ProfilPicCylender";
import Tiles from "./components/CV/Tiles";
import Crane from "./components/CV/Areas/skills/Crane";
import { InfoTable, QuadTable } from "./components/CV/InfoTable";
import {Area} from "./components/CV/Areas/AreaBorder";
import Lamps from "./components/CV/Lamps";
import Tesla from "./components/CV/Tesla";
import Laptop from "./components/Laptop";
import Monitors from "./components/Monitors";
import PostalBox from "./components/CV/Areas/Contact/PostalBox";
import MousePad from "./components/MousePad";
import PicFrame from "./components/PicFrame";
import Desk from "./components/Desk";
import Chair from "./components/Chair";


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
    light.shadow.mapSize.width = 8096;
    light.shadow.mapSize.height = 8096;
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

        <Suspense fallback={<CustomLoader />}>
          <Physics>
            <InfoTable />
            <QuadTable />
            <directionalLight {...light} />
            <Abi camera={camera} />
            <CVPaper />
            <Tiles />
            <Header />
            <Area />
            <Cylinder />
            <Lamps />
            <PostalBox />
            <Crane />
            <Tesla />
            <Desk/>
            <Chair/>
            <Laptop />
            <PicFrame/>
            <MousePad />
            <Monitors />
            <Environment background={true} files="Beach.hdr" path={"/"} />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
