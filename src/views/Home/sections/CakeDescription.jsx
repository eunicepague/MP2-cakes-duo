import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Cake from './../../../assets/imgs/veganstrawberrycake.jpg';
import axios
 from "axios";
function CakeDescription(){
    const {id} = useParams();
    const [cake, setCake] = useState({})


    useEffect(()=> {

        handleData()

    }, [])


    const handleData = async () => {
        const {data} = await axios.get(`http://localhost:4000/api/cake/${id}`)
        console.log(data.cake_by_id)
  
       setCake(data.cake_by_id)
    }
    

    return(
        <Card>      
            <Card.Img
                variant="top"
                src={cake.image == null ? Cake : cake.image}
            />
            <Card.Body id="s1-card-body">
                <Card.Title className="text-danger">{cake.title}</Card.Title>
                <Card.Subtitle>{cake.description}</Card.Subtitle>
                <Card.Text>{cake.cuisin}</Card.Text>
                <Card.Text>{cake.portion}</Card.Text>
                <Card.Text>{cake.type}</Card.Text>
                <Card.Text>{cake.time}</Card.Text>
            </Card.Body> 
        </Card>
    )
}

export default CakeDescription