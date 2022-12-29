/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Sample App`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod, reprehenderit commodi earum tenetur impedit illum debitis, possimus provident repudiandae aspernatur expedita, quisquam fugit soluta? Consequatur magnam expedita aspernatur? Fugit.`,
    author: `@isurusilva`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-google-gtag`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
  ],
};
