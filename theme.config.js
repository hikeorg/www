import { Logo } from './components/Logo';

export default {
  repository: 'https://github.com/hikeorg/hike-www', // project repo
  docsRepository: 'https://github.com/hikeorg/hike-www', // docs repo
  branch: 'master', // branch of docs
  path: '/', // path of docs
  titleSuffix: ' – Hike.sh',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: <Logo />,
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: <>
    <Logo /> Hike
  </>,
  head: <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Hike: GitHub Automation Apps" />
    <meta name="og:title" content="Hike: GitHub Automation Apps" />
    <link rel="icon" href="/hike.svg" />
  </>
};