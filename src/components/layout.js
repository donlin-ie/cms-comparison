/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import Image from "react-bootstrap/Image"

import Header from "./header"
import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => {
  const showBanner = pageInfo && pageInfo.pageName === "table" ? false : true
  const showFooter =
    pageInfo && (pageInfo.pageName === "table" || pageInfo.pageName === "slide")
      ? false
      : true

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
          allContentfulAsset(filter: { title: { eq: "IE Logo" } }) {
            edges {
              node {
                title
                resize(width: 100) {
                  src
                }
                id
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Container fluid className="px-0 main">
            {showBanner ? (
              <Row noGutters className="justify-content-center row-banner">
                <Form inline>
                  <a href="/">
                    <Image
                      src={data.allContentfulAsset.edges[0].node.resize.src}
                      fluid
                    />
                  </a>
                </Form>
                <Col>
                  <Header siteTitle={data.site.siteMetadata.title} />
                </Col>
              </Row>
            ) : null}

            <Navbar pageInfo={pageInfo} />
            <main>{children}</main>
            <Row noGutters>
              <Col>
                <Container></Container>
              </Col>
            </Row>
          </Container>
          {showFooter ? (
            <Container fluid className="px-0">
              <Row noGutters>
                <Col className="footer-col">
                  <footer>
                    <span>
                      © {new Date().getFullYear()}, Slides of CMS Comparison
                      Built with
                      {` `}
                      <a href="https://www.gatsbyjs.org">Gatsby</a> and{" "}
                      <a href="https://www.contentful.com">Contentful</a>
                    </span>
                  </footer>
                </Col>
              </Row>
            </Container>
          ) : null}
        </>
      )}
    />
  )
}

export default Layout
