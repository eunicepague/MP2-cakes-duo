import { Card, Container, Row, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../Lib/http";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValildated] = useState(false);

  async function createAccount(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    setValildated(true);

    const data = {
      email,
      password,
    };
    try {
      const response = await http.post("/login", data);
      navigate("/");
      console.log(response);
    } catch (error) {}
  }
  return (
    <section id="login">
      <Container id="login-container">
        <Row>
          <Card>
            <Card.Body>
              <Card.Title>
                <h2>Log In</h2>
              </Card.Title>
              <Form noValidate validated={validated} onSubmit={createAccount}>
                <Form.Group
                  required
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className=" d-flex justify-content-center">
                  <Button variant="outline-light">Submit</Button>
                </Form.Group>
              </Form>
              <hr />
              <Card.Subtitle>Don't have an account yet?</Card.Subtitle>
              <Button
                variant="outline-light"
                className="my-3"
                as={Link}
                to="/signup"
              >
                Sign In
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
