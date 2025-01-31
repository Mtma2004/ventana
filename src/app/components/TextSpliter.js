import { useMediaQuery } from "@mui/material";

function TextSpliter({ text }) {
  const isDesktop = useMediaQuery("(min-width : 768px)");

  return (
    <div
      style={
        isDesktop
          ? { lineHeight: "6dvw", color: "#082f49", display: "flex" }
          : { lineHeight: "10dvw", color: "#082f49", display: "flex" }
      }
      className="spliteWord"
    >
      {text.split("").map((it, ind) => (
        <span
          key={ind}
          style={
            isDesktop
              ? {
                  fontSize: "6.5dvw",
                  textTransform: "uppercase",
                  fontWeight: "900",
                  display: "block",
                }
              : {
                  fontSize: "10dvw",
                  textTransform: "uppercase",
                  fontWeight: "900",
                  display: "block",
                }
          }
          className="spliteCharc"
        >
          {it}
        </span>
      ))}
    </div>
  );
}

export default TextSpliter;
