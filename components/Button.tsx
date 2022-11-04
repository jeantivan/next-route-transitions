import { styled } from "../stitches.config";
import { orange, sand } from "@radix-ui/colors";

const Button = styled("button", {
  all: "unset",
  padding: "8px 24px",
  minWidth: 80,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "uppercase",
  fontSize: 18,
  fontWeight: 700,
  background: orange.orange9,
  color: sand.sand1,
  borderRadius: 4,
  cursor: "pointer",
  userSelect: "none",
  "&:hover": {
    background: orange.orange8,
  },

  "&:active": {
    background: orange.orange10,
  },

  variants: {
    outlined: {
      true: {
        background: "$sand1",
        color: "$orange9",
        border: "1px solid $orange9",

        "&:hover": {
          background: "$sand3",
        },
      },
    },
  },
});

export default Button;
