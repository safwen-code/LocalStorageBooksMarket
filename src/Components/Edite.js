import React from "react";
import { Container } from "react-bootstrap";
import BookForm from "./BookForm";
import { useParams } from "react-router-dom";

const Edite = ({ books, setbooks, history }) => {
  const { id } = useParams();
  //ind out the particular book match to id 
  const bookToEdite = books.find((book) => book.id === id);
  const handleOnSubmit = (book) => {
    const filtredBook = books.filter((book) => book.id !== id);
    setbooks([book, ...filtredBook]);
    history.push("/");
    console.log("edite");
  };

  return (
    <Container>
      <BookForm book={bookToEdite} handleOnSubmit={handleOnSubmit} />
    </Container>
  );
};

export default Edite;
