import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"

import Header from "../components/Header"
const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
