import { Card, Container, FloatingLabel, Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>CONTACT US</Card.Title>
            <Card.Subtitle className="mb-4">
              Do you have any concerns? Get in touch with us.
            </Card.Subtitle>
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Comments"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "200px" }}
              />
            </FloatingLabel>
            <Button variant="outline-light">Submit</Button>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Contact;
