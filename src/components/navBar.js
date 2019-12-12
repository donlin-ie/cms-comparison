import React from "react"
import { Link } from "gatsby"
import ls from 'local-storage'

import { Navbar, Nav, Button, ButtonToolbar } from "react-bootstrap"

class CustomNavbar extends React.Component {

  componentDidMount() {
    console.log("Doing mount!");
    console.log(this.props.pageInfo);
    if (this.isSlide()) {
      const slideSelected = (this.props.pageInfo.slideIndex) ? this.props.pageInfo.slideIndex : null;
      ls.set("slideSelected", slideSelected);
    }
  }

  isSlide() {
    return this.props.pageInfo && this.props.pageInfo.pageName === "slide";
  }

  getSlideSelected() {
    return (this.isSlide()) ? this.props.pageInfo.slideIndex : (ls.get("slideSelected") || null);
  }

  getSlideUrl(idx) {
    return (idx) ? `/slide/${idx}/` : "/slide/1/";
  }

  getSlideSelectedUrl() {
    return this.getSlideUrl(this.getSlideSelected());
  }

  hasPreviousSlide() {
    const cur = this.getSlideSelected();
    return cur > 1;
  }

  getPreviousSlideUrl() {
    const cur = this.getSlideSelected();
    const prev = (cur > 1) ? cur -1 : 1;
    return this.getSlideUrl(prev) ;
  }

  hasNextSlide() {
    const cur = this.getSlideSelected();
    const count = this.props.pageInfo.slideCount;
    return cur < count;
  }

  getNextSlideUrl() {
    const cur = this.getSlideSelected();
    const count = this.props.pageInfo.slideCount;
    const next = (cur < count) ? cur + 1 : cur;
    return this.getSlideUrl(next) ;
  }

  render() {
    
    return (
      <>
        <Navbar variant="dark" expand="lg" id="site-navbar">
          {/* <Container> */}
          { (!this.isSlide() || this.getSlideSelected() > 2) ? (
            <>
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">Home</Navbar.Brand>
          </Link>
          <Link to="/table" className="link-no-style">
            <Navbar.Brand as="span">Comparison Table</Navbar.Brand>
          </Link>
          <Link to={this.getSlideSelectedUrl()} className="link-no-style">
            <Navbar.Brand as="span">Slide</Navbar.Brand>
          </Link>
          </>
          ) : null }

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {this.isSlide() ? (
                <ButtonToolbar>
  { this.hasPreviousSlide() ? (
  <Button href={this.getPreviousSlideUrl()} > &lt; </Button>) : null }
                  { this.hasNextSlide() ? (<Button href={this.getNextSlideUrl()} >Next</Button>) : null}
                </ButtonToolbar>
              ) : null}
            </Nav>
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      </>
    )
  }
}

export default CustomNavbar
