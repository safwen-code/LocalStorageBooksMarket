import React from "react";
import BookForm from "./BookForm";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
const AddBooks = ({history, books, setbooks }) => {
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
AddBooks.propTypes = {
  books: PropTypes.array,
  setbooks: PropTypes.func,
};

export default AddBooks;
