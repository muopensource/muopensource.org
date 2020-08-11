import PropTypes from "prop-types"
import React from "react"
import { Breadcrumbs, Text, Link as ZeitLink } from "@zeit-ui/react"
import { Link } from "gatsby"
import { Github } from "@zeit-ui/react-icons"

const Header = ({ siteTitle }) => {
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
              <ZeitLink href="https://github.com/hawyar?tab=repositories" color>
                {" "}
                GitHub
              </ZeitLink>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Link to="/about">About</Link>
            </Breadcrumbs.Item>
          </Breadcrumbs>
        </nav>
      </div>

      <div
        style={{
          marginTop: "3rem",

          display: "grid",
          placeItems: "center",
        }}
      >
        <Text h4 size="1rem" style={{ marginTop: "0.5rem" }}>
          {siteTitle.slice(0, 22).concat("'s")}
        </Text>

        <Text h1 size="2.245rem">
          Open Source Project.
        </Text>

        <div
          style={{ maxWidth: "540px", marginTop: "2rem", textAlign: "center" }}
        >
          <Text p>
            Our mission is to make cloud computing accessible to everyone. We
            build products for developers and designers. And those who aspire to
            become one. We build products for developers and designers. And
            those who aspire to become one.
          </Text>
        </div>
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
