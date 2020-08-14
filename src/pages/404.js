/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Styled.h3>PAGE NOT FOUND</Styled.h3>

    <Styled.p sx={{ mt: 4 }}>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Styled.p>
    <Link to="/" activeClassName="active">
      Go back home
    </Link>
  </Layout>
)

export default NotFoundPage
