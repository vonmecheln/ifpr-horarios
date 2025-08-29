import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const isBuildFast = false && !!process.env.BUILD_FAST
const isVersioningDisabled = false
const isDev = true
const isDeployPreview = false
const isBranchDeploy = false

const prefixCurrentVersions = ['2025']

function isCurrentVersions(value) {
  // return true
  let result = false
  prefixCurrentVersions.forEach((item, index) => {
    result = result || value.toString().startsWith(item)
  })

  return result
}

function renameVersion(value) {
  const re = /(.+[.])(\d+)$/
  const v = value.replace(re, '$1v$2')
  return v
}

function makeVersionNames() {
  const names = {}
  ;[...versions].forEach((item, index) => {
    let name = renameVersion(item)

    if (index === 0) name = name + ' (Atual)'
    names[item] = {
      label: name,
    }
  })

  // @ts-ignore
  names.current = {
    label: 'Em desenvolvimento 🚧',
    noIndex: true,
    badge: false,
  }

  return names
}

const versions = require('./versions.json')

const config: Config = {
  title: 'Quadro de Horários do IFPR - Assis Chateaubriand',
  tagline:
    '"Com organização e tempo, acha-se o segredo de fazer tudo e bem feito." - Pitágoras',
   favicon: 'img/favicon.gif',

  // Set the production url of your site here
  url: 'https://vonmecheln.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ifpr-horarios/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vonmecheln', // Usually your GitHub org/user name.
  projectName: 'ifpr-horarios', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
    path: 'i18n',
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          versions: makeVersionNames(),
          onlyIncludeVersions: (() => {
            if (isBuildFast) {
              return ['current']
            } else if (!isVersioningDisabled) {
              let includeVersions = [...versions]
              includeVersions = includeVersions.filter(isCurrentVersions)
              // includeVersions = includeVersions.slice(0, 2)

              if (isDev || isDeployPreview || isBranchDeploy) {
                // includeVersions = includeVersions.slice(0, 1)
                includeVersions.push('current')
              }

              return includeVersions
            }
            return undefined
          })(),
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logoDark.svg',
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
          // dropdownItemsAfter: [
          //   {
          //     type: 'html',
          //     value: '<hr class="dropdown-separator">',
          //   },
          //   {
          //     to: '/versions',
          //     label: 'Todas as versões',
          //   },
          // ]
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'GTM-MQ8B67G4',
        anonymizeIP: false,
      },
    ],
    [require.resolve('docusaurus-lunr-search'),
      {
        languages: ['pt'],
        disableVersioning : true
      }
    ],

    // [
    //   require.resolve('@cmfcmf/docusaurus-search-local'),
    //   {
    //     // Options here
    //     indexDocs: true,
    //     indexBlog: false,
    //     indexPages: false,
    //     language: "pt",
    //   },
    // ],
  ],

};

export default config;
