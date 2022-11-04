import { styled } from "@stitches/react";
import { orange } from "@radix-ui/colors";

const Shapes = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  zIndex: -1,

  "& svg": {
    stroke: orange.orange9,
  },

  "& .circle": {
    position: "relative",
    top: "57%",
    left: "15%",
    transform: "translate(-50%, -50%) rotate(-90deg) ",
  },
  "& .hexagon": {
    position: "relative",
    top: "47%",
    right: "-60%",
    transform: "translate(-50%, -50%)",
  },
});
