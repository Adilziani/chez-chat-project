module.exports = {
  siteMetadata: {
    title: "Chez Chat",
    description: "Chez Chat was founded in 2021, By Adil Ziani",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://chez-chat.local/graphql",
      }
    }
  ],
};