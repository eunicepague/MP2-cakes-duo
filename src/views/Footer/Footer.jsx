import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Footer>
      <Container>
        <Row>
          <Col>
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="cakes">Cakes</Link>
            <Link to="/contacts">Contacts</Link>
          </Col>
          <Col>
            <h3></h3>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Footer>
  );
};

export default Footer;
