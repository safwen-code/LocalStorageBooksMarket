import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const BookForm = (props) => {
  const [book, setBook] = useState({
    bookname: props.book ? props.book.bookname : "",
    author: props.book ? props.book.author : "",
    quantity: props.book ? props.book.quantity : "",
    price: props.book ? props.book.price : "",
    date: props.book ? props.book.date : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { bookname, author, price, quantity } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [bookname, author, price, quantity];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        price,
        quantity,
        date: new Date(),
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
    setTimeout(() => setErrorMsg(""), 5000);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <Container className="mt-3 mb-4">
      {errorMsg && (
        <Alert variant="danger" className="mt-3 mb-2">
          {errorMsg}
        </Alert>
      )}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            className="input-control mb-2"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="Enter name of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            className="input-control mb-2"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control mb-2"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            className="input-control mb-2"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit" className="mt-3 d-flex justify-content-center">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default BookForm;
