"use client";
import React, { useEffect, useRef } from "react";
import FloatingCan from "./FloatingCan";
import { Environment } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useStore } from "../hooks/useStore";
import { useMediaQuery } from "@mui/material";

function Scene() {
  const isDesktop = useMediaQuery("(min-width : 768px)");

  const isReady = useStore((state) => state.isReady);

  const pineapple = useRef(null);
  const grape = useRef(null);
  const apple = useRef(null);
  const strawberry = useRef(null);
  const peach = useRef(null);
  const kiwi = useRef(null);
  const group = useRef(null);

  useGSAP(() => {
    if (
      !pineapple.current ||
      !grape.current ||
      !apple.current ||
      !strawberry.current ||
      !peach.current ||
      !kiwi.current
    )
      return;
    let scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".homeContener",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    let tl = gsap.timeline({
      defaults: {
        ease: "back.out(1.4)",
        duration: 3,
        stagger: 0.5,
      },
    });

    gsap.set(
      pineapple.current.position,
      isDesktop ? { x: -3, y: 6, z: -0.5 } : { x: 0, y: 4, z: 0 }
    );
    gsap.set(pineapple.current.rotation, { z: -0.5 });
    gsap.set(
      grape.current.position,
      isDesktop ? { x: 3, y: 7, z: 0 } : { x: 1, y: 5, z: 0 }
    );
    gsap.set(grape.current.rotation, { z: 0.5 });
    gsap.set(
      strawberry.current.position,
      isDesktop ? { x: 0.5, y: 7, z: 0 } : { x: 0.5, y: 4.5, z: 0 }
    );
    gsap.set(apple.current.position, { x: 5, y: 18, z: -1 });
    gsap.set(peach.current.position, { x: -10, y: 17, z: -1 });
    gsap.set(kiwi.current.position, { x: -5, y: -10, z: -1 });
    if (window.scrollY < 20) {
      tl.from(grape.current.position, { y: -5, x: 0 }, 0)
        .from(grape.current.rotation, { z: 1 }, 0)
        .from(pineapple.current.position, { y: 10, x: -10 }, 0)
        .from(pineapple.current.rotation, { z: 1 }, 0)
        .from(strawberry.current.position, { y: 10, x: 0 }, 0)
        .from(strawberry.current.rotation, { z: 1 }, 0);
    }
    scrollTl
      .to(group.current.rotation, { y: 6.5, z: 0.3 })
      .to(
        kiwi.current.position,
        isDesktop ? { x: 3, z: -6, y: 9 } : { x: -4, z: -3, y: 4 },
        0
      )
      .to(
        grape.current.position,
        isDesktop ? { z: -2, x: 1 } : { x: -4, y: 5, z: -1 },
        0
      )
      .to(
        strawberry.current.position,
        isDesktop ? { z: -9, x: 3, y: 3 } : { z: -5, x: -2, y: 0 },
        0
      )
      .to(
        apple.current.position,
        isDesktop ? { z: -3, x: 0, y: 7 } : { z: -3, x: 0, y: 3 },
        0
      )
      .to(apple.current.rotation, { y: -0.5 }, 0)
      .to(
        peach.current.position,
        isDesktop ? { z: -5, x: 3, y: 4 } : { z: -4, x: -3, y: -1 },
        0
      )
      .to(
        peach.current.rotation,
        isDesktop ? { y: -1, z: 0.5 } : { z: -1, y: 0, x: -0.7 },
        0
      )
      .to(
        pineapple.current.position,
        isDesktop ? { z: 1, x: 4, y: 4 } : { z: 1, x: 0, y: 1 },
        0
      )
      .to(pineapple.current.rotation, { y: -0.5 }, 0)
      .to(
        group.current.position,
        isDesktop
          ? { x: 7, duration: 3, ease: "sine.inOut" }
          : { x: 3, duration: 3, ease: "sine.inOut" }
      );
    isReady();
  }, []);

  return (
    <group ref={group}>
      <FloatingCan
        ref={pineapple}
        speed={2}
        rotation={0}
        flavor={"pineapple"}
        floating={2}
        range={[-0.1, 0.3, -0.1, 0.3]}
        position={[0, 0, 0]}
        canrotation={Math.PI / 2 - 1}
      />
      <FloatingCan
        ref={grape}
        speed={2}
        rotation={0}
        flavor={"grape"}
        floating={2}
        range={[-0.1, 0.2, -0.1, 0.2]}
        position={[0, 0, 0]}
        canrotation={Math.PI / 2 - 1.5}
      />
      <FloatingCan
        ref={apple}
        speed={2}
        rotation={0}
        flavor={"apple"}
        floating={2}
        range={[-0.1, 0.3, -0.1, 0.3]}
        position={[0, 0, 0]}
        canrotation={Math.PI / 2 - 1}
      />
      <FloatingCan
        ref={strawberry}
        speed={2}
        rotation={0}
        flavor={"strawberry"}
        floating={2}
        range={[-0.1, 0.2, -0.1, 0.2]}
        position={[0, 0, 0]}
        canrotation={Math.PI / 2 - 1}
      />
      <FloatingCan
        ref={peach}
        speed={2}
        rotation={0}
        flavor={"peach"}
        floating={2}
        range={[-0.1, 0.3, -0.1, 0.3]}
        position={[0, 0, 0]}
        canrotation={Math.PI / 2 - 1}
      />
      <FloatingCan
        ref={kiwi}
        speed={2}
        rotation={0}
        flavor={"kiwi"}
        floating={2}
        range={[-0.1, 0.3, -0.1, 0.3]}
        position={[0, 0, 0]}
        canrotation={Math.PI / 2 - 1}
      />
      <Environment files={"/hdr/lobby.hdr"} environmentIntensity={1.5} />
    </group>
  );
}

export default Scene;
