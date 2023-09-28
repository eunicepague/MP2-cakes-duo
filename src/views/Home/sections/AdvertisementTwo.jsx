// import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Chef from './../../../assets/imgs/chefs.png';
import './AdvertisementTwo.css';

const AdvertisementTwo = () => {
  return (
    <Container id="advertisementTwo-container">
      <section id="advertisementTwo-content">
        <Row>
          <Col className="d-flex align-items-center">
            <div id="advertisementTwo-text">
              <h1 id="advertisementTwo-h1" className="mb-0 mx-lg-5">
                Meet the Chefs
              </h1>
              <div>
                <h5 id="advertisementTwo-h5" className="mb-5 mt-5 mx-lg-5">
                  Hey there, we're Russell and Eunice, the dynamic duo behind
                  'How to Bake It. Here you’ll find well-tested dessert recipes,
                  cake decorating tutorials, and baking techniques that will
                  help save you time in the kitchen. We look forward to baking
                  with you!
                </h5>
                <Link to="/about">
                  <span id="advertisementTwo-h6" className="mb-4 mx-lg-5">
                    Learn More 👩‍🍳🧑‍🍳
                  </span>
                </Link>
              </div>
            </div>
          </Col>

          <Col>
            <div id="advertisementTwo-img-container">
              <img src={Chef}></img>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default AdvertisementTwo;
