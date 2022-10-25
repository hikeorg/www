import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "@/components/Logo";

const TOC_TEXT = {
  "en": "On this page",
  "es": "En esta página",
  "ru": "На этой странице",
};

const EDIT_TEXT = {
  "en": "Edit this page",
  "es": "Edita esta página",
  "ru": "Изменить эту страницу",
};

const FEEDBACK_TEXT = {
  "en": "Submit your feedback",
  "es": "Danos tu opinión",
  "ru": "Отправьте свой отзыв",
};

const SEARCH_TEXT = {
  "en": "Search documentation...",
  "es": "Buscar en la documentación...",
  "ru": "Поиск документации...",
};

const config: DocsThemeConfig = {
  getNextSeoProps() {
    return {
      defaultTitle: "Hike",
      titleTemplate: "%s | Hike"
    }
  },
  logo: Logo,
  docsRepositoryBase: "https://github.com/hikeorg/www",
  navigation: false,
  project: {
    link: "https://github.com/hikeorg/www"
  },
  footer: {
    text: <Logo size={24} />
  },
  feedback: {
    content() {
      const { locale } = useRouter();
      return FEEDBACK_TEXT[locale];
    },
    labels: "documentation"
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "es", text: "Español" },
    { locale: "ru", text: "Русский" },
  ],
  editLink: {
    text() {
      const { locale } = useRouter();
      return EDIT_TEXT[locale];
    }
  },
  toc: {
    title() {
      const { locale } = useRouter();
      return TOC_TEXT[locale];
    }
  },
  search: {
    placeholder() {
      const { locale } = useRouter();
      return SEARCH_TEXT[locale];
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Hike: shortening the loop" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ricardocasares" />
      <meta property="og:title" content="Hike: shortening the loop" />
      <meta property="og:description" content="Hike: shortening the loop" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
    </>
  )
};

export default config;
