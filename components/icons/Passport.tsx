import { CSSProperties } from "react";

const svg: CSSProperties = {
  display: "inline-block",
  width: 96
};

const path: CSSProperties = {
  fill: "currentColor",
};


export const Passport = ({ size: width = 96 }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" style={{ ...svg, width }}>
  <path style={path} d="M593.1 119 345.5 67.4a7 7 0 0 0-8.3 5.5l-33.5 160-34.4-29.8a7 7 0 0 0-9.8.6l-5.3 5.8-12.4-11.3a7 7 0 0 0-10 .5l-43 47a7 7 0 0 0 .4 10l12.3 11.3-5.3 5.8a7 7 0 0 0 .3 10l30.4 29.3-42 45.8-31.8-27.7a7 7 0 0 0-9.9.6l-5.3 5.8-12.4-11.3a7 7 0 0 0-10 .4l-43 47.1a7 7 0 0 0 .4 10L85.3 394l-5.4 5.8a7 7 0 0 0 .3 9.9L198 523.3a7 7 0 0 0 1 8.3l91.9 95.3c3.6 3.8 8.7 6 13.9 6h.2c5.4-.1 10.4-2.4 14-6.3l71.2-77.9a19.4 19.4 0 0 0-2-28L368.5 505l137.8 28.8a46 46 0 0 0 34.3-6.5 45.3 45.3 0 0 0 19.7-28.8l68-325.4a45.3 45.3 0 0 0-35.3-54zM204 250l33.6-36.7 7.1 6.5-33.5 36.7zm61.4-31.8 117.9 102.3-59.6 65.1-112.3-108.4zM424.9 490c-1 1-2.3 1.6-3.8 1.7a5 5 0 0 1-3.8-1.6l-11.2-11.6 76.9-84 12.5 10.1a6 6 0 0 1 2 3.7c0 1.4-.5 2.8-1.4 3.9zm-28.6-21.7L330 399.5l67.6-73.8 74.4 60zm-168.2-73.1 39.9-43.6 9 8.8v.1l-13.7 65.2zm9-73.4 20.7 20-40.4 44.1-21.7-18.9zM87.7 377l33.5-36.6 7.1 6.5-33.5 36.7zm61.3-31.7 117.9 102.2-59.6 65.2L95 404.3zm132.3 107.4 74.4 60-75.7 82.7-66.3-68.8zm99.9 82.6c0 1.4-.4 2.8-1.4 3.9L308.6 617a5.2 5.2 0 0 1-7.6.1l-11-11.5 76.8-84 12.6 10c1 1 1.7 2.3 1.9 3.7zM285 437.5a7 7 0 0 0-8.3-.2l-1.2-1 .2-.5 13.3-63.9 25.2 24.4a7 7 0 0 0 1 8.3l90.3 93.6-60.6-12.6h-.3zm329.6-267.3-68 325.4a31.2 31.2 0 0 1-37.3 24.3l-79.1-16.5c1.9-1 3.6-2.3 5-3.9l71.3-77.8a19.4 19.4 0 0 0-2.1-28l-103.1-83.2a7 7 0 0 0-8.4-.2l-77-66.8 33.7-161L590.2 133c17 3.6 28 20.3 24.4 37.3z" />
  <path style={path} d="M555.3 162.8c-8.2-7.3-20.1-5.5-22.8-5-12.6 1.6-31.8 22.6-37.3 29l-14.2 15-57-33.4c-4.6-3.2-11.2-2.3-15.7 2.2l-4.5 4.5a13.9 13.9 0 0 0-4 7.7c-.5 3.5.6 7 3.3 9.6l48 41.7-26.2 30.7-13.2-7c-4.5-2.3-10-1.4-13.5 2.2l-4.3 4.3a11.8 11.8 0 0 0 0 16.7l44.1 44c2.2 2.2 5.2 3.4 8.3 3.4h.1c3.1 0 6-1.2 8.3-3.5l4.3-4.3a12 12 0 0 0 2.2-13.6l-6.8-13.2 30.5-26 42 48.3c4.4 4.5 11.9 4 17-1l4.5-4.6c4.4-4.5 5.3-11 2.2-15.6L517 238l15.2-14.2.6-.6c7.2-6.4 26.7-24.6 28.2-36.7.5-2.7 2.3-14.7-5.2-23.2l-.6-.5zm-8 21c-.2.4-.2.7-.2 1-.4 4.2-11.7 17.5-24.4 28.5l-.9 1-18.5 17.3a7 7 0 0 0-1.3 8.8l35.8 60.8-2.8 2.8-44-50.7a7 7 0 0 0-10-.7l-40 34.2a7 7 0 0 0-1.7 8.6l8.5 16.5-1.5 1.5-40.7-40.8 1.4-1.4 16.2 8.7a7 7 0 0 0 8.7-1.6l34.6-40.4a7 7 0 0 0-.8-10L415 184l2.9-2.7 60.9 35.8a7 7 0 0 0 8.7-1.3l18.3-19.5c10.8-12.4 24.3-24 28.4-24.3.3 0 .6 0 1-.2 1.4-.3 7.9-1 10.5 1.3 2.6 2.9 2 9 1.6 10.9z" />
</svg>;