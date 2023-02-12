const {
  Agile,
  generateId,
  createState,
  createCollection,
  createComputed,
} = require('@agile-ts/core');
const {
  AgileHOC,
  useAgile,
  useWatcher,
  useProxy,
  useSelector,
  useValue,
} = require('@agile-ts/react');
const { Event, useEvent } = require('@agile-ts/event');
const { toast } = require('react-toastify');

const githubOrgUrl = 'https://github.com/dom-assistant';
const domain = 'https://dom-assistant.ru';
const npmOrgUrl = 'https://www.npmjs.com/package/@agile-ts';
const dockerHubUrl = 'https://hub.docker.com/r/domassistant';

const customFields = {
  copyright: `Made with  💜 by <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/DevBenno">BennoDev</a> and <a target="_blank" rel="noopener noreferrer" href="https://github.com/agile-ts/agile/graphs/contributors">these awesome people</a>`,
  meta: {
    title: 'Умный дом с открытым исходным кодом, ориентированный на конфиденциальность',
    image: '/img/meta.png',
    description:
      'Dom Assistant — это современный инструмент, ориентированный на конфиденциальность. ' +
      'Программное обеспечение для домашней автоматизации с открытым исходным кодом, которое работает где угодно.',
    color: '#6c69a0',
    keywords: [
      'dom assistant',
      'home assistant',
      'умный дом open source',
      'smart home open source',
      'умный дом',
      'smart home',
      'iot',
    ],
  },
  domain,
  githubOrgUrl,
  githubUrl: `${githubOrgUrl}/core`,
  githubDocsUrl: `${githubOrgUrl}/website`,
  npmCoreUrl: `${npmOrgUrl}/core`,
  discordUrl: `https://discord.gg/T9GzreAwPH`,
  stackoverflowUrl: 'https://stackoverflow.com/questions/tagged/agile-ts',
  twitterUrl: 'https://twitter.com/AgileFramework',
  redditUrl: 'https://www.reddit.com/r/AgileTs/',
  dockerHubUrl: `${dockerHubUrl}/dom-assisatnt`,
  version: '0.0.1',
  announcementBar: {
    id: 'announcement',
    content: [
      `<Translate id="home.anonce1">❓ If you have any questions, don't hesitate to join our  <a target="_blank" rel="noopener noreferrer" href="https://forum.dom-assistant.ru">Forum</a></Translate>`,
      `🎉 Если вам нравится использовать наше приложение, поставьте звездочку на нашем <a target="_blank" rel="noopener noreferrer" href="https://github.com/dom-assistant/core">GitHub</a>`,
      `⏰ Следите за нашими новостями в нашем  <a target="_blank" rel="noopener noreferrer" href="https://t.me/domassistant">Телеграмме</a>`,
    ],
    random: false,
    interval: 100000,
  },
  liveCodeScope: {
    Agile,
    createState,
    createCollection,
    createComputed,
    useAgile,
    useProxy,
    useEvent,
    useWatcher,
    useSelector,
    useValue,
    AgileHOC,
    generateId,
    Event,
    toast,
  },
};

const config = {
  title: 'Dom Assistant',
  tagline: 'A super-stable software, designed for performance & security.',
  url: customFields.domain,
  baseUrlIssueBanner: false,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'AgileTs',
  projectName: 'https://github.com/agile-ts/agile/',
  themes: ['@docusaurus/theme-live-codeblock'],
  scripts: [{ src: 'https://snack.expo.io/embed.js', async: true }], // https://github.com/expo/snack/blob/main/docs/embedding-snacks.md
  i18n: {
    defaultLocale: "ru",
    locales: ["en", "ru"],
    localeConfigs: {
      en: {
        label: "English",
      },
      ru: {
        label: "Русский",
      },
    },
  },
  plugins: [
    'docusaurus-plugin-sass',
    // @docusaurus/plugin-google-analytics (Not necessary because it automatically gets added)
  ],
  customFields: { ...customFields },
  themeConfig: {
    hideableSidebar: false,
    // https://docusaurus.io/docs/search#using-algolia-docsearch
    algolia: {
      appId: '64P3EOD5L9',
      apiKey: '461e97fe74b935316bf63af4a6a93345',
      indexName: 'agile-ts',
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    // image: '/img/meta.png', // Gets used in Head as Meta Image (og:image)
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      defaultLanguage: 'javascript',
    },
    navbar: {
      title: ' ',
      hideOnScroll: true,
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        // left
        {
          label: 'Начало',
          position: 'left',
          items: [
            {
              label: 'Установка',
              to: '/docs/installation/',
            },
            {
              label: 'Интеграции',
              to: '/docs/integrations/',
            },
            {
              label: 'Api',
              to: '/docs/api/',
            },
            {
              label: 'Разработка',
              to: '/docs/development/',
            },
          ],
        },
        {
          label: 'Сообщество',
          position: 'left',
          items: [
            {
              label: 'GitHub',
              href: customFields.githubUrl,
            },
            {
              label: 'Telegram',
              href: customFields.discordUrl,
            },
            {
              label: 'Форум',
              href: customFields.stackoverflowUrl,
            },
            {
              label: 'Блог',
              to: '/blog/',
            },
          ],
        },
        {
          label: 'Docs',
          position: 'left',
          to: 'docs/introduction',
        },
        {
          label: 'Заказать',
          position: 'left',
          items: [
            {
              label: 'Проект',
              to: '/docs/installation/',
            },
            {
              label: 'Монтаж',
              to: '/docs/integrations/',
            },
            {
              label: 'Программирование',
              to: '/docs/api/',
            },
            {
              label: 'Разработку',
              to: '/docs/development/',
            },
          ],

        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: customFields.copyright,
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            {
              label: 'Плюс',
              to: 'docs/plus/intro',
            },
            {
              label: 'Оборудование',
              to: 'docs/hardware',
            },
            {
              label: 'Сцены',
              to: 'docs/scenes/intro',
            },
          ],
        },
        {
          title: 'Сообщество',
          items: [
            {
              label: 'GitHub',
              href: customFields.githubUrl,
            },
            {
              label: 'Telegram',
              href: customFields.stackoverflowUrl,
            },
            {
              label: 'Форум',
              href: customFields.discordUrl,
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Политика конфиденциальности',
              to: '/legal/privacy-notice',
            },
            {
              label: 'Cookie политика',
              to: '/legal/cookie-notice',
            },
            {
              label: 'Блог',
              to: '/blog/',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          admonitions: {
            icons: 'emoji',
          },
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `${customFields.githubDocsUrl}/tree/develop`,
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        blog: {
          showReadingTime: true,
          editUrl: `${customFields.githubDocsUrl}/tree/develop`,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        googleAnalytics: {
          trackingID: 'UA-189394644-1',
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
};

module.exports = { ...config };
