import { createStitches } from "@stitches/react";
import { sand, orange } from "@radix-ui/colors";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = createStitches({
  theme: {
    colors: {
      ...sand,
      ...orange,
    },
  },
});
