import { CSSProperties } from "react";

const svg: CSSProperties = {
  display: "inline-block"
};

const path: CSSProperties = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 56,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

export const Logo = ({ size: width = 32, }) => <svg width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" style={svg}>
  <path style={path} d="m350 69.733 232.894 465.789H117.105L350 69.733Z" />
  <path style={path} d="m349.84 382.231.255 248.035" />
</svg>;