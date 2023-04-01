import "./edit.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";

const Edit = ({ book }) => {
  const [fields, setFields] = useState({
    title: "",
    author: "",
    description: "",
  });

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:3001/api/books/${book._id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

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
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

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
      console.log(err);
    }
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFields({
      title: book.title,
      author: book.author,
      description: book.description,
    });
  }, [book]);

  return (
    <div className="form">
      <Form className="form">
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="title"
            name="title"
            value={fields.title}
            onChange={handleInput}
          />
          <Form.Text className="text-muted">
            Edit or insert the title of the book!
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="author"
            name="author"
            value={fields.author}
            onChange={handleInput}
          />
          <Form.Text className="text-muted">
            Edit or insert the author of the book!
          </Form.Text>
        </Form.Group>

        <Form.Group>
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
          <Form.Text className="text-muted">
            Edit or insert the description of the book!
          </Form.Text>
        </Form.Group>

        <Button variant="primary" onClick={handleCreate} type="submit">
          Save new
        </Button>
        <Button variant="primary" onClick={handleSave} type="submit">
          Save
        </Button>
        <Button variant="primary" onClick={handleDelete} type="submit">
          Delete
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
