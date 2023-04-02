import useFetch from "../../hooks/useFetch";
import "./books.css";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Edit from "../edit/Edit";

const Books = () => {
  //useFetch is a custom hook that fetches all the books from the backend. Later we use the data.map to display each book.
  const { data, loading } = useFetch("http://localhost:3001/api/books/");

  //selectedBook state that is used to pass down the book property to the Edit component. 
  //We can use it to display a specific books data and getting a specific books _id for updating and deleting.
  const [selectedBook, setSelectedBook] = useState("");

  //Function that sets the useStates. 'item' is used to grab the data in the book object.
  const handleClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="main">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <Card key={item._id} className="card">
              <Card.Body onClick={() => handleClick(item)}>
                <div className="item" key={item._id}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {item.author}
                  </Card.Subtitle>
                </div>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
      {<Edit book={selectedBook} />}
    </div>
  );
};

export default Books;
