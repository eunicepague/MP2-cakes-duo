import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import AbtImg from "../../assets/imgs/abtimg.jpg";

const About = () => {
  return (
    <section id="about-container">
      <Container>
        <Row>
          <Col>
            <img src={AbtImg} alt="" />
          </Col>
          <Col>
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus doloremque consequatur enim quaerat voluptates quia
              explicabo, facilis eveniet suscipit alias delectus rerum quisquam
              ipsa libero soluta recusandae aut vero consectetur?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              ratione ullam eum pariatur perspiciatis impedit eos dignissimos
              mollitia incidunt delectus quas, et debitis ab blanditiis maxime
              asperiores ea voluptatibus minus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              id iusto eos, consequatur similique ea nisi tempora ducimus aut.
              Voluptates ipsa magnam quam impedit vero animi et beatae maiores
              nobis reprehenderit error praesentium quaerat obcaecati quia,
              magni quis natus, possimus molestiae? Pariatur rem saepe fuga
              deserunt, autem mollitia perspiciatis nam.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
