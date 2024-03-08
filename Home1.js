import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";
import { Link, useNavigate } from "react-router-dom";
import Edit from "./Edit";

function Home() {
  const [books, setBooks] = useState(users);
  const [editingBook, setEditingBook] = useState(null);
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState(null);

  useEffect(() => {
    console.log("Updated Books State:", books);
  }, [books]);

  const handleEdit = (bookId) => {
    const bookToEdit = books.find((book) => book.id === bookId);
    setEditingBook(bookToEdit);
  };


  const handleSort = (option) => {

    const sortedBooks = [...books].sort((a, b) => {
      if (a[option] < b[option]) return -1;
      if (a[option] > b[option]) return 1;
      return 0;
    });

    if (sortOption === option) {
      setBooks(sortedBooks.reverse());
    } else {
      setBooks(sortedBooks);
    }

    setSortOption(option);
  };

  const handleUpdate = (updatedBook) => {
    console.log("Updated Book:", updatedBook);
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
    setEditingBook(null);
  };

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Student Name</th>
            <th>Taken date & Time</th>
            <th>Return date & Time</th>
            <th>img</th>
            <th>Edit</th>
            <th>Delete</th>
            
          </tr>
        </thead>
        <tbody>
          {books.map((item) => (
            <tr key={item.id}>
              <td>{item.bname}</td>
              <td>{item.sname}</td>
              <td>{item.takendate}</td>
              <td>{item.returndate}</td>
              <td><img style={{width:"100px",height:"100px"}}src={item.img} alt="" /></td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
              </td>
              <td>
                <Button
                  onClick={() => handleDelete(item.id)}
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
             
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="row">
        <div className="col">
        <Link className="d-grid gap-2" style={{ "textDecoration": "none" }} to="/create">
        <Button variant="success" size="lg">Create Record</Button>
      </Link>
        </div>
        <div className="col" ><select onChange={(e) => handleSort(e.target.value)}>
            <option value="bname">Book Name</option>
            <option value="sname">Student Name</option>
          </select></div>
      </div>
    
      
      
      
      

      {editingBook && <Edit book={editingBook} onUpdate={handleUpdate} />}
    </div>
  );
}

export default Home;
