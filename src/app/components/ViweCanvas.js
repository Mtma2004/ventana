"use client";

import { Loader, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Html } from "@react-three/drei";

function ViweCanvas() {
  return (
    <div
      className="canvas"
      style={{ width: "100%", height: "100vh", position: "absolute", top: "0" }}
    >
      <Canvas
        style={{
          position: "fixed",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: "30",
        }}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{
          position: [0, 0, 12],
          fov: 50,
        }}
      >
        {/* <OrbitControls makeDefault /> */}

        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}

export default ViweCanvas;
