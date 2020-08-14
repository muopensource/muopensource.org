require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Open Source Project`,
    description: `A collection of open source project and research papers by Manchester Unviersty | Math & Computer Science Department`,
    author: `@hawyar`,
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

    // optimize assets in src/images/...
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // omit all except ssr
    {
      resolve: `gatsby-plugin-styled-components`,
      // options: {
      ssr: true,
      //   minify: false,
      //   pure: true,
      // },
    },
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
        // query for all repos under muopensource [limit: 10 repo, includes num of forks, description, ulr, name]
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
