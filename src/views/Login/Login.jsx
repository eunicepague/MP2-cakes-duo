import { Card, Container, Button } from "react-bootstrap";
import "./Login.css";
const Login = () => {
  return (
    <>
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>CONTACT US</Card.Title>

            <Button variant="outline-light">Submit</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Login;
