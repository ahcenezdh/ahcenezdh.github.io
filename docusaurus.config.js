// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FiveM Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ahcenezdh.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ahcenezdh', // Usually your GitHub org/user name.
  projectName: 'ahcenezdh.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './docSidebar.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: [
            './src/css/custom.css',
            './src/css/fonts.css',
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'FiveM Docs',
        logo: {
          alt: 'FiveM Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'https://fivem.net',
            label: 'Website',
            position: 'right'
          },
          {
            type: 'docSidebar',
            sidebarId: 'docsSideBar',
            docsPluginId: 'default',
            position: 'right',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'manualSideBar',
            docsPluginId: 'manual',
            position: 'right',
            label: 'Manual',
          },
          {
            to: 'https://servers.fivem.net',
            label: 'Servers',
            position: 'right'
          },
          {
            to: 'https://cookbook.fivem.net',
            label: 'Cookbook',
            position: 'right'
          },
          {
            type: 'dropdown',
            label: 'GitHub',
            position: 'right',
            items: [
              {
                to: 'https://github.com/citizenfx/fivem',
                label: 'FiveM',
              },
              {
                to: 'https://github.com/ahcenezdh/ahcenezdh.github.io',
                label: 'Documentation',
              },
            ],
          },
          {
            to: 'https://fivem.net/terms',
            label: 'Terms',
            position: 'right'
          },
          {
            to: 'https://patreon.com/fivem',
            label: 'Patreon',
            position: 'right'
          }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `FiveM&reg; is &copy; 2016-${new Date().getFullYear()} by Cfx.re, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    plugins: [
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'manual',
          path: 'manual',
          routeBasePath: '/manual',
          sidebarPath: require.resolve('./manualSidebar.js'),
        },
      ],
    ],
};

export default config;
