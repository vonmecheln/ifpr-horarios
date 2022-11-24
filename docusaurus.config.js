// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Quadro de Horários do IFPR - Assis Chateaubriand',
  tagline: 'Este é o quadro de horários do IFPR - Assis Chateaubriand',
  url: 'https://ricardorhv.github.io',
  baseUrl: '/ifpr-horarios/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.gif',
  
  organizationName: 'ricardorhv', 
  projectName: 'ifpr-horarios',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['en','pt-BR'],
    path: 'i18n',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Atual',
              path: '',
            },
          },
            
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
      
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Horários',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
          width: 170,
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Menu',
          },
          {
            type: 'docsVersionDropdown',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      // require.resolve("@cmfcmf/docusaurus-search-local")
    ]
};

module.exports = config;
