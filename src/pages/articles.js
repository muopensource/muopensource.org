import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { Text } from "@zeit-ui/react"
import Header from "../components/Header"
const Articles = ({ data: { allMdx: edges } }) => {
  const posts = edges.edges
  console.log(posts)
  console.log(posts[0].node.frontmatter.title)
  return (
    <Layout header={Header}>
      <SEO title="Articles" />

      <Text h1>Articles</Text>

      {posts.map(post => {
        console.log(post.node)
        const { frontmatter } = post.node
        return (
          <div key={post.node.id}>
            <Link to={`${frontmatter.slug}`}>{frontmatter.title}</Link>
          </div>
        )
      })}
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
