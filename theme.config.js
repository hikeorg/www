import { Logo } from "./components/Logo";

export default {
  repository: "https://github.com/hikeorg/hike-www", // project repo
  docsRepository: "https://github.com/hikeorg/hike-www", // docs repo
  branch: "master", // branch of docs
  path: "/", // path of docs
  titleSuffix: " – Hike.sh",
  nextLinks: false,
  prevLinks: false,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: (
    <>
      <Logo /> <span style={{fontFamily: "Barlow"}}>Hike</span>
    </>
  ),
  footerEditOnGitHubLink: false, // will link to the docs repo
  logo: (
    <>
      <Logo /> <span style={{ fontSize: 26, marginLeft: 5, fontWeight: 600 }}>Hike</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Hike: GitHub Automation Apps" />
      <meta name="og:title" content="Hike: GitHub Automation Apps" />
      <link rel="icon" href="/hike.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=JetBrains+Mono&display=swap" rel="stylesheet"></link>
    </>
  ),
};
