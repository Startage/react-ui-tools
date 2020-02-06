const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Example Typescript',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root:
          '/run/media/junior/E6442FF3442FC561/Projetos/Startage/react-ui-tools/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Example Typescript',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            '/run/media/junior/E6442FF3442FC561/Projetos/Startage/react-ui-tools',
          templates:
            '/run/media/junior/E6442FF3442FC561/Projetos/Startage/react-ui-tools/node_modules/docz-core/dist/templates',
          docz:
            '/run/media/junior/E6442FF3442FC561/Projetos/Startage/react-ui-tools/.docz',
          cache:
            '/run/media/junior/E6442FF3442FC561/Projetos/Startage/react-ui-tools/.docz/.cache',
          app:
            '/run/media/junior/E6442FF3442FC561/Projetos/Startage/react-ui-tools/.docz/app',
          appPackageJson:
            '/run/media/junior/E6442FF3442FC561/Projetos/Startage/react-ui-tools/package.json',
          gatsbyConfig:
            '/run/media/junior/E6442FF3442FC561/Projetos/Startage/react-ui-tools/gatsby-config.js',
          gatsbyBrowser:
            '/run/media/junior/E6442FF3442FC561/Projetos/Startage/react-ui-tools/gatsby-browser.js',
          gatsbyNode:
            '/run/media/junior/E6442FF3442FC561/Projetos/Startage/react-ui-tools/gatsby-node.js',
          gatsbySSR:
            '/run/media/junior/E6442FF3442FC561/Projetos/Startage/react-ui-tools/gatsby-ssr.js',
          importsJs:
            '/run/media/junior/E6442FF3442FC561/Projetos/Startage/react-ui-tools/.docz/app/imports.js',
          rootJs:
            '/run/media/junior/E6442FF3442FC561/Projetos/Startage/react-ui-tools/.docz/app/root.jsx',
          indexJs:
            '/run/media/junior/E6442FF3442FC561/Projetos/Startage/react-ui-tools/.docz/app/index.jsx',
          indexHtml:
            '/run/media/junior/E6442FF3442FC561/Projetos/Startage/react-ui-tools/.docz/app/index.html',
          db:
            '/run/media/junior/E6442FF3442FC561/Projetos/Startage/react-ui-tools/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
