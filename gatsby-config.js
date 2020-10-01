module.exports = {
  siteMetadata: {
    title: `EcoCart`,
    menuLinks:[
      {
         name:'Carbon Neutral Shopping | EcoCart Chrome Extension',
         link:'/',
         description:'EcoCart is a Chrome extension that automatically calculates and offsets the carbon footprint of your online orders. Earn rewards at over 10,000 online stores.'
      },
      {
         name:'Fighting Climate Change with EcoCart | EcoCart',
         link:'/about',
         description:'EcoCart provides convenient and free solutions for e-commerce brands and online shoppers to make online orders carbon neutral.'
      },
      {
        name: 'Carbon Neutral Shipping | EcoCart for Shopify',
        link:'/app',
        description:'Adding EcoCart to your Shopify store makes your brand more sustainable and offers your customers carbon neutral shipping at checkout.'
      },
      {
        name: 'Our Carbon Offset Projects | EcoCart',
        link:'/app/our-projects/',
        description:'EcoCart donates to carbon offset projects that are certified to reduce the environmental impact of our everyday activities, such as shopping online.'
      }
   ],
    description: `A free and simple way to show your customers you care about the environment as much as they do.`,
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
