import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

import users from "./users";

const Example = () => {

  const [books, setBooks] = useState(users);
  const [editingBook, setEditingBook] = useState(null);
  const [sortOption, setSortOption] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);



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



  const handleAddBook = (newBookRecord) => {
    // Update the state with the new book record
    setBooks((prevBooks) => [...prevBooks, { id: prevBooks.length + 1, ...newBookRecord }]);
    console.log(books)
  };

  const handleToggleForm = () => {
    // Toggle the visibility of the form
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };


  const handleEdit = (bookId) => {
    const bookToEdit = books.find(book => book.id === bookId);

    setEditingBook(bookToEdit);
  };

  const handleUpdate = (updatedBook) => {
    setBooks(prevBooks => prevBooks.map(book => (book.id === updatedBook.id ? updatedBook : book)));
    
    setEditingBook(null);
  };

  const handleDelete = (bookId) => {
    const updatedBooks = books.filter(book => book.id !== bookId);
    
    setBooks(updatedBooks);
  };



  return (
    <div>
      <h1>Book List</h1>
      Sort by:
          <select onChange={(e) => handleSort(e.target.value)}>
            <option value="bookName">Book Name</option>
            <option value="studentName">Student Name</option>
          </select>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {/* {book.bookName} - {book.studentName} */}

            <strong>ID:</strong> {book.id} <br />
            <strong>Book Name:</strong> {book.bookName} <br />
            <strong>Student Name:</strong> {book.studentName} <br />
            <strong>Taken Date:</strong> {book.takenDate ? moment(book.takenDate).format('YYYY-MM-DD HH:mm:ss') : 'Not specified'} <br />
            <strong>Returned Date:</strong> {book.returnedDate ? moment(book.returnedDate).format('YYYY-MM-DD HH:mm:ss') : 'Not specified'} <br />
            <strong>Image:</strong> {book.imagePath ? <img src={book.imagePath} alt={book.bookName} style={{ maxWidth: '100px', maxHeight: '100px' }} /> : 'Not specified'} <br />
            


            <button onClick={() => handleEdit(book.id)}>Edit</button>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {editingBook && (
        <EditBookForm
          book={editingBook}
          onUpdate={handleUpdate}
        />
      )}

<button onClick={handleToggleForm}>Add Book</button>
      {isFormVisible && <AddBookForm onAddBook={handleAddBook} onCancel={handleToggleForm} />}


    </div>
  );
};
















const EditBookForm = ({ book, onUpdate }) => {
  const [editedBook, setEditedBook] = useState(book);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook(prevBook => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdate(editedBook);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Book Name:
        <input
          type="text"
          name="bookName"
          value={editedBook.bookName}
          onChange={handleChange}
        />
      </label>
      <label>
        Student Name:
        <input
          type="text"
          name="studentName"
          value={editedBook.studentName}
          onChange={handleChange}
        />
      </label>
      {/* Add other form fields as needed */}
      <button type="submit">Update</button>
    </form>
    



  );
};










const AddBookForm = ({ onAddBook, onCancel }) => {
    const [newBook, setNewBook] = useState({ bookName: '', studentName: '' });
  
    const handleAddBook = () => {

      const newBookRecord = {
        ...newBook,
        takenDate: '',
        returnedDate: '',
        // imagePath: ''
      };
  
      onAddBook(newBookRecord);
  
      setNewBook({ bookName: '', studentName: '' });
      
    };

    const handleImageChange = (e) => {
        const imagePath = e.target.value;
        console.log(imagePath)
        setNewBook({ ...newBook, imagePath });
      };
    

      const handleDateChange = (date, field) => {
        // Set the selected date and the current system time
        const currentDate = moment().set({ 'hour': new Date().getHours(), 'minute': new Date().getMinutes(), 'second': 0 });
        
        setNewBook((prevBook) => ({
          ...prevBook,
          [field]: date ? moment(date).set({ 'hour': currentDate.hours(), 'minute': currentDate.minutes() }) : null,
        }));
      };
    
  
    return (
      <div>
        <h2>Add New Book</h2>
        <label>
          Book Name:
          <input type="text" value={newBook.bookName} onChange={(e) => setNewBook({ ...newBook, bookName: e.target.value })} />
        </label>
        <label>
          Student Name:
          <input type="text" value={newBook.studentName} onChange={(e) => setNewBook({ ...newBook, studentName: e.target.value })} />
        </label>
        {/* <div>
        <label>Returned Date and Time:</label>
        <DatePicker
          selected={newBook.returnedDate}
          onChange={(date) => handleDateChange(date, 'returnedDate')}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="yyyy-MM-dd HH:mm"
        />
      </div> */}
      <div>
        <label>
          Select Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        {newBook.imagePath && <p>Directory: {newBook.imagePath}</p>}
      </div>

        <button onClick={handleAddBook}>Add Book</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    );
  };





  export default Example
