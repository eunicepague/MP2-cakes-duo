import { Card, Container, Row, Button, Form } from "react-bootstrap";
import "./Login.css";
const Login = () => {
  return (
    <section id="login">
      <Container>
        <Row>
          <Card>
            <Card.Body>
              <Card.Title>
                <h2>Log In</h2>
              </Card.Title>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Button variant="outline-light">Submit</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
