// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AdvertisementOne.css';
import Adds1 from './../../../assets/adds1.jpg';

const AdvertisementOne = () => {
  return (
    <Container id="advertisementOne-container">
      <section id="advertisementOne-content">
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div id="advertisementOne-img-container">
              <img className="mt-md-5" src={Adds1}></img>
            </div>
          </Col>
          <Col
            className="d-flex align-items-center"
            xs={12}
            sm={12}
            md={12}
            lg={6}
          >
            <div id="advertisementOne-text">
              <h1
                id="advertisementOne-h1"
                className="mb-3 mb-sm-3 mb-md-3 mt-sm-5 mt-md-5 mx-lg-5"
              >
                MILK YOUR REWARDS
              </h1>
              <div>
                <h5 id="advertisementOne-h5" className="mb-4 mx-lg-5">
                  Join The First Bite Club to get a taste of our newest treats,
                  invites to exclusive events, and rewards for loving Milk Bar.
                  Yes, that means we’ll pay you in cake.
                </h5>
                <button className="advertisementOne-button mx-lg-5">
                  Sign up
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default AdvertisementOne;
