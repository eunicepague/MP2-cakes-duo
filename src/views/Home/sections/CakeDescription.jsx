import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import Cake from './../../../assets/imgs/veganstrawberrycake.jpg';
import './CakeDescription.css';
import axios from 'axios';
function CakeDescription() {
  const { id } = useParams();
  const [cake, setCake] = useState({});

  useEffect(() => {
    const handleData = async () => {
      const { data } = await axios.get(`http://localhost:4000/api/cake/${id}`);
      console.log(data.cake_by_id);

      setCake(data.cake_by_id);
    };

    handleData();
  }, [id]);

  return (
    <>
      <Container id="cake-description-container">
        <Row id="cake-descripion-content">
          <Col
            className="d-flex align-items-center"
            xs={12}
            sm={12}
            md={12}
            lg={6}
          >
            <div id="cake-description-text">
              <h5>❤️ RECIPE</h5>
              <p>
                ⭐⭐⭐⭐⭐ <span>4.9 from 62 reviews</span>
              </p>
              <p>Author: Russelle & Eunice</p>
              <p id="cake-description-h1">{cake?.title}</p>

              <p>
                <span style={{ fontWeight: 'bold' }}>Prep Time: </span>
                {cake?.time}
              </p>
              <p>
                <span style={{ fontWeight: 'bold' }}>Yield: </span>
                {cake?.portion}
              </p>
              <p>
                <span style={{ fontWeight: 'bold' }}>Category: </span>
                {cake?.category?.join(', ')}
              </p>
              <p>
                <span style={{ fontWeight: 'bold' }}>Method: </span>
                {cake?.type}
              </p>
              <p>
                <span style={{ fontWeight: 'bold' }}>Cuisine: </span>
                {cake?.cuisine}
              </p>
              <div id="cake-description-buttons">
                <button>Print PDF</button>
                <button>Save Recipe</button>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div id="cake-description-img-container">
              <img src={cake?.image}></img>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <section id="cake-description-contentTwo">
          <h3>Description</h3>
          <p>{cake?.description}</p>
          {cake?.ingredients?.map((item, index) => {
            return (
              <ul key={index}>
                <li>{item}</li>
              </ul>
            );
          })}
          <h3>Method</h3>
          {cake?.method?.map((item, index) => {
            const startNumber = index + 1;
            return (
              <ol key={index} start={startNumber}>
                <li>{Object.values(item)}</li>
              </ol>
            );
          })}
        </section>
      </Container>
    </>
  );
}

export default CakeDescription;
