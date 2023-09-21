// import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './SectionThree.css';
import Cake from './../../../assets/veganstrawberrycake.jpg';

const SectionThree = () => {
  return (
    <Container id="s2-container">
      <section id="s2-heading">
        <h1 id="s2-h1">Sweets and Treats</h1>
        <h5 id="s2-h6">
          Easy cake recipes, fluffy cupcakes and the best cheesecakes!
        </h5>
      </section>

      <section id="s2-buttons">
        <Row className="justify-content-center">
          <Col xs="auto">
            <button className="mx-2">COOKIES</button>
          </Col>
          <Col xs="auto">
            <button className="mx-2">CHEESECAKES</button>
          </Col>

          <Col xs="auto">
            <button className="mx-2">BARS AND BROWNIES</button>
          </Col>

          <Col xs="auto">
            <button className="mx-2">CAKES AND CUPCAKES</button>
          </Col>
          <Col xs="auto">
            <button className="mx-2">NO BAKE DESSERTS</button>
          </Col>

          <Col xs="auto">
            <button>ANIMAL THEME</button>
          </Col>
        </Row>
      </section>

      <div id="card-container">
        <Row className="justify-content-center">
          <Col xs={12} sm={6} lg={3}>
            <Card className="mx-auto mt-3 mb-3">
              <Card.Img variant="top" src={Cake} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card className="mx-auto mt-3 mb-3">
              <Card.Img variant="top" src={Cake} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card className="mx-auto mt-3 mb-3">
              <Card.Img variant="top" src={Cake} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card className="mx-auto mt-3 mb-3">
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

export default SectionThree;
