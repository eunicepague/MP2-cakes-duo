import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Signup.css";
const Signup = () => {
  return (
    <section id="signup">
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h1>Sign Up</h1>
                </Card.Title>
                <Card.Subtitle className="mb-2 ">
                  <h3> It's free and easy.</h3>
                </Card.Subtitle>
                <hr />

                <Form>
                  <Row>
                    <Form.Group as={Col} controlId="formGridText">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Your first name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridText2">
                      <Form.Label>Middle Name (optional)</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your middle name"
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group
                      as={Col}
                      controlId="formGridText3"
                      className="mb-3"
                    >
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Your last name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridText4">
                      <Form.Label>Suffix</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.g Jr., Sr., III, IV etc."
                      />
                    </Form.Group>
                  </Row>
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
                </Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label> Confirm Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <hr />
                <Button className="mx-auto">Create Account</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Signup;
