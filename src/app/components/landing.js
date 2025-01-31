"use client";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import TextSpliter from "./TextSpliter";
import { Bubbles } from "./Bubbils";
import { useMediaQuery } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStore } from "../hooks/useStore.js";
import { useEffect, useState } from "react";

function Landing() {
  useEffect(() => {
    window.onresize = () => {
      window.location.reload();
    };
  }, []);
  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width : 768px)");
  const [readyState, setReadyState] = useState(!ready);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useEffect(() => {
    setReadyState(ready);
    console.log(readyState);
  }, [ready]);
  useGSAP(
    () => {
      if (!ready && !isDesktop) return;
      const introtl = gsap.timeline();
      introtl
        .set(".homeContener", { opacity: 1 })
        .from(".landingTitle", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 0.5,
        })
        .from(".soda", { opacity: 0, y: 30, ease: "power4.in" }, "+=.8")
        .from(".sugar", {
          opacity: 0,
          y: 10,
          ease: "power4.in",
        })
        .fromTo(
          ".buy",
          {
            opacity: 0,
            y: 10,
          },
          { opacity: 1, y: 0 }
        );

      const scrollTi = gsap.timeline({
        scrollTrigger: {
          trigger: ".homeContener",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      scrollTi
        .fromTo(
          "body",
          {
            background: " rgb(250,167,161)",
            background:
              " radial-gradient(circle,rgba(255, 182, 72, 1) 0%,rgba(129, 210, 255, 1) 100%)",
          },
          {
            background: "rgb(245,112,103)",
            background:
              "radial-gradient(circle, rgba(250,167,161,1) 0%, #fd2e2e 100%)",
            overwrite: "auto",
            ease: "none",
            duration: "1",
          }
        )

        .from(".flaviors .spliteWord .spliteCharc", {
          y: "40px",
          opacity: 0,
          rotate: "25deg",
          scale: 1.3,
          stagger: 0.1,
          ease: "back.out",
          duration: 0.5,
        })
        .from(".flaviors .flavDiscription", {
          y: "30px",
          opacity: 0,
          ease: "back.out",
          duration: 0.5,
        });
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { dependencies: [ready] }
  );

  return (
    <div className="homeContener">
      <View
        style={{
          width: "101dvw",
          height: "100dvh",
          position: "sticky",
          top: "0",
          left: "0",
          marginTop: "-100dvh",
          marginLeft: "-30px",
          zIndex: "10",
        }}
      >
        <Scene />
        <Bubbles />
      </View>

      <div>
        <h1 className="landingTitle">ventana</h1>
        <h1 className="landingTitle">cola</h1>
      </div>
      <p className="soda" style={isDesktop ? {} : { fontSize: "20px" }}>
        made in palestine
      </p>
      <p
        className="sugar"
        style={
          isDesktop
            ? {
                width: "fit-content",
                margin: "0 auto",
                fontSize: "25px",
                fontWeight: "400",
                color: "#082f49",
              }
            : {
                width: "fit-content",
                margin: "0 auto",
                fontSize: "20px",
                fontWeight: "400",
                color: "#082f49",
              }
        }
      >
        3-5g sugar. 9g fiber. 5 delicious flavors.{" "}
      </p>
      <button className="buy">see flavors</button>
      <div style={{ position: "relative", zIndex: 32 }} className="flaviors">
        <div
          style={isDesktop ? { padding: "10px 100px" } : { padding: "10px" }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <TextSpliter text={"try"} />
            <TextSpliter text={"all"} />
          </div>
          <TextSpliter text={"six"} />
          <TextSpliter text={"flavors"} />
          <p
            className="flavDiscription"
            style={
              isDesktop
                ? {
                    fontSize: "20px",
                    width: "30dvw",
                    color: "#082f49",
                    marginTop: "20px",
                  }
                : {
                    fontSize: "25px",
                    width: "70dvw",
                    color: "#082f49",
                    marginTop: "20px",
                  }
            }
          >
            Our soda is made with real fruit juice and a touch of cane sugar. We
            never use artificial sweeteners or high fructose corn syrup. Try all
            five flavors and find your favorite!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
