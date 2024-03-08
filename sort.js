
  const [sortOption, setSortOption] = useState(null);


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





<div className="col" ><select onChange={(e) => handleSort(e.target.value)}>
            <option value="bname">Book Name</option>
            <option value="sname">Student Name</option>
          </select></div>








