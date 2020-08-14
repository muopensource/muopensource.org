import React from "react"
import Layout from "../components/layout/Layout"
import { Text } from "@zeit-ui/react"
import SEO from "../components/seo"

const about = () => {
  return (
    <div>
      <Layout>
        <SEO title="About" />
        <Text h1>About</Text>
      </Layout>
    </div>
  )
}

export default about
