import React from "react"
import get from "lodash/get"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const systems = get(this, "props.data.allContentfulCms.nodes")

    return (
      <Layout pageInfo={{ pageName: "index" }}>
        <SEO
          title="Home"
          keywords={[`gatsby`, `react`, `bootstrap`, `cms`, `contentful`]}
        />
        <Container className="mt-5 text-center">
          <Row>
            <Col>
              <p>
                The website contains high level comparisons between the
                following content management systems:
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center my-3">
            <Col md="6">
              <ListGroup>
                {systems.map(system => {
                  return (
                    <ListGroup.Item
                      action
                      key={system.name}
                      href={system.url}
                      target="_blank"
                    >
                      { (system.fullName && system.fullName !== '') ? system.fullName + ' ('+ system.name + ')' : system.name }
                       {" (" + system.releaseDate + ")"}
                    </ListGroup.Item>
                  )
                })}
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Possibly choose other candidates below:</p>
              <p>
                WP Engine, Silverstripe, Episever CMS, Progress Sitefinity, Craft CMS,
                ButterCMS or ContentStack etc.
              </p>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}
export default IndexPage

export const pageQuery = graphql`
  query DefaultCmsQuery {
    allContentfulCms(
      filter: { show: { eq: true } }
      sort: { fields: sortIndex, order: ASC }
    ) {
      nodes {
        name
        show
        fullName
        url
        releaseDate
      }
    }
  }
`
