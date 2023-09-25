import { Card, Button, Container } from 'react-bootstrap';
import { useRef, useEffect, useState } from 'react';
import Cake from './../../../assets/veganstrawberrycake.jpg';
import './sectionOne.css';
import 'boxicons';

const SectionOne = () => {
  const cardContainerRef = useRef(null);
  const [items, setItems] = useState(['BEST RECIPE BOOK EVER']);
  const speed = 1000;

  const addItem = () => {
    setItems((prevItems) => [...prevItems, 'BEST RECIPE BOOK EVER']);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      addItem();
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -100, //scroll distance
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 100, // scroll distance
        behavior: 'smooth',
      });
    }
  };
  const marqueeStyle = {
    whiteSpace: 'nowrap',
  };

  const spanStyle = {
    // whiteSpace: 'nowrap',
    marginRight: '10rem', //
  };
  return (
    <>
      <div id="marquee-container">
        <marquee className="s1-marquee" style={marqueeStyle}>
          {items.map((item, index) => (
            <span key={index} style={spanStyle} className="s1-marqueeText">
              {item}
            </span>
          ))}
        </marquee>
      </div>
      <Container id="s1-container">
        <section id="s1-heading">
          <h1 id="s1-h1">MOST POPULAR RECIPES</h1>
        </section>

        <div className="carousel-container">
          <div className="card-container" ref={cardContainerRef}>
            <Card>
              <Card.Img variant="top" src={Cake} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Cake} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Cake} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Cake} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Cake} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Cake} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <button className="carousel-button-left" onClick={scrollLeft}>
            <box-icon type="solid" name="left-arrow"></box-icon>
          </button>
          <button className="carousel-button-right" onClick={scrollRight}>
            <box-icon name="right-arrow" type="solid"></box-icon>
          </button>
        </div>
      </Container>
    </>
  );
};

export default SectionOne;
