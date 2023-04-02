import "./edit.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

// Component for editing a book
// The book to be edited is passed as a prop
const Edit = ({ book }) => {
  //State to hold the form fields
  const [fields, setFields] = useState({
    title: "",
    author: "",
    description: "",
  });
  
  // Function to handle deletion of books
  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:3001/api/books/${book._id}`);
      //Refreshes the page to the current location
      window.location.reload();
    } catch (err) {
      console.log(err);
      toast.error(err.message)
    }
  };

  // Function to create a new book using the fields data
  const handleCreate = async (event) => {
    event.preventDefault();
    try {
      const newBook = {
        title: fields.title,
        author: fields.author,
        description: fields.description,
      };
      await axios.post(
        `http://localhost:3001/api/books/book`, 
        newBook
      );
      //Refreshes the page to the current location
      window.location.reload();
    } catch (err) {
      console.log(err);
      toast.error(err.message)
    }
  };
  // Function to update an existing book using the fields data
  const handleSave = async (event) => {
    event.preventDefault();
    try {
      const updatedBook = {
        title: fields.title,
        author: fields.author,
        description: fields.description,
      };
      await axios.put(
        `http://localhost:3001/api/books/${book._id}`,
        updatedBook
      );
      window.location.reload();
    } catch (err) {
      toast.error(err.message)
    }
  };

  //Updates the field state by creating a new object that contains all the previous values of fields using spread (...prevFields)
  //The name property is used to determine which fields value attribute to update
  //Whenever the input fields value changes the handleInput updates the value of fields state
  const handleInput = (event) => {
    const { name, value } = event.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  //Used for updating the fields state with the clicked (active) books data to the form
  useEffect(() => {
    setFields({
      title: book.title,
      author: book.author,
      description: book.description,
    });
  }, [book]);

  return (
    <div>
      <Toaster />
      <Form className="form">
        <Form.Group className="formField">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="title"
            name="title"
            value={fields.title}
            onChange={handleInput}
          />
          <Form.Text className="subtext">
            Edit or insert the title of the book!
          </Form.Text>
        </Form.Group>

        <Form.Group className="formField">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="author"
            name="author"
            value={fields.author}
            onChange={handleInput}
          />
          <Form.Text className="subtext">
            Edit or insert the author of the book!
          </Form.Text>
        </Form.Group>

        <Form.Group className="formField">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            placeholder="description"
            name="description"
            value={fields.description}
            onChange={handleInput}
          />
          <Form.Text className="subtext">
            Edit or insert the description of the book!
          </Form.Text>
        </Form.Group>

        <Button variant="primary" className="createButton" onClick={handleCreate} type="submit">
          Save new
        </Button>
        <Button variant="primary" className="button" onClick={handleSave} type="submit">
          Save
        </Button>
        <Button variant="primary" className="button" onClick={handleDelete} type="submit">
          Delete
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
