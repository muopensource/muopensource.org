import React from "react"
import Hero from "../components/hero/Hero"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
