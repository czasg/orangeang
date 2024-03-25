// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '橙子昂的小站',
  tagline: '👋👋👋',
  favicon: 'img/dd.ico',
  url: 'https://czasg.github.io',
  baseUrl: '/orange-ang/',
  organizationName: 'czasg',
  projectName: 'orange-ang',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogSidebarTitle: '全部博文',
          showReadingTime: true,
          blogSidebarCount: 'ALL',  // [ALL, number]
          postsPerPage: 10,
          editUrl:'https://github.com/czasg/orange-ang/edit/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'git',
        path: 'docs/git',
        routeBasePath: '/docs/git',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/czasg/orange-ang/edit/main',
        breadcrumbs: true, // 面包屑导航
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/dd.ico',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '橙子昂',
        logo: {
          alt: 'Czasg',
          src: 'img/dd.ico',
        },
        hideOnScroll: true, // 滚动页面时自动隐藏导航栏
        items: [
          {to: '/blog', label: '博客', position: 'left'},
          {
            label: "Git教程",
            to: '/docs/git',
          },
          {
            href: 'https://github.com/czasg',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
