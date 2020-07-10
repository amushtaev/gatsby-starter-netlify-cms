const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
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
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges;

    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: 'src/pages/blog/index.js',
      pageLength: 2, // This is optional and defaults to 10 if not used
      pathPrefix: 'blog', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
      buildPath: (index, pathPrefix) =>
        index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, // This is optional and this is the default
    });

    posts.forEach((edge) => {
      const id = edge.node.id;
      let pagePath = edge.node.fields.slug;
      pagePath = String(pagePath).includes("/blog/") ? String(pagePath).replace(`\/blog`, "") : pagePath;

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
    posts.forEach((edge) => {
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
    posts.forEach((edge) => {
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
    })
  })
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
};
