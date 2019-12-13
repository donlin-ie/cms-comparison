import React from "react"
import get from "lodash/get"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"
import ReactHtmlParser from "react-html-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CompareOneField = ({
  field,
  allCms,
  svgFileChecked,
  svgFileArrowLeft,
  svgFileQuestion,
}) => {
  return (
    <tr className={field.rowClass}>
      <th scope="row">
        {field.description}
        {field.slideIndex && field.slideIndex !== "" ? (
          <a href={`/slide/${field.slideIndex}/`}>#{field.slideIndex}</a>
        ) : null}
      </th>
      {allCms.map(({ node }) => {
        const cmsFieldsRaw =
          node.comparisonFieldValues &&
          node.comparisonFieldValues.internal.content
            ? node.comparisonFieldValues.internal.content
            : null
        const cmsFields = cmsFieldsRaw ? JSON.parse(cmsFieldsRaw) : {}
        const cmsValue =
          cmsFields && cmsFields[field.name] ? cmsFields[field.name] : ""
        if (Array.isArray(cmsValue)) {
          //array
          return (
            <td key={field.id + node.name}>
              {ReactHtmlParser(cmsValue.join("<br/>"))}
            </td>
          )
        } else if (typeof cmsValue === "boolean") {
          //boolean
          return (
            <td key={field.id + node.name}>
              {cmsValue ? (
                <img src={svgFileChecked.publicURL} alt="" width="20" />
              ) : (
                "No"
              )}
            </td>
          )
        } else if (cmsValue === "<-") {
          //boolean
          return (
            <td key={field.id + node.name}>
              {cmsValue ? (
                <img src={svgFileArrowLeft.publicURL} alt="" width="20" />
              ) : (
                "No"
              )}
            </td>
          )
        } else if (cmsValue === "?") {
          //boolean
          return (
            <td key={field.id + node.name}>
              {cmsValue ? (
                <img src={svgFileQuestion.publicURL} alt="" width="20" />
              ) : (
                "No"
              )}
            </td>
          )
        } else {
          console.log(field.name)
          console.log(cmsFields)
          console.log(typeof cmsValue)
          console.log(cmsValue)

          //other
          return <td key={field.id + node.name}>{ReactHtmlParser(cmsValue)}</td>
        }
      })}
    </tr>
  )
}

class TableIndex extends React.Component {
  siteTitle = "Table"
  allCms = get(this, "props.data.allContentfulCms.edges")
  allFields = get(this, "props.data.allContentfulComparisonField.edges")
  svgFileChecked = get(this, "props.data.svgFileChecked")
  svgFileArrowLeft = get(this, "props.data.svgFileArrowLeft")
  svgFileQuestion = get(this, "props.data.svgFileQuestion")
  cmsHidden = []

  componentDidMount() {
    //this.showSlides(1);
  }

  render() {
    return (
      <Layout pageInfo={{ pageName: "table" }}>
        <SEO title="Page two" />
        <Container fluid>
          <Helmet title={this.siteTitle} />

          <Row className="pt-5">
            <Col></Col>
          </Row>

          <Row className="pt-2">
            <Col>
              <div className="table-area">
                <table className="responsive-table table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      {this.allCms.map(({ node }) => {
                        return (
                          <th key={node.name} scope="col">
                            <a
                              href={node.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {node.name}
                            </a>
                          </th>
                        )
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {this.allFields.map(({ node }) => {
                      return (
                        <CompareOneField
                          key={node.id}
                          field={node}
                          allCms={this.allCms}
                          svgFileChecked={this.svgFileChecked}
                          svgFileArrowLeft={this.svgFileArrowLeft}
                          svgFileQuestion={this.svgFileQuestion}
                        />
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default TableIndex

export const pageQuery = graphql`
  query TableIndexQuery {
    allContentfulCms(
      sort: { fields: sortIndex }
      filter: { show: { eq: true } }
    ) {
      edges {
        node {
          name
          fullName
          sortIndex
          url
          show
          updatedAt
          comparisonFieldValues {
            id
            internal {
              content
            }
          }
        }
      }
    }
    allContentfulComparisonField(
      filter: { show: { eq: true } }
      sort: { fields: fieldIndex, order: ASC }
    ) {
      edges {
        node {
          id
          name
          description
          show
          fieldIndex
          rowClass
          slideIndex
        }
      }
    }
    svgFileChecked: file(relativePath: { eq: "checked.svg" }) {
      publicURL
    }
    svgFileArrowLeft: file(relativePath: { eq: "arrow-left.svg" }) {
      publicURL
    }
    svgFileQuestion: file(relativePath: { eq: "question.svg" }) {
      publicURL
    }
  }
`
