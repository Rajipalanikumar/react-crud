import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
    const history = useNavigate();
    const [bookName, setBookName] = useState("");
    const [studentName, setStudentName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuid();
        let uni = ids.slice(0, 8);
    
        if (bookName === "" || studentName === "") {
            setError("Invalid input. Both fields are required.");
            return;
        }
    
        users.push({
            id: uni,
            bname: bookName,
            sname: studentName,
        });
    
        // Clearing form fields and error after successful submission
        setBookName("");
        setStudentName("");
        setError("");
    
        history("/");
    };
    

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
                <Form.Group className="mb-3" controlId="bname">
                    <Form.Control
                        onChange={(e) => setBookName(e.target.value)}
                        type="text"
                        placeholder="Enter book name"
                        value={bookName}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="sname">
                    <Form.Control
                        onChange={(e) => setStudentName(e.target.value)}
                        type="text"
                        placeholder="Enter student name"
                        value={studentName}
                        required
                    />
                </Form.Group>

                {error && <div style={{ color: "red" }}>{error}</div>}

                <Button onClick={handleSubmit} variant="success" type="submit">
                    Submit
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

export default Create;
