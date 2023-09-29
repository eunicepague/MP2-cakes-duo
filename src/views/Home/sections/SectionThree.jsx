// import React from 'react';
import { Container, Card, Row, Col } from "react-bootstrap";
import "./SectionThree.css";
import Cake from "./../../../assets/imgs/veganstrawberrycake.jpg";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SectionThree = () => {
  const [cakeData, setCakeData] = useState([]);
  const [val, setVal] = useState("");

  const handleData = async () => {
    const { data } = await axios.get(
      `https://cake-backend-63mn.vercel.app/api/cake`
    );
    // console.log(data.all_cake)

    setCakeData(data.all_cake);
  };

  useState(() => {
    handleData();
  }, []);

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
            <button
              className="mx-2"
              value={"bars and brownies"}
              onClick={(e) => setVal(e.target.value)}
            >
              BARS AND BROWNIES
            </button>
          </Col>
          <Col xs="auto">
            <button
              className="mx-2"
              value={"cupcakes"}
              onClick={(e) => setVal(e.target.value)}
            >
              CUPCAKES
            </button>
          </Col>
          <Col xs="auto">
            <button
              className="mx-2"
              value={"NO BAKE DESSERTS"}
              onClick={(e) => setVal(e.target.value)}
            >
              NO BAKE DESSERTS
            </button>
          </Col>
          <Col xs="auto">
            <button
              className="mx-2"
              value={"Cheesecake"}
              onClick={(e) => setVal(e.target.value)}
            >
              CHEESECAKES
            </button>
          </Col>
          <Col xs="auto">
            <button
              className="mx-2"
              value={"animals"}
              onClick={(e) => setVal(e.target.value)}
            >
              ANIMAL THEME
            </button>
          </Col>
          <Col xs="auto">
            <button
              className="mx-2"
              value={"COOKIES"}
              onClick={(e) => setVal(e.target.value)}
            >
              COOKIES
            </button>
          </Col>
          <Col xs="auto">
            <button
              className="mx-2"
              value={"cake"}
              onClick={(e) => setVal(e.target.value)}
            >
              CAKES
            </button>
          </Col>
        </div>
      </section>

      <div id="s3-card-container">
        <Row className="justify-content-center">
          {cakeData?.map((cake) => {
            if (val == "") {
              return (
                <Col xs={6} sm={4} md={4} lg={3} key={cake._id}>
                  <Link to={`/pastries/${cake._id}`}>
                    <Card id="s3-card-box" className="mx-auto mt-3 ">
                      <div className="s3-card-img-container">
                        <div className="card-img-placeholder">
                          <Card.Img
                            variant="top"
                            src={cake.image == null ? Cake : cake.image}
                            alt={cake.title}
                          />
                        </div>
                      </div>
                      <Card.Body id="s3-card-body">
                        <Card.Title id="s3-card-title">{cake.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
            } else {
              const newVal = val.toLowerCase();
              console.log(cake.category);
              console.log(newVal);
              console.log(cake.category.includes(newVal));
              if (cake.category.includes(newVal)) {
                return (
                  <Col xs={6} sm={4} md={4} lg={3} key={cake._id}>
                    <Link to={`/pastries/${cake._id}`}>
                      <Card id="s3-card-box" className="mx-auto mt-3 ">
                        <div className="s3-card-img-container">
                          <div className="card-img-placeholder">
                            <Card.Img
                              variant="top"
                              src={cake.image == null ? Cake : cake.image}
                            />
                          </div>
                        </div>
                        <Card.Body id="s3-card-body">
                          <Card.Title id="s3-card-title">
                            {cake.title}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                );
              }
            }
          })}
        </Row>
      </div>
    </Container>
  );
};

export default SectionThree;
