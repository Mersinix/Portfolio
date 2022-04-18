/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    // "@contentful/gatsby-transformer-contentful-richtext",

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `dsujq6w3s5zg`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `ho5cO3bH3BmbHKjLorDOYYDS18CDwoTgPHxzyWdJ8Q0`,
      },
    },
  ],
  siteMetadata: {
    title1: "Hi, I am John,",
    title2: "Creative Technologist",
  },
  
}
