import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Edit = ({     book, onUpdate }) => {
    const [editedBook, setEditedBook] = useState(book);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedBook((prevBook) => ({
        ...prevBook,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(editedBook)
      console.log("handling submit")
      onUpdate(editedBook);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <br /><br />
        <label>
          Book Name:
          <input type="text" name="bname" value={editedBook.bname} onChange={handleChange} />
        </label>
        <label>
          Student Name:
          <input type="text" name="sname" value={editedBook.sname} onChange={handleChange} />
        </label>
      
        <label>
          Taken Date:
          <input type="datetime-local" name="bname" value={editedBook.takendate} onChange={handleChange} />
        </label>
        <label>
          Student Name:
          <input type="datetime-local" name="sname" value={editedBook.returndate} onChange={handleChange} />
        </label>
        <label>
          Image Link
          <input type="text" name="sname" value={editedBook.img} onChange={handleChange} />
        </label>




        <button  style={{justifyContent:"center"}}type="submit">Update</button>
      </form>

//     <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
//     <Form.Group className="mb-3" controlId="bname">
//         <Form.Label>Book Name:</Form.Label>
//         <Form.Control
//             onChange={(e) => setBookName(e.target.value)}
//             type="text"
//             placeholder="Enter book name"
//             value={bname}
//             required
//         />
//     </Form.Group>

//     <Form.Group className="mb-3" controlId="sname">
//         <Form.Label>Student Name:</Form.Label>
//         <Form.Control
//             onChange={(e) => setStudentName(e.target.value)}
//             type="text"
//             placeholder="Enter student name"
//             value={studentName}
//             required
//         />
//     </Form.Group>

//     {/* Assuming error is a state variable */}
//     {error && <div style={{ color: "red" }}>{error}</div>}

//     <Form.Group className="mb-3" controlId="takendate">
//         <Form.Label>Taken Date:</Form.Label>
//         <Form.Control
//             onChange={(e) => setTakenDate(e.target.value)}
//             type="datetime-local"
//             value={takenDate}
//             required
//         />
//     </Form.Group>

//     <Form.Group className="mb-3" controlId="returndate">
//         <Form.Label>Return Date:</Form.Label>
//         <Form.Control
//             onChange={(e) => setReturnDate(e.target.value)}
//             type="datetime-local"
//             value={returnDate}
//             required
//         />
//     </Form.Group>

//     <Form.Group className="mb-3" controlId="img">
//         <Form.Label>Image Link:</Form.Label>
//         <Form.Control
//             onChange={(e) => setImageLink(e.target.value)}
//             type="text"
//             placeholder="Enter image link"
//             value={imageLink}
//             required
//         />
//     </Form.Group>

//     <Button onClick={handleSubmit} variant="success" type="submit">
//         Update
//     </Button>

//     <Link className="d-grid gap-2" to="/">
//         <Button variant="info" size="lg">
//             Home
//         </Button>
//     </Link>
// </Form>

    );
  };
  export default Edit;

