import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "boxicons";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const isAdmin = localStorage.getItem("isAdmin");
  const id = localStorage.getItem("id");

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("email");
    localStorage.removeItem("cake");

    navigate("/login");
  };

  return (
    <header id="navbar">
      <Navbar
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        // fixed="top"
        opacity="0.5"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" disabled={id == null ? true : false}>
            How to Bake It
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" disabled={id == null ? true : false}>
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/pastries"
                disabled={id == null ? true : false}
              >
                Cakes
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contacts
              </Nav.Link>
            </Nav>

            {id == null ? (
              <>
                <Button
                  variant="light"
                  className="btn me-3"
                  as={Link}
                  to="/login"
                >
                  Log in
                </Button>
                <Button variant="light" className="btn" as={Link} to="/signup">
                  Sign up
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="light"
                  className="btn me-3"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
                <Button
                  variant="light"
                  className="btn"
                  as={Link}
                  to="/dashboard"
                >
                  Dashboard
                </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
