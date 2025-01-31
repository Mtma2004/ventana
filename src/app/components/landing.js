import { View } from "@react-three/drei";
import Scene from "./Scene";
import TextSpliter from "./TextSpliter";
import { Bubbles } from "./Bubbils";
import { useMediaQuery } from "@mui/material";

function Landing() {
  const isDesktop = useMediaQuery("(min-width : 768px)");

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
