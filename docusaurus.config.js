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
  onBrokenLinks: 'warn', // 'ignore' | 'log' | 'warn' | 'throw'
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
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'golang',
        path: 'docs/golang',
        routeBasePath: '/docs/golang',
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
            label: "Golang教程",
            to: '/docs/golang',
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
            title: 'Py开源项目',
            items: [
              {
                label: 'Pywss',
                href: 'https://github.com/czasg/pywss',
              },
              {
                label: 'Loggus',
                href: 'https://github.com/czasg/loggus',
              },
            ],
          },
          {
            title: 'Go开源项目',
            items: [
              {
                label: 'Go Queue',
                href: 'https://github.com/czasg/go-queue',
              },
              {
                label: 'Go Env',
                href: 'https://github.com/czasg/go-env',
              },
              {
                label: 'Go Set',
                href: 'https://github.com/czasg/go-set',
              },
              {
                label: 'Gonal',
                href: 'https://github.com/czasg/gonal',
              },
              {
                label: 'Snow',
                href: 'https://github.com/czasg/snow',
              },
            ],
          },
          {
            title: '活跃社区',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/czasg',
              },
              {
                label: 'V2EX',
                href: 'https://www.v2ex.com',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com',
              },
            ],
          },
          {
            title: '官方文档',
            items: [
              {
                label: 'Py标准库',
                href: 'https://docs.python.org/zh-cn/3/library/index.html',
              },
              {
                label: 'Docusaurus',
                href: 'https://www.docusaurus.io/zh-CN/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Czasg's Site.`,
      },
      prism: {
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
