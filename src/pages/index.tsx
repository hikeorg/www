import Head from "next/head";
import { Box } from "components/Box";
import { Logo } from "components/Logo";

export default function Home() {

  return (<>
    <Head>
      <title>Hike.sh - GitHub automation bots</title>
    </Head>
    <Box css={{ p: "30px", gc: "1fr 2fr" }}>
      <Logo name="hike" tld=".sh" />
    </Box>
  </>
  );
}
