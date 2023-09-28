import { Container, Row } from "react-bootstrap";
import CakeDashboard from "./CakeDashboard";

function Dashboard (){
    return(
        <>
            <Container className="m-5">
                <Row>

                </Row>
                <Row>
                    <CakeDashboard/>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard