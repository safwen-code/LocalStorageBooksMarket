import React, { Fragment } from "react";
import _ from "lodash";
import Book from "./Book";
import { Container, Row } from "react-bootstrap";
const BookList = ({ books, setbooks }) => {
  const handleRemoveBook = (id) => {
    setbooks(books.filter((book) => book.id !== id));
  };

  return (
    <Fragment>
      <Container className="mt-5">
        <Row>
          {!_.isEmpty(books) ? (
            books.map((book) => (
              
                <Book
                  key={book.id}
                  {...book}
                  handleRemoveBook={handleRemoveBook}
                />
              
            ))
          ) : (
            <p className="message">
              No books available. Please add some books.
            </p>
          )}
        </Row>
      </Container>
    </Fragment>
  );
};

export default BookList;
