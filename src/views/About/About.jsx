// import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Chef from './../../assets/imgs/chefs.png';
import Cat from './../../assets/imgs/mp2-logo.png';
import './About.css';

const About = () => {
  return (
    <Container id="about-container">
      <Row id="about-content">
        <Col className="d-flex justify-content-center align-center">
          <img src={Cat}></img>
        </Col>
        <Col className="d-flex justify-content-center align-center">
          <p>
            'How to Bake It' emerged from our shared passion for baking, which
            we've cultivated over the years. Russell and Eunice, lifelong
            friends and avid home bakers, often found themselves swapping
            recipes, experimenting with flavors, and delighting in the joys of
            creating sweet treats. One evening, as we whipped up a batch of our
            favorite cookies, we realized how much we cherished these moments
            and the satisfaction that came from sharing our baked creations with
            family and friends. That lightbulb moment led us to establish 'How
            to Bake It' just last year, in our own kitchens. Our goal was
            simple: to create a warm and welcoming online space where we could
            document our baking adventures, share our tried-and-true recipes,
            and offer valuable tips and techniques. 'How to Bake It' quickly
            became our platform to spread the joy of baking far and wide. Since
            then, our love for all things sweet has grown stronger, and we're
            excited to continue this journey with you. Join us as we explore the
            world of baking together, one recipe at a time. Thank you for being
            a part of our baking family!
          </p>
        </Col>
      </Row>
      <Row id="about-chef">
        <Col className="d-flex justify-content-center align-center">
          <p>
            As passionate bakers, bloggers, and photographers, we're thrilled to
            welcome you to our sweet corner of the internet. At 'How to Bake
            It,' we've made it our mission to share our love for baking with
            you. Whether you're a seasoned pro or a baking newbie, you'll find a
            treasure trove of well-tested dessert recipes, cake decorating
            tutorials, and insider baking techniques that will not only satisfy
            your sweet tooth but also save you valuable time in the kitchen.
            Russell and Eunice have been whipping up delectable treats and
            experimenting with flavors for years. With every post, we'll take
            you on a delightful journey through the world of baking, from
            classic recipes to innovative creations. Our goal is to inspire your
            inner baker and help you create delicious memories in your own
            kitchen. So, grab your apron, preheat that oven, and join us as we
            embark on a baking adventure together. We look forward to sharing
            our passion for baking and creating sweet magic with you. Let's get
            started – it's time to bake up some love!
          </p>
        </Col>
        <Col className="d-flex justify-content-center align-center">
          <img src={Chef}></img>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
