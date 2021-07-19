import { global } from "lib/css";

export const globalStyles = global({
  "html, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6":
    {
      margin: "0",
      padding: "0",
    },

  "h1, h2, h3, h4, h5, h6": {
    fontSize: "100%",
    fontWeight: "normal",
  },

  ul: { listStyle: "none" },

  "button, input, select, textarea": { margin: "0" },

  html: {
    boxSizing: "border-box",
    height: "100vh",
    minHeight: "100%",
  },

  "*, *::before, *::after": {
    boxSizing: "inherit",
    fontFamily: "$sans",
  },

  "img, video": { height: "auto", maxWidth: "100%" },
  iframe: { border: "0" },
  table: { borderCollapse: "collapse", borderSpacing: "0" },

  body: {
    fontSize: "16px",
    color: "$fg",
    background: "$bg",
    margin: 0,
    padding: 0,
  },

  "#__next": {
    width: "100%",
    height: "100vh",
  },

  a: {
    textDecoration: "none",
    color: "$fg",
  },

  "::selection": {
    color: "$fg",
    background: "$selection",
  },
});
