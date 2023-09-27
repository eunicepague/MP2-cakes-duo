import { Card, Container, FloatingLabel, Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [validated, setValildated] = useState(false);

  function createAccount(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    setValildated(true);
  }
  return (
    <section id="contact">
      <Container id="contact-container">
        <Card>
          <Card.Body>
            <Card.Title>CONTACT US</Card.Title>
            <Card.Subtitle className="mb-4">
              Do you have any concerns? Get in touch with us.
            </Card.Subtitle>
            <Form noValidate validated={validated} onSubmit={createAccount}>
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
                aria-required
              >
                <Form.Control type="text" placeholder="name" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
                aria-required
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
                  required
                />
              </FloatingLabel>
            </Form>

            <Button variant="outline-light">Submit</Button>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Contact;
