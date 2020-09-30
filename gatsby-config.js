module.exports = {
  siteMetadata: {
    title: 'Softcube',
    siteUrl: 'https://softcube.com/',
    description:
      'CREATE VIDEO ADS IN TWO CLICKS \n ' +
      'Paste your link and the Softcube AI will automatically create video ads that convert',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      "resolve": "gatsby-remark-custom-blocks",
      "options": {
        "blocks": {
          "snippet": {
            "classes": "snippet"
          },
        },
      },
    },
    {
      "resolve": "gatsby-plugin-excerpts",
      "options": {
        "sources": {
          "snippetBlocks": {
            "type": "htmlQuery",
            "sourceField": "html",
            "excerptSelector": ".custom-block.snippet .custom-block-body",
            "stripSelector": "a",
            "elementReplacements": [
              {
                "selector": "h6",
                "replaceWith": "strong"
              },
              {
                "selector": "h5",
                "replaceWith": "h6"
              },
              {
                "selector": "h4",
                "replaceWith": "h5"
              },
              {
                "selector": "h3",
                "replaceWith": "h4"
              },
              {
                "selector": "h2",
                "replaceWith": "h3"
              },
            ],
          },
          "default": {
            "type": "htmlQuery",
            "sourceField": "html",
            "excerptSelector": "html > *",
            "ignoreSelector": "img, .gatsby-highlight",
            "stripSelector": "a",
            "elementReplacements": [
              {
                "selector": "h6",
                "replaceWith": "strong"
              },
              {
                "selector": "h5",
                "replaceWith": "h6"
              },
              {
                "selector": "h4",
                "replaceWith": "h5"
              },
              {
                "selector": "h3",
                "replaceWith": "h4"
              },
              {
                "selector": "h2",
                "replaceWith": "h3"
              },
            ],
            "truncate": {
              "length": 80,
              "byWords": true,
              "ellipsis": "…"
            },
          }
        },
        "sourceSets": {
          "markdownHtml": [
            "snippetBlocks",
            "default"
          ]
        },
        "excerpts": {
          "snippet": {
            "type": "html",
            "nodeTypeSourceSet": {
              "MarkdownRemark": "markdownHtml"
            }
          }
        }
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1078,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    },
    {
      resolve: 'gatsby-remark-images-native-lazy-load',
      options: {
        loading: "lazy" // "lazy" | "eager" | "auto"
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/blog/*', '/contact/*', '/tags/', '/about/', '/products/', '/contact/']
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://softcube.com/',
        policy: [{ userAgent: '*', allow: '/', disallow: 'recom.softcube.com' }]
      }
    },
    // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
