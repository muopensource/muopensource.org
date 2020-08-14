/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import Breadcrumbs from "@zeit-ui/react/esm/breadcrumbs"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <nav>
          <Breadcrumbs size="small">
            <Link
              to="/"
              activeClassName="active"
              sx={{
                color: "inherit",
                "&.active": {
                  color: "primary",
                },
              }}
            >
              Home
            </Link>
            <Link
              to="/articles"
              activeClassName="active"
              sx={{
                color: "inherit",
                "&.active": {
                  color: "primary",
                },
              }}
            >
              Articles
            </Link>

            <Link
              to="/resources"
              activeClassName="active"
              sx={{
                color: "inherit",
                "&.active": {
                  color: "primary",
                },
              }}
            >
              Resources
            </Link>

            <Link
              to="/about"
              activeClassName="active"
              sx={{
                color: "inherit",
                "&.active": {
                  color: "primary",
                },
              }}
            >
              About
            </Link>
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
