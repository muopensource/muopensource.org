import PropTypes from "prop-types"
import React from "react"
import { Breadcrumbs, Link as ZeitLink } from "@zeit-ui/react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <nav>
          <Breadcrumbs size="small">
            <Breadcrumbs.Item>
              <Link to="/articles">Articles</Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Link to="/resources">Resources</Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Link to="/about">About</Link>
            </Breadcrumbs.Item>
          </Breadcrumbs>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
