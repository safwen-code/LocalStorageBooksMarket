import React, { useContext } from "react";
import BooksContext from "../Context/BooksContext";
import _ from "lodash";
import Book from "./Book";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";

const BooksList = () => {
  const { books, setbooks } = useContext(BooksContext);
  const handleRemoveBook = (id) => {
    setbooks(books.filter((book) => book.id !== id));
  };
  console.log(books);
  return (
    <Container className="mt-5 mb-4">
      <Row>
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </Row>
    </Container>
  );
};

BooksList.propType = {
  books: PropTypes.array,
  setbooks: PropTypes.func,
};
export default BooksList;
