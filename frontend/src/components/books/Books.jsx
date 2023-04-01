import useFetch from "../../hooks/useFetch";
import "./books.css";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Edit from "../edit/Edit";

const Books = () => {
  //If you changed the servers port in the backend side change it back here. If your backend is running on port 3001 this will work.
  const { data, loading } = useFetch("http://localhost:3001/api/books/");
  const [showForm, setShowForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleClick = (book) => {
    setSelectedBook(book);
    setShowForm(true);
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
      {showForm && <Edit book={selectedBook} />}
    </div>
  );
};

export default Books;
