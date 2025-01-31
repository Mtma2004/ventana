import { Float } from "@react-three/drei";
import React from "react";
import { SodaCan } from "./SodaCan";
import { forwardRef } from "react";

const FloatingCan = forwardRef(
  (
    { speed, rotation, floating, range, flavor, position, canrotation, scale },
    ref
  ) => {
    return (
      <group ref={ref}>
        <Float
          speed={speed}
          rotationIntensity={rotation}
          floatIntensity={floating}
          floatingRange={range}
        >
          <SodaCan
            flavor={flavor}
            position={position}
            canrotation={canrotation}
            scale={scale}
          />
        </Float>
      </group>
    );
  }
);
FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
