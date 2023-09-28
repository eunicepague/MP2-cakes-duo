// import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap';
import Drip from './../../../assets/imgs/chocolate-drip.jpg';
import Stack from './../../../assets/imgs/stack-cake.jpg';
import Torte from './../../../assets/imgs/torte-cake.jpg';
import Frost from './../../../assets/imgs/frost-cake.jpg';
import './SectionFour.css';

const SectionFour = () => {
  return (
    <Container id="s4-container">
      <section id="s4-heading">
        <h1 id="s4-h1">HELPFUL HOW-TOS</h1>
        <h5 id="s4-h6">
          Learn how to frost a perfect cake, decorate cookies and more!
        </h5>
      </section>

      <div id="s4-card-container">
        <Row className="justify-content-center">
          <Col xs={6} sm={6} md={6} lg={3}>
            <Card id="s4-card-box" className="mx-auto mt-3 mb-3">
              <Card.Img variant="top" src={Drip} />
              <Card.Body>
                <Card.Title>How to Make a Chocolate Drip Cake</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3}>
            <Card id="s4-card-box" className="mx-auto mt-3 mb-3">
              <Card.Img variant="top" src={Stack} />
              <Card.Body>
                <Card.Title>How to Fill and Stack a Layer Cake</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3}>
            <Card id="s4-card-box" className="mx-auto mt-3 mb-3">
              <Card.Img variant="top" src={Torte} />
              <Card.Body>
                <Card.Title>How to Level and Torte a Cake</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3}>
            <Card id="s4-card-box" className="mx-auto mt-3 mb-3">
              <Card.Img variant="top" src={Frost} />
              <Card.Body>
                <Card.Title>How to Frost a Cake with Buttercream</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SectionFour;
