import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container id="footer-container">
        <Row>
          <Col>
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/pastries">Cakes</Link>
            <Link to="/contact">Contacts</Link>
          </Col>
          <Col>
            <h3>Social Media</h3>
            <Link to=""></Link>
            <Link to=""></Link>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                <Form.Label>Subscribe to our newsletter</Form.Label>
                <Form.Control type="email" placeholder="Email Address" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <p>&copy; 2023. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
