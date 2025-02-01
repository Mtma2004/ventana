"use client";
import { View } from "@react-three/drei";
import React, { useRef, useState } from "react";
import FloatingCan from "./FloatingCan";
import { Environment } from "@react-three/drei";
import { ArrowIcon } from "./ArrowIcon";
import { useMediaQuery } from "@mui/material";
import { WavyCircles } from "./Weavy";
import gsap from "gsap";
import Logo from "./Logo";

function Flaviors() {
  const Flaviors = [
    { name: "grape", color: "#4c021f" },
    { name: "pineapple", color: "#cb7d15" },
    { name: "apple", color: "#198039" },
    { name: "strawberry", color: "#ff3a29" },
    { name: "peach", color: "#ce6e18" },
    { name: "kiwi", color: "#cfac2c" },
  ];
  const [curentFlaviorIndex, setcurentFlaviorIndex] = useState(0);
  const isDesktop = useMediaQuery("(min-width : 768px)");
  const sodaRef = useRef(null);

  function changeFlavior(index) {
    if (!sodaRef.current) return;
    const nextFlavior = (index + Flaviors.length) % Flaviors.length;

    const tl = gsap.timeline();
    tl.to(
      sodaRef.current.rotation,
      {
        y:
          index > curentFlaviorIndex
            ? `+=${Math.PI * 2 * 8}`
            : `-=${Math.PI * 2 * 8}`,
        ease: "power2.inOut",
        duration: 1,
      },
      0
    )
      .to(
        ".flaviorsTest , .wavy-circles-outer , .wavy-circles-inner",
        {
          backgroundColor: Flaviors[nextFlavior].color,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      )
      .to(".flaviorName", { y: -10, duration: 0.2, opacity: 0 }, 0)
      .to({}, { onStart: () => setcurentFlaviorIndex(nextFlavior) }, 0.5)
      .to(".flaviorName", { y: 0, opacity: 1, duration: 0.2 });
  }

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: Flaviors[0].color,
        minHeight: "125vh",
        padding: "100px 20px",
        borderRadius: "15px",
      }}
      className="flaviorsTest"
    >
      <WavyCircles />
      <h1
        style={{
          margin: "20px auto",
          width: "fit-content",
          fontSize: "5dvw",
          textTransform: "capitalize",
          color: "white",
          position: "relative",
          zIndex: "2",
        }}
      >
        choose your flavor
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button
          onClick={() => {
            changeFlavior(curentFlaviorIndex - 1);
          }}
        />
        <View
          style={
            isDesktop
              ? {
                  width: "400px",
                  height: "500px",
                }
              : { width: "260px", height: "500px" }
          }
        >
          <FloatingCan
            scale={isDesktop ? 3 : 1.5}
            ref={sodaRef}
            speed={2}
            rotation={0}
            flavor={Flaviors[curentFlaviorIndex].name}
            floating={2}
            range={[-0.1, 0.3, -0.1, 0.3]}
            position={isDesktop ? [2.2, 11, 0] : [1, 5, 0]}
            canrotation={Math.PI / 2 - 1.3}
          />

          <Environment files={"/hdr/lobby.hdr"} environmentIntensity={1.5} />
        </View>
        <Button
          direction="left"
          onClick={() => {
            changeFlavior(curentFlaviorIndex + 1);
          }}
        />
      </div>
      <p
        className="flaviorName"
        style={{
          fontSize: "4dvw",
          width: "fit-content",
          margin: "10px auto",
          color: "white",
          textTransform: "uppercase",
          position: "relative",
          zIndex: "2",
          fontWeight: "bold",
        }}
      >
        {Flaviors[curentFlaviorIndex].name}
      </p>
      <Logo num={2} style={{ top: "30px" }} />
    </div>
  );
}

function Button({ onClick, direction = "right" }) {
  return (
    <button
      style={
        direction === "right"
          ? {
              width: "80px",
              height: "80px",
              backgroundColor: "#ffffff45",
              border: "1px solid #ffffff",
              transform: "rotate(0deg)",
              borderRadius: "50%",
              position: "relative",
              zIndex: "2",
            }
          : {
              width: "80px",
              height: "80px",
              backgroundColor: "#ffffff45",
              border: "1px solid #ffffff",
              transform: "rotate(180deg)",
              borderRadius: "50%",
              position: "relative",
              zIndex: "2",
            }
      }
      onClick={onClick}
    >
      <ArrowIcon />
    </button>
  );
}
export default Flaviors;
