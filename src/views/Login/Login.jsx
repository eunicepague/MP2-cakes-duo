import { Card, Container, Row, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../Lib/http";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValildated] = useState(false);

  async function loginAccount(event) {
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
      fetch(`http://localhost:4000/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response._id) {
            console.log(response);

            localStorage.setItem("id", response._id);
            localStorage.setItem("email", response.email);
            localStorage.setItem("isAdmin", response.isAdmin);

            alert("Login successful!");

            navigate("/");
          } else if (response.message) {
            alert(`${response.message}`);
          } else {
            alert(`Something went wrong. Please try again`);
          }
        });
    } catch (error) {
      console.log(error.message);
    }
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
              <Form onSubmit={loginAccount}>
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
                <hr />
                <Button type="submit" className="mx-auto">
                  Sign in
                </Button>
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
