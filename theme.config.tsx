import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "@/components/Logo";

const TOC_TEXT = {
  "en-US": "On this page",
  "es-ES": "En esta página",
  "ru-RU": "На этой странице",
};

const EDIT_TEXT = {
  "en-US": "Edit this page",
  "es-ES": "Edita esta página",
  "ru-RU": "Изменить эту страницу",
};

const FEEDBACK_TEXT = {
  "en-US": "Submit your feedback",
  "es-ES": "Danos tu opinión",
  "ru-RU": "Отправьте свой отзыв",
};

const SEARCH_TEXT = {
  "en-US": "Search documentation...",
  "es-ES": "Buscar en la documentación...",
  "ru-RU": "Поиск документации...",
};

const config: DocsThemeConfig = {
  logo: Logo,
  titleSuffix: " - Hike",
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
    { locale: "en-US", text: "English" },
    { locale: "es-ES", text: "Español" },
    { locale: "ru-RU", text: "Русский" },
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
  }
};

export default config;