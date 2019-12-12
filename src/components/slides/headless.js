import React from "react"

import { ListGroup } from "react-bootstrap"

class SlideHeadless extends React.Component {
  render() {
    return (
        <>
        <h3>What is Headless CMS?</h3>
        <p>Headless CMS is a back-end only content management system (CMS) built from the ground up as a content repository that makes content accessible via a RESTful API for display on any device.</p>
        <br/>
        <h3>Other terms</h3>
      <ListGroup>
        <ListGroup.Item>API-first</ListGroup.Item>
        <ListGroup.Item>Content as a service: Cloud-first headless CMSs</ListGroup.Item>
      </ListGroup>
      <br/>
      <h3>API-first CMS vs Decoupled CMS vs Coupled CMS</h3>
      <p>Most traditional (monolithic) CMS systems are “coupled”, meaning that the content management application (CMA) and the content delivery application (CDA) come together in a single application, making back-end user tools, content editing and taxonomy, website design, and templates inseparable.</p>
      <p>A decoupled CMS separates the CMA and CDA environments, typically with content being created behind the firewall and then being synchronized and pushed to the delivery environment. </p>
      <p>In short, Coupled CMS joins a frontend presentation layer tightly to the backend component.</p>
      </>
    )
  }
}

export default SlideHeadless
