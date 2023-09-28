import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CakeDashboard (){
   const [cakeData, setCakeData] = useState([]);
   const [item, setItem] = useState(0);

   const handleCakeData = async () => {
        const {data} = await axios.get(`http://localhost:4000/api/cake`)

        setCakeData(data.all_cake);
        

        if(cakeData.length != 0){
            let cakeArray = JSON.stringify(cakeData);
        
            localStorage.setItem('cake', cakeArray)
        }
    
   }

    useEffect(() => {
        
        handleCakeData()
        
    },[])

    

    console.log(cakeData)

    const cakeArr = cakeData?.map((cake, value) => {
        // console.log(cake.isActive)
        return(
            <>
                <tr key={value}>
                    <td>{cake.title}</td>
                    <td>
                        <ul>
                            {cake.category.map((item, value)=> {
                                return(
                                    <li key={value}>
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                    </td>
                    <td>{cake.cuisine}</td>
                    <td>{cake.type}</td>
                    <td>{cake.difficulty}</td>
                    <td>{cake.isActive.toString()}</td>
                    <td>
                        <Link to={`/update/${cake._id}`}>Update</Link>
                    </td>
                </tr>
            </>
        )
    })


    return(
        <>
           <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Cusine</th>
                <th>Type</th>
                <th>Difficulty</th>
                <th>Status</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody >
                { cakeArr }
            </tbody>
            </Table>
        </>
    )
}

export default CakeDashboard