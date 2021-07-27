import { createCss } from "@stitches/react";

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {
      colors: {
        bg: "#ffffff",
        fg: "#000000",
        selection: "gainsboro",
      },
      fonts: {
        sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      },
    },
    media: {
      bp1: "(min-width: 480px)",
    },
    utils: {
      m: (config) => (value) => ({
        margin: value,
      }),
      p: (config) => (value) => ({
        padding: value,
      }),
      gc: () => (value) => ({
        display: "grid",
        gridTemplateColumns: value,
      }),
      gr: () => (value) => ({
        display: "grid",
        gridTemplateRows: value,
      }),
    },
  });
