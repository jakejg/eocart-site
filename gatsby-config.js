module.exports = {
  siteMetadata: {
    title: `EcoCart`,
    description: `EcoCart is a Chrome extension that automatically calculates and offsets the carbon footprint of your order. Earn EcoPoints and redeem rewards when you shop like normal at over 10,000 of your favorite sites!`,
    author: `zeeshan junaid`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WORDPRESS",
        fieldName: "wordpress",
        url: "https://app.ecocart.io/graphql",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `react-device-detect`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ecocart-app`,
        short_name: `ecoCart`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/plane.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
