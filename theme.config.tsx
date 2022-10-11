import { Logo } from "./components/Logo";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: Logo,
  docsRepositoryBase: "https://github.com/hikeorg/www",
  navigation: false,
  project: {
    link: "https://github.com/hikeorg/www"
  },
  footer: {
    text: `Hike.sh`
  },
  feedback: {
    content: "Leave your feedback",
    labels: "documentation"
  }
};

export default config;