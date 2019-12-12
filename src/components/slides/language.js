import React from "react"

import { ListGroup, ButtonToolbar, Button } from "react-bootstrap"

class SlideLanguage extends React.Component {
  render() {
    return (
        <>
      <ListGroup>
        <ListGroup.Item>PHP</ListGroup.Item>
        <ListGroup.Item>ASP.Net</ListGroup.Item>
        <ListGroup.Item>Java</ListGroup.Item>
        <ListGroup.Item>JavaScript (or Typescript)</ListGroup.Item>
      </ListGroup>
      <ButtonToolbar className="mt-5">
      <Button href="https://en.wikipedia.org/wiki/List_of_content_management_systems" target="_blank">List of CMS - Wikipedia</Button>
      </ButtonToolbar>
      </>
    )
  }
}

export default SlideLanguage
