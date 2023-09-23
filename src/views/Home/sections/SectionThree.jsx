// import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './SectionThree.css';
import Cake from './../../../assets/veganstrawberrycake.jpg';

const SectionThree = () => {
  return (
    <Container id="s3-container">
      <section id="s3-heading">
        <h1 id="s3-h1">Sweets and Treats</h1>
        <h5 id="s3-h6">
          Easy cake recipes, fluffy cupcakes and the best cheesecakes!
        </h5>
      </section>

      <section id="s3-buttons-container">
        <div id="s3-buttons">
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
            <button className="mx-2">CHEESECAKES</button>
          </Col>
          <Col xs="auto">
            <button>ANIMAL THEME</button>
          </Col>
          <Col xs="auto">
            <button className="mx-2">COOKIES</button>
          </Col>
        </div>
      </section>

      <div id="s3-card-container">
        <Row className="justify-content-center">
          <Col xs={6} sm={6} md={6} lg={3}>
            <Card id="s3-card-box" className="mx-auto mt-3 mb-3">
              <Card.Img variant="top" src={Cake} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3}>
            <Card id="s3-card-box" className="mx-auto mt-3 mb-3">
              <Card.Img variant="top" src={Cake} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3}>
            <Card id="s3-card-box" className="mx-auto mt-3 mb-3">
              <Card.Img variant="top" src={Cake} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3}>
            <Card id="s3-card-box" className="mx-auto mt-3 mb-3">
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
