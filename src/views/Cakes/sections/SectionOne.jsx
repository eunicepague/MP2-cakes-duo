// import React from 'react';
import { Container, Row, Col, Form, Card, Breadcrumb } from 'react-bootstrap';
import './SectionOne.css';
import Cake from './../../../assets/imgs/veganstrawberrycake.jpg';

const SectionOne = () => {
  return (
    <Container id="cake-s1-container">
      <Row id="cake-content-container">
        {/* -------CAKE FILTERS----- */}

        <Col
          id="cake-filter-container"
          md={3}
          lg={3}
          className="d-none d-md-block"
        >
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>

          <h3>Browse Recipe </h3>

          {/* ----CAKE TYPES----- */}
          <h5>Recipe types:</h5>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>Oven</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>No Bake</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>Icing</Form.Label>
          </Form.Group>

          {/* ----CAKE CATEGORY----- */}
          <h5>Category</h5>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>dessert</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>Cake</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>chocolate</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>celebration</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>holidays</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>fruits</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>sweets and treats</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>animals</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>cupcakes</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>valentines</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>thanksgiving</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>ice-cream</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>glutten-free</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>cream</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>buttercream</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>cake pops & cookie balls</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>new years</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>christmas</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>sponge</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>easter</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>cookies</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>party</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>birhdays</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>caramel</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>bars and brownies</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>no bake desserts</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>st. patrick`&apos`s day</Form.Label>
          </Form.Group>

          {/* ----CAKE CUISINE----- */}
          <h5>Cuisine</h5>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>American</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>French</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>Ukranian</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>Italian</Form.Label>
          </Form.Group>

          {/* ----CAKE Difficulty----- */}
          <h5>Difficulty</h5>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>Easy</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>Medium</Form.Label>
          </Form.Group>
          <Form.Group id="cake-form-group">
            <Form.Check type="checkbox" id="cake-checkbox" />
            <Form.Label>A Challenge</Form.Label>
          </Form.Group>
        </Col>

        {/*----------- cards------------ */}

        <Col id="cake-cards-container" md={9} lg={9}>
          <Row id="cake-cards-content" className="mt-5">
            <Col>
              <Card id="cake-card-box" className="mx-auto mt-3 mb-3">
                <Card.Img variant="top" src={Cake} />
                <Card.Body id="cake-card-body">
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card id="cake-card-box" className="mx-auto mt-3 mb-3">
                <Card.Img variant="top" src={Cake} />
                <Card.Body id="cake-card-body">
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card id="cake-card-box" className="mx-auto mt-3 mb-3">
                <Card.Img variant="top" src={Cake} />
                <Card.Body id="cake-card-body">
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card id="cake-card-box" className="mx-auto mt-3 mb-3">
                <Card.Img variant="top" src={Cake} />
                <Card.Body id="cake-card-body">
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row id="cake-cards-content">
            <Col>
              <Card id="cake-card-box" className="mx-auto mt-3 mb-3">
                <Card.Img variant="top" src={Cake} />
                <Card.Body id="cake-card-body">
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card id="cake-card-box" className="mx-auto mt-3 mb-3">
                <Card.Img variant="top" src={Cake} />
                <Card.Body id="cake-card-body">
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card id="cake-card-box" className="mx-auto mt-3 mb-3">
                <Card.Img variant="top" src={Cake} />
                <Card.Body id="cake-card-body">
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card id="cake-card-box" className="mx-auto mt-3 mb-3">
                <Card.Img variant="top" src={Cake} />
                <Card.Body id="cake-card-body">
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionOne;
