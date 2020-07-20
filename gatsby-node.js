const {createLinkedPages, createPaginationPages} = require("gatsby-pagination");
const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        limit: 1000, 
        sort: {
          fields: [frontmatter___date], 
          order: DESC
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
              categories
              title
              date(formatString: "MMMM DD, YYYY")
              image {
                publicURL
              }
              featuredimage {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 250, quality: 100) {
                    src
                    srcSet
                    base64
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    //const posts = result.data.allMarkdownRemark.edges;
    const {
      data: {
        allMarkdownRemark: { edges },
        site: {
          siteMetadata: { title, shortTitle },
        },
      },
    } = result;

    let edgesBlog = [];
    edges.forEach((edge) => {
      if (edge.node.fields.slug.indexOf('/blog') > -1) {
        edgesBlog = edgesBlog.concat(edge)
      }
    });

    // Create Pagination Pages
    createPaginationPages({
      createPage,
      edges: edgesBlog,
      component: path.resolve('src/templates/blog.js'),
      limit: 6,
      pathFormatter: p => (p === 1 ? `/blog/` : `/blog/page/${p}`),
      //pathFormatter: prefixPathFormatter('/blog'),
      context: {
        title,
        shortTitle,
      },
    });
    // Create linked blog pages
    createLinkedPages({
      createPage,
      edges: edgesBlog,
      component: path.resolve(`src/templates/blog.js`),
      edgeParser: edge => {
        const {
          id,
          fields: { slug },
          frontmatter: { templateKey },
        } = edge.node;
        return {
          path: slug,
          // additional data can be passed via context
          context: {
            id,
            slug,
          },
        };
      },
      circular: true,
    });

    edges.forEach((edge) => {
      const id = edge.node.id;
      const pagePath = String(edge.node.fields.slug).includes("/blog/") ?
        String(edge.node.fields.slug).replace(`\/blog`, "") :
        edge.node.fields.slug;

      createPage({
        path: pagePath,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          slug: pagePath,
        },
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    edges.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    });

    //TODO categories
    let categories = [];
    // Iterate through each post, putting all found categories into `categories`
    edges.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.categories`)) {
        categories = categories.concat(edge.node.frontmatter.categories)
      }
    });
    // Eliminate duplicate categories
    categories = _.uniq(categories);

    // Make category pages
    categories.forEach((category) => {
      const categoryPath = `/category/${_.kebabCase(category)}/`;

      createPage({
        path: categoryPath,
        component: path.resolve(`src/templates/categories.js`),
        context: {
          category,
        },
      })
    });
  })
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, basePath: `pages` });

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
};
