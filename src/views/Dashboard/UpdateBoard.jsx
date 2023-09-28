import { useEffect, useState } from 'react';
import {Button, Container, Card, Modal} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Cake from '../../assets/imgs/veganstrawberrycake.jpg';

function UpdateBoard ({props}){
    const [cakeData, setCakeData] = useState([])
    const {id} = useParams()
    const [cake, setCake] = useState({})

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
         // Retrieving the string
        let retString = localStorage.getItem("cake")

        // Retrieved array
        let retArray = JSON.parse(retString)

        setCakeData(retArray)

        findCake()
    },[])

    const findCake = () => {
        return cakeData?.find(cake => {

            if(cake._id == id){
                setCake(cake)
                return cake
            }
        })
    }
    console.log(cake)

    const handleArchive = () => {
        fetch(`http://localhost:4000/api/cake/${id}/archive`, {
            method: "PUT"
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }


    return(
        <Container className='m-5'>
            <Card.Body id="s1-card-body">
                <Card.Title className="text-danger">{cake.title}</Card.Title>
                <Card.Subtitle>{cake.description}</Card.Subtitle>
                <Card.Text>{cake.cuisin}</Card.Text>
                <Card.Text>{cake.portion}</Card.Text>
                <Card.Text>{cake.type}</Card.Text>
                <Card.Text>{cake.time}</Card.Text>
                {
                    cake.isActive ? (
                        <>
                            <Button variant="primary" onClick={handleShow}>
                                Update
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                                </Modal.Footer>
                            </Modal>

                            <Button variant="warning" onClick={handleArchive}>
                                Archive
                            </Button>
                        </>
                    ) : (
                        <>
                        
                        </>
                    )
                }
            </Card.Body> 
        </Container>
    )
}

export default UpdateBoard