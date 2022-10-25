import type { AppType } from "next/app";
import { Analytics } from "@vercel/analytics/react";

const App: AppType = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Analytics />
  </>
);

export default App;
