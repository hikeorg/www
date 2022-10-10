import { Logo } from "./components/Logo";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: Logo,
  navigation: false,
  project: {
    link: "https://github.com/hikeorg"
  },
  footer: {
    text: `Hike.sh`
  }
};

export default config;