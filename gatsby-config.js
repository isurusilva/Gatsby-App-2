/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Sample App`,
    description: `Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.`,
    author: `@isurusilva`,
  },
  plugins: [
    `gatsby-plugin-google-gtag`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
  ],
};
