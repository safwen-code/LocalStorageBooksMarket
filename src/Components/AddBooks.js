import React from "react";
import BookForm from "./BookForm";
import { Container } from "react-bootstrap";
const AddBooks = () => {
  const handleOnSubmit = (book) => {
    console.log(book);
  };
  return (
    <Container>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </Container>
  );
};

export default AddBooks;
