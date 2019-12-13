import React from "react"
import Helmet from "react-helmet"
import get from "lodash/get"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SlideLanguage from "../components/slides/language"
import SlideAllCms from "../components/slides/all-cms"
import SlideCarousel from "../components/slides/slide-carousel"
import SlideDatabase from "../components/slides/database"
import SlideTrend from "../components/slides/trend"
import SlideHeadless from "../components/slides/headless"
import SlideHeadlessProsAndCons from "../components/slides/headless-pros-cons"

class SlideTemplate extends React.Component {
  renderSlide({ slide, cmsSetImgFiles, gartnerImgFiles, headlessImgFiles }) {
    switch (slide.slug) {
      case "cms-a":
        return <SlideAllCms images={cmsSetImgFiles} />
      case "gartner":
        return <SlideCarousel images={gartnerImgFiles} height={500} />
      case "language":
        return <SlideLanguage />
      case "database":
        return <SlideDatabase />
      case "trend":
        return <SlideTrend />
      case "headless":
        return <SlideHeadless />
      case "headless-pros-cons":
        return <SlideHeadlessProsAndCons images={headlessImgFiles} />

      default:
        return null
    }
  }

  render() {
    const slide = get(this.props, "data.contentfulSlide")
    const allSlides = get(this.props, "data.allContentfulSlide")
    const siteTitle = get(this.props, "data.site.siteMetadata.title")
    const cmsSetImgFiles = get(this.props, "data.cmsSetImgFiles.edges")
    const gartnerImgFiles = get(this.props, "data.gartnerImgFiles.edges")
    const headlessImgFiles = get(this.props, "data.headlessImgFiles.edges")

    // this.setState({ slideSelected: slide.index });

    return (
      <Layout
        pageInfo={{
          pageName: "slide",
          slideIndex: slide.index,
          slideCount: allSlides.totalCount,
        }}
      >
        <SEO title="Page two" />
        <div style={{ color: `white`, background: `#20232a` }}>
          <Container fluid className="px-0 main">
            <Helmet title={siteTitle} />

            <Row>
              <Col>
                <h2 className="px-5 pt-5">{slide.heading}</h2>
              </Col>
            </Row>
            <Row className="row-slide">
              <Col className="px-5 pt-5">
                {this.renderSlide({
                  slide,
                  cmsSetImgFiles,
                  gartnerImgFiles,
                  headlessImgFiles,
                })}
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default SlideTemplate

export const pageQuery = graphql`
  query SlideByIndex($index: Int!) {
    contentfulSlide(index: { eq: $index }) {
      heading
      slug
      index
    }
    allContentfulSlide(sort: { fields: index, order: ASC }) {
      totalCount
    }
    cmsSetImgFiles: allFile(filter: { relativePath: { regex: "/^cms/" } }) {
      totalCount
      edges {
        node {
          relativePath
          publicURL
        }
      }
    }
    gartnerImgFiles: allFile(
      filter: { relativePath: { regex: "/^gartner/" } }
      sort: { fields: relativePath }
    ) {
      totalCount
      edges {
        node {
          relativePath
          publicURL
        }
      }
    }
    headlessImgFiles: allFile(
      filter: { relativePath: { regex: "/^headless/" } }
      sort: { fields: relativePath }
    ) {
      totalCount
      edges {
        node {
          relativePath
          publicURL
        }
      }
    }
  }
`
