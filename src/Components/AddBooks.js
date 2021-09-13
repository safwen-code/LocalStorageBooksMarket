import React, { useContext } from "react";
import BookForm from "./BookForm";
import { Container } from "react-bootstrap";
import BooksContext from "../Context/BooksContext";
const AddBooks = ({ history }) => {
  const { books, setbooks } = useContext(BooksContext);
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
