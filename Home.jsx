import React,{useState} from "react";
import {Button,Table} from "react-bootstrap";
//npm i react-bootstrap bootstrap@5.1.2 react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";
import {Link,useNavigate} from "react-router-dom";
import "./App.css"

function Home(){

    // const [users1, setUsers] = useState([
    //     {"id": "1", "bname": "nnn", "sname": "raji"},
    //     {"id": "2", "bname": "bbb", "sname": "raji1"},
    //     {"id": "3", "bname": "cc", "sname": "rahi2"}
    //   ]);
    let history=useNavigate();


    function setId(id,bname,sname){
        localStorage.setItem("id",id);
        localStorage.setItem("bname",bname);
        localStorage.setItem("sname",sname);
        


    }

    // const handleAddUser = (id,bname,sname) => {
    //     // Example of adding a new user
    //     const newUser = {
    //       id:id, // Replace with your preferred ID generation logic
    //       bname:bname, // Replace with actual user data
    //      sname:sname,
    //     };
    
    //     // Update the state by spreading the existing users and adding the new user
    //     setUsers((prevUsers) => [...prevUsers, newUser]);
    //   };
      
    function deleted(id) {
        let index = users.map(function (e) {
            return e.id;
        }).indexOf(id);
        users.splice(index, 1);
        history("/");
    }




//         console.log(id)
        
//         const index = users.findIndex((user) => user.id === id);

//         if (index !== -1) {
//           // Create a new array without the deleted user
//           console.log(index)
//           setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

//   // Update the state with the new array
//   setUsers(updatedUsers);


 


        
       
    
    return(
        <div >

<table   striped bordered hover >
    <thead>
        <tr> <th>Book Name</th>
        <th>Student Name</th></tr>
       

    </thead>
    <tbody>

        {
            users.map((item)=>{
                return(
                <tr>

                    <td>{item.bname}</td>
                    <td>{item.sname}</td>
                    <td>
                        <Link to='/edit'>
                            <Button onClick={(e)=>setId(item.id,item.bname,item.sname)} variant='primary'>Update</Button>
                        </Link>
                    </td>
                    <td>
                    
                            <Button onClick={(e)=>deleted(item.id)} variant='danger'>Delete</Button>
                       
                    </td>
                </tr>)
            })
        }
    </tbody>

</table>

<Link className="d-grid gap-2" style={{"text-decoration":"none"}} to="/create">
    <Button variant="success" size="lg"> create Record</Button>
</Link>


        </div>
    )
}
export default Home;
