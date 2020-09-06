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
};
