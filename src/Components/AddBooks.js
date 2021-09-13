import React from "react";
import BookForm from "./BookForm";
import { Container } from "react-bootstrap";

const AddBooks = ({ history, books, setbooks }) => {
  const handleOnSubmit = (book) => {
    console.log(book);
    setbooks([book, ...books]);
    history.push("/");
  };
  return (
    <Container>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </Container>
  );
};

export default AddBooks;
