import React from "react"

import { ListGroup, ButtonToolbar, Button } from "react-bootstrap"

class SlideHeadlessProsAndCons extends React.Component {
  constructor(props) {
    super(props)
    this.images = props.images
  }

  render() {
    return (
        <>
        <h3>Pros</h3>
      <ListGroup>
        <ListGroup.Item>Reach out to consumers to any device</ListGroup.Item>
        <ListGroup.Item>MarTech freedom</ListGroup.Item>
        <ListGroup.Item>Faster content repurposing</ListGroup.Item>
        <ListGroup.Item>Create your own applications</ListGroup.Item>
      </ListGroup>
      <br/>
      <h3>Cons</h3>
      <ListGroup>
        <ListGroup.Item>No marketer-friendly tools or interfaces</ListGroup.Item>
        <ListGroup.Item>Over-reliant on IT</ListGroup.Item>
        <ListGroup.Item>No content previews</ListGroup.Item>
        <ListGroup.Item>The costs can stack up</ListGroup.Item>
      </ListGroup>
      <ButtonToolbar className="mt-5">
      <Button href="https://headlesscms.org/" target="_blank">Headless CMS Org</Button>
      </ButtonToolbar>
      <div>
        <br/>
      {this.images.map(({ node }) => {
                return (
                    <img
                      className=""
                      height="800"
                      src={node.publicURL}
                      alt="Third slide"
                    />
                )
              })}
            </div>

            <br/>
            <ButtonToolbar className="mt-5">
      <Button href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</Button>
      </ButtonToolbar>

      </>
    )
  }
}

export default SlideHeadlessProsAndCons
