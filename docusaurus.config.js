// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Quadro de Horários do IFPR - Assis Chateaubriand',
  tagline: 'Com organização e tempo, acha-se o segredo de fazer tudo e bem feito. - Pitágoras',
  url: 'https://vonmecheln.github.io/',
  baseUrl: '/ifpr-horarios/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.gif',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vonmecheln', // Usually your GitHub org/user name.
  projectName: 'ifpr-horarios', // Usually your repo name.
  trailingSlash: false,
  
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
    path: 'i18n',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          versions: {
            current: {
              label: 'Em desenvolvimento 🚧'
            }
          }
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
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logoDark.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Quadro de Horários',
          },
          // {
          //   href: 'https://assis.ifpr.edu.br',
          //   label: 'Campus Assis Chateaubriand',
          //   position: 'right',
          // },
          {
            type: 'docsVersionDropdown',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Institucional',
            items: [
              {
                label: 'Campus Assis Chateaubriand',
                href: 'https://assis.ifpr.edu.br',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/vonmecheln/ifpr-horarios',
              },
            ],
          },
          {
            title: 'Contato',
            items: [
              {
                label: 'vonmecheln',
                href: 'https://github.com/vonmecheln',
              },
              {
                label: 'ricardorhv',
                href: 'https://github.com/ricardorhv',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Von Mechlen e Ricardo Vinciguerra. Desenvolvido com Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
