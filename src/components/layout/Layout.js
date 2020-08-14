import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import { Page } from "@zeit-ui/react"
import Footer from "../Footer"
const Layout = ({ children }) => {
  return (
    <div>
      {/* top yellow line on every page */}
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
      <Page size="mini" dotBackdrop="true" style={{ paddingTop: "6rem" }}>
        <Page.Header center="true">
          <Header />
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
