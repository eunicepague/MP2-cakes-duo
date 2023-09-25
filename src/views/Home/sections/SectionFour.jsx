// import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap';
import Cake from './../../../assets/imgs/veganstrawberrycake.jpg';
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

      <div id="card-container">
        <Row className="justify-content-center">
          <Col xs={6} sm={6} md={6} lg={3}>
            <Card id="card-box" className="mx-auto mt-3 mb-3">
              <Card.Img variant="top" src={Cake} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3}>
            <Card id="card-box" className="mx-auto mt-3 mb-3">
              <Card.Img variant="top" src={Cake} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3}>
            <Card id="card-box" className="mx-auto mt-3 mb-3">
              <Card.Img variant="top" src={Cake} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3}>
            <Card id="card-box" className="mx-auto mt-3 mb-3">
              <Card.Img variant="top" src={Cake} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SectionFour;
