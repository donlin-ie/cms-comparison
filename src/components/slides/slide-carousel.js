import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { Row, Col } from "react-bootstrap"

class SlideCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.images = props.images
    this.height = props.height
  }

  state = { index: 0, direction: null }

  handleSelect = (selectedIndex, e) => {
    this.setState({ index: selectedIndex, direction: e })
  }

  render() {
    return (
      <>
        <Row>
          <Col>
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
                      height={this.height}
                      src={node.publicURL}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Col>
        </Row>
      </>
    )
  }
}

export default SlideCarousel
