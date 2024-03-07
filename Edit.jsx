

// import React, { useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import users from "./users";

// import { Link, useNavigate } from "react-router-dom";





// function Edit(){

//     const history = useNavigate();
//     const [bookName, setBookName] = useState("");
//     const [studentName, setStudentName] = useState("");
//     const [id, setId] = useState("");



//     let index = users.map(function (e) {
//         return e.id;
//     }).indexOf(id);


//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (bookName === "" || studentName === "") {
//             setError("Invalid input. Both fields are required.");
//             return;
//         }
        
//     let a=users[index];
//     a.bookName=bname;
//      a.studentName=sname;
        
    
        
    
//         // Clearing form fields and error after successful submission
//         history("/")
//     };




// useEffect(()=>{
//     setBookName(localStorage.getItem("bookName"))
//     setStudentName(localStorage.getItem("studentName"))
// },[])


// return(

// <div>
// <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
//     <Form.Group className="mb-3" controlId="bookName">
//         <Form.Control
//             onChange={(e) => setBookName(e.target.value)}
//             type="text"
//             placeholder="Enter book name"
//             value={bookName}
            
//         />
//     </Form.Group>

//     <Form.Group className="mb-3" controlId="studentName">
//         <Form.Control
//             onChange={(e) => setStudentName(e.target.value)}
//             type="text"
//             placeholder="Enter student name"
//             value={studentName}
            
//         />
//     </Form.Group>

//     {/* {error && <div style={{ color: "red" }}>{error}</div>} */}

//     <Button onClick={handleSubmit} variant="success" type="submit">
//        Update
//     </Button>

//     <Link className="d-grid gap-2" to="/">
//         <Button variant="info" size="lg">
//             Home
//         </Button>
//     </Link>
// </Form>
// </div>
// );


// }
// export default Edit;
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
    const history = useNavigate();
    const [bookName, setBookName] = useState("");
    const [studentName, setStudentName] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        setBookName(localStorage.getItem("bname"));
        setStudentName(localStorage.getItem("sname"));
        setId(localStorage.getItem("id"));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (bookName === "" || studentName === "") {
            setError("Invalid input. Both fields are required.");
            return;
        }

        // Update the values in the local storage
        localStorage.setItem("bname", bookName);
        localStorage.setItem("sname", studentName);

        // Clearing form fields and error after successful submission
        setBookName("");
        setStudentName("");
        setError("");

        // Redirect to the home page or any other desired page
        history("/");
    };

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
                <Form.Group className="mb-3" controlId="bookName">
                    <Form.Control
                        onChange={(e) => setBookName(e.target.value)}
                        type="text"
                        placeholder="Enter book name"
                        value={bookName}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="studentName">
                    <Form.Control
                        onChange={(e) => setStudentName(e.target.value)}
                        type="text"
                        placeholder="Enter student name"
                        value={studentName}
                    />
                </Form.Group>

                {/* {error && <div style={{ color: "red" }}>{error}</div>} */}

                <Button onClick={handleSubmit} variant="success" type="submit">
                    Update
                </Button>

                <Link className="d-grid gap-2" to="/">
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Edit;
