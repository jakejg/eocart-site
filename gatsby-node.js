const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      wordpress {
        ecocartFaqCategories {
          nodes {
            slug
            name
          }
        }
        ecocartFaqs(first: 100) {
          nodes {
            slug
            title
            content
          }
        }
        posts(first: 100) {
          nodes {
            id
            slug
            content
            title
            seo {
              metaDesc
            }
            featuredImage {
              node {
                sourceUrl(size: THUMBNAIL)
              }
            }
            categories {
              nodes {
                name
              }
            }
            modified
          }
        }
      }
    }
  `);
  if (!data.wordpress) return null;
  data.wordpress.ecocartFaqCategories.nodes.forEach((cat) => {
    createPage({
      path: `/category/${cat.slug}`,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        slug: cat.slug,
        name: cat.name,
      },
    });
  });
  data.wordpress.ecocartFaqs.nodes.forEach((faq) => {
    createPage({
      path: `/${faq.slug}`,
      component: path.resolve(`./src/templates/faq.js`),
      context: {
        slug: faq.slug,
        title: faq.title,
        content: faq.content,
      },
    });
  });
  data.wordpress.posts.nodes.forEach((post) => {
    createPage({
      path: `/posts/${post.slug}`,
      component: path.resolve(`./src/templates/single-post.js`),
      context: {
        slug: post.slug,
        postTitle: post.title,
        content: post.content,
        featuredImage: post.featuredImage.node.sourceUrl,
        id: post.id,
        categories: post.categories,
        description: post.seo.metaDesc,
        image: post.featuredImage.node.sourceUrl,
        date: post.modified,
      },
    });
  });
};
