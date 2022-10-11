const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  unstable_flexsearch: {
    codeblocks: true
  },
  unstable_defaultShowCopyCode: true
});

module.exports = withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'es-ES', 'ru-RU'],
    defaultLocale: 'en-US'
  },
  experimental: {
    newNextLinkBehavior: true,
  },
});