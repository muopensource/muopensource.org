import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import Display from "../components/projects/Display"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Display />
    </Layout>
  )
}

export default IndexPage
