import React from "react"

import { ListGroup } from "react-bootstrap"

class SlideDatabase extends React.Component {
  render() {
    return (
        <>
      <ListGroup>
        <ListGroup.Item>SQL Server</ListGroup.Item>
        <ListGroup.Item>Oracle</ListGroup.Item>
        <ListGroup.Item>DB2</ListGroup.Item>
        <ListGroup.Item>MySQL</ListGroup.Item>
        <ListGroup.Item>PostgreSQL</ListGroup.Item>
        <ListGroup.Item>MongoDB</ListGroup.Item>
      </ListGroup>
      </>
    )
  }
}

export default SlideDatabase
