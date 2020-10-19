import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import ProjectDisplay from "../components/projects/ProjectsDisplay"
const IndexPage = () => {
  return (
    <Layout>
      <div>
        <SEO title="Manchester University" />
        <Hero />
        <ProjectDisplay />
      </div>
    </Layout>
  )
}

export default IndexPage
