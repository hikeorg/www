import { CSSProperties } from "react";

const svg: CSSProperties = {
  display: "inline-block"
};

const path: CSSProperties = {
  fill: "currentColor",
  strokeWidth: 56,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

export const Logo = ({ size: width = 36, }) => <svg width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" style={svg}>
  <path style={path} d="m290.7 475.9-55.5 118a27.8 27.8 0 0 1-50.7-22.7l51.3-120A30 30 0 0 1 291 475l-.4 1ZM240 167.1a15.8 15.8 0 0 0-22.7 4l-17.8 27a61 61 0 0 0-8.6 30.8l5.5 136a18 18 0 0 0 17.5 16.9h5c9.3.1 19-7.1 21.5-16l42.1-147.6a26.2 26.2 0 0 0-8.9-26.2L240 167.1Zm122.1 24.2a50.4 50.4 0 0 0 52.3-49.3c.7-28.3-21.6-52-49.3-52.4a51.3 51.3 0 0 0-50.9 51.2c.2 26.6 21.4 49 48 50.5Z" />
  <path style={path} d="m508 310.2-160.8-100-3.3-1.7a31.8 31.8 0 0 0-42 14.9 39.4 39.4 0 0 0-8.2 15.7l-32.4 125a39.5 39.5 0 0 0-1 15.6 35.1 35.1 0 0 0 12.7 32.9l89.5 71.3v98.7a27.8 27.8 0 0 0 55.6 0v-112c0-7-2.7-14.2-8.1-19.6l-1.2-1.1-69.7-69.7 24-92.5 116 54.5-15.3 255a12 12 0 0 0 23.8 1.5l15-251a20.6 20.6 0 0 0 5.4-37.5Z" />
</svg>;