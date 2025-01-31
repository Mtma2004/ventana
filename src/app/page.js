"use client";
// import Logo from "./components/Logo";
// import Landing from "./components/landing";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStore } from "./hooks/useStore";
import { useMediaQuery } from "@mui/system";
import { Suspense, useEffect, useState } from "react";
import { lazy } from "react";
import Flaviors from "./components/Flaviors";
const Landing = lazy(() => import("./components/landing"));
const Logo = lazy(() => import("./components/Logo"));

function Page() {
  useEffect(() => {
    window.onresize = () => {
      window.location.reload();
    };
  }, []);
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const ready = useStore((state) => state.ready);
  const [readyState, setReadyState] = useState(!ready);
  useEffect(() => {
    setReadyState(ready);
    console.log(readyState);
  }, [ready]);
  const isDesktop = useMediaQuery("(min-width : 768px)");

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
    <>
      <div className="mainPage">
        <Suspense fallback={<div className="loader"></div>}>
          <Logo num={1} />
          <Landing />
          <Flaviors />
        </Suspense>
      </div>
    </>
  );
}

export default Page;
