import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import ProjectDisplay from "../components/projects/ProjectsDisplay"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ProjectDisplay />
    </Layout>
  )
}

export default IndexPage
