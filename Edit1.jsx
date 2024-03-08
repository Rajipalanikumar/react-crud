import React, { useEffect, useState } from "react";

const Edit = ({ book, onUpdate }) => {
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
        <label>
          Book Name:
          <input type="text" name="bname" value={editedBook.bname} onChange={handleChange} />
        </label>
        <label>
          Student Name:
          <input type="text" name="sname" value={editedBook.sname} onChange={handleChange} />
        </label>
        <button type="submit">Update</button>
      </form>
    );
  };
  export default Edit;

