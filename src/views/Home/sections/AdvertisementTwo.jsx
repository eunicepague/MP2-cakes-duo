// import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Chef from './../../../assets/imgs/chefs.png';
import './AdvertisementTwo.css';

const AdvertisementTwo = () => {
  return (
    <Container id="advertisementTwo-container">
      <section id="advertisementTwo-content">
        <Row>
          <Col
            className="d-flex align-items-center mt-md-5 mt-5"
            xs={12}
            sm={12}
            md={12}
            lg={6}
          >
            <div id="advertisementTwo-text">
              <h1 id="advertisementTwo-h1" className="mb-5 mx-lg-5">
                Meet the Chefs
              </h1>
              <div>
                <h5 id="advertisementTwo-h5" className="mb-5 mx-lg-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae maiores labore laboriosam veniam. Officiis
                  distinctio, hic deserunt alias assumenda sit odit consequuntur
                  dicta culpa illum voluptas a reiciendis soluta reprehenderit?
                </h5>
                <span id="advertisementTwo-h6" className="mb-4 mx-lg-5">
                  Learn More 👩‍🍳🧑‍🍳
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div id="advertisementTwo-img-container">
              <img className="mt-md-5" src={Chef}></img>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default AdvertisementTwo;
