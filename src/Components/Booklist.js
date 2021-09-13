import React from "react";
import _ from "lodash";
import Book from "./Book";
import PropTypes from "prop-types";
const BooksList = ({ books, setbooks }) => {
  const handleRemoveBook = (id) => {
    setbooks(books.filter((book) => book.id !== id));
  };
console.log(books)
  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </React.Fragment>
  );
};

BooksList.propType = {
  books: PropTypes.array,
  setbooks: PropTypes.func,
};
export default BooksList;
