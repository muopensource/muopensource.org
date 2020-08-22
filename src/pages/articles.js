/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { Text } from "@zeit-ui/react"
import Header from "../components/Header"
const Articles = ({ data: { allMdx: edges } }) => {
  const posts = edges.edges
  return (
    <Layout header={Header}>
      <SEO title="Articles" />

      <Text h2 style={{ fontSize: `1.5rem` }}>
        Articles
      </Text>

      <ul
        sx={{
          mt: "4rem",
          p: 0,
          ml: 0,

          listStyle: "none",
        }}
      >
        {posts.map(({ node: { id, frontmatter } }) => (
          <div key={id} sx={{ mb: "2rem", listStyle: "none" }}>
            <Styled.h2
              sx={{
                m: 0,
              }}
            >
              <Link
                to={frontmatter.slug}
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  ":hover,:focus": {
                    color: "primary",
                    textDecoration: "underline",
                  },
                }}
              >
                {frontmatter.title}
              </Link>
            </Styled.h2>
            <small sx={{ fontWeight: "500" }}>Feb 24, 2020</small>
            <Styled.p
              sx={{
                m: 0,
              }}
            >
              Here is some description until we finish the blog's frontmatter
            </Styled.p>
          </div>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allMdx {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`

export default Articles
