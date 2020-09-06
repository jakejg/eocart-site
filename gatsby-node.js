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
        ecocartFaqs {
          nodes {
            slug
            title
            content
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
};
