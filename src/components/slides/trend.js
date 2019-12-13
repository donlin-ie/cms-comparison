import React from "react"

import { Row, Col, Button } from "react-bootstrap"

class SlideTrend extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <Button
              href="https://trends.google.com/trends/explore?geo=AU"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Trends AUS Link
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="https://trends.google.com/trends/explore?date=all&geo=AU&q=Wordpress"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wordpress
            </a>
          </Col>
          <Col>
            <a
              href="https://trends.google.com/trends/explore?date=all&geo=AU&q=Drupal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Drupal
            </a>
          </Col>
          <Col>
            <a
              href="https://trends.google.com/trends/explore?date=all&q=Acquia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acquia (Worldwide)
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="https://trends.google.com/trends/explore?date=all&geo=AU&q=Joomla"
              target="_blank"
              rel="noopener noreferrer"
            >
              Joomla
            </a>
          </Col>
          <Col>
            <a
              href="https://trends.google.com/trends/explore?date=all&q=Umbraco"
              target="_blank"
              rel="noopener noreferrer"
            >
              Umbraco (Worldwide)
            </a>
          </Col>
          <Col>
            <a
              href="https://trends.google.com/trends/explore?date=all&q=Sitecore"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sitecore
            </a>
          </Col>
        </Row>

        <Row>
          <Col>
            <a
              href="https://trends.google.com/trends/explore?date=2013-01-01%202019-11-30&geo=AU&q=AEM"
              target="_blank"
              rel="noopener noreferrer"
            >
              AEM (Since 2013)
            </a>
          </Col>
          <Col>
            <a
              href="https://trends.google.com/trends/explore?date=2013-10-30%202019-11-30&q=Contentful"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contentful (2013 - present) Worldwide
            </a>
          </Col>
          <Col>
            <a
              href="https://trends.google.com/trends/explore?date=all&q=Kentico"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kentico (Worldwide)
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
          </Col>
        </Row>

        <Row>
          <Col>
            <a
              href="https://trends.google.com/trends/explore?date=2013-01-01%202019-11-30&geo=AU&q=Sitecore,AEM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sitecore vs AEM (Since 2013)
            </a>
          </Col>
        </Row>
      </>
    )
  }
}

export default SlideTrend
