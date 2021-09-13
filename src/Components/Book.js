import React from "react";
import { Button, Card, Col } from "react-bootstrap";

import { useHistory } from "react-router-dom";

const Book = ({
  id,
  bookname,
  author,
  price,
  quantity,
  date,
  handleRemoveBook,
}) => {
  // call history
  const history = useHistory();
  return (
    <Col className="mb-3">
      <Card style={{ width: "18rem" }} className="book">
        <Card.Body>
          <Card.Title className="book-title">{bookname}</Card.Title>
          <div className="book-details">
            <div>Author: {author}</div>
            <div>Quantity: {quantity} </div>
            <div>Price: {price} </div>
            <div>Date: {new Date(date).toDateString()}</div>
          </div>
          <Button
            variant="primary"
            onClick={() => history.push(`/Edite/${id}`)}
          >
            Edit
          </Button>{" "}
          <Button variant="danger" onClick={() => handleRemoveBook(id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Book;
