import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import http from "../../Lib/http";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
      firstName,
      middleName,
      lastName,
      suffix,
      email,
      password,
      confirmPassword,
    };

    try {
      fetch(`https://cake-backend.vercel.app/api/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.data) {
            // console.log(response)
            // localStorage.setItem('id', response.data._id)
            // localStorage.setItem('email', response.data.email)
            // localStorage.setItem('isAdmin', response.data.isAdmin)

            alert(`${response.message}`);

            navigate("/login");
          } else {
            alert(
              `${response.email_exists}` ||
                "Email already exists. Please login instead."
            );
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <section id="signup">
      <Container id="signup-container">
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

                <Form noValidate validated={validated} onSubmit={createAccount}>
                  <Row>
                    <Form.Group as={Col} controlId="formGridText">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridText2">
                      <Form.Label>Middle Name (optional)</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your middle name"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
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
                      <Form.Control
                        required
                        type="text"
                        placeholder="Your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridText4">
                      <Form.Label>Suffix</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.g Jr., Sr., III, IV etc."
                        value={suffix}
                        onChange={(e) => setSuffix(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <Form.Group
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
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>

                  <hr />
                  <Button type="submit" className="mx-auto">
                    Create Account
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Signup;
