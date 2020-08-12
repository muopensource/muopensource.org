require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Manchester University | Open Source Project`,
    description: `A collection of open source project and research papers by Manchester Unviersty | Math & Computer Science Department`,
    author: `@hawyarfarooq`,
  },
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // github graphql source
    {
      resolve: "gatsby-source-github",
      options: {
        headers: {
          Authorization: `Bearer ` + process.env.GITHUB_KEY,
        },
        queries: [
          `{
            organization(login: "muopensource") {
              name
              avatarUrl(size: 10)
              repositories(first: 6) {
                edges {
                  node {
                    forkCount
                    description
                    url
                    name
                  }
                }
              }
            }
          }
          `,
        ],
      },
    },
  ],
}
