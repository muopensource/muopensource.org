import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../Header"
import { Page } from "@zeit-ui/react"
import Footer from "../Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          width: "100vw",
          height: "0.8rem",
          backgroundColor: "#EEB111",
        }}
      />
      <Page size="small" dotBackdrop="true" style={{ paddingTop: "6rem" }}>
        <Page.Header>
          <Header siteTitle={data.site.siteMetadata.title} />
        </Page.Header>
        <Page.Content>
          <main style={{ margin: 0, padding: 0 }}>{children}</main>
        </Page.Content>
        <Page.Footer>
          <Footer />
        </Page.Footer>
      </Page>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
