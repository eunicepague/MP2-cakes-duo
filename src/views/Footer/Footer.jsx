import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

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
            <h3 id="socmed">Social Media</h3>
            <p>Facebook</p>
            <p>Discord</p>
            <p>Instagram</p>
            <p>Twitter/X</p>
            {/* <Link to="#">
              <box-icon
                name="facebook-circle"
                type="logo"
                color="#fff7f7"
              ></box-icon>
            </Link>
            <Link to="#">
              <box-icon name="discord-alt" type="logo" color="#ffffff">
                Discord
              </box-icon>
            </Link>
            <box-icon name="instagram" type="logo" color="#ffffff"></box-icon> */}
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
      <p className="copy">&copy; 2023. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
