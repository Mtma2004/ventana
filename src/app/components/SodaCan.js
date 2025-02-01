"use client";

import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useMediaQuery } from "@mui/material";

useGLTF.preload("/grap.gltf");

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 0.7,
  color: "white",
});

export function SodaCan({
  flavor = "grape",
  scale,
  position = [1, 4, 1],
  canrotation,
}) {
  const { nodes } = useGLTF("/grap.gltf");
  const labels = {
    apple: useTexture("/labels/apple.png"),
    grape: useTexture("/labels/grape.png"),
    strawberry: useTexture("/labels/strawberry (1).png"),
    pineapple: useTexture("/labels/pineapple.png"),
    kiwi: useTexture("/labels/Kiwi-and-lemon.png"),
    peach: useTexture("/labels/Peach-and-blueberry.png"),
  };

  // Fixes upside down labels
  labels.apple.flipY = false;
  labels.grape.flipY = false;
  labels.strawberry.flipY = false;
  labels.pineapple.flipY = false;
  labels.kiwi.flipY = false;
  labels.peach.flipY = false;

  const label = labels[flavor];

  return (
    <group
      dispose={null}
      scale={scale}
      rotation={[0, canrotation, 0]}
      position={position}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_1.geometry}
        material={metalMaterial}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh_2.geometry}>
        <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.key.geometry}
        position={[0, 0.2, 0]}
        material={metalMaterial}
      />
    </group>
  );
}
