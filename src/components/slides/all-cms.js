import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { Row, Col, ButtonToolbar, Button } from "react-bootstrap"

class SlideAllCms extends React.Component {
  constructor(props) {
    super(props)
    this.images = props.images
  }

  state = { index: 0, direction: null }

  handleSelect = (selectedIndex, e) => {
    this.setState({ index: selectedIndex, direction: e })
  }

  render() {
    const height = 350

    return (
      <>
        <Row>
          <Col md="auto">
            <Carousel
              interval=""
              activeIndex={this.state.index}
              direction={this.state.direction}
              onSelect={this.handleSelect}
            >
              {this.images.map(({ node }) => {
                return (
                  <Carousel.Item key={"carousel-" + node.relativePath}>
                    <img
                      className=""
                      height={height}
                      src={node.publicURL}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col>
            <ButtonToolbar className="mt-5">
              <Button
                href="https://en.wikipedia.org/wiki/List_of_content_management_systems" rel="noopener noreferrer"
                target="_blank"
              >
                List of CMS - Wikipedia
              </Button>
              <Button href="https://whatcms.org/Tech_Reports" rel="noopener noreferrer" target="_blank">
                WhatCMS.org
              </Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </>
    )
  }
}

export default SlideAllCms
