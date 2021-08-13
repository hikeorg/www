import { Logo } from "./components/Logo";

export default {
  github: 'https://github.com/ricardocasares/hike-www', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/ricardocasares/hike-www/blob/main',
  titleSuffix: " – Hike.sh",
  nextLinks: false,
  prevLinks: false,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: (
    <>
      <Logo /> <span>Hike</span>
    </>
  ),
  footerEditLink: false, // will link to the docs repo
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
    </>
  ),
};
