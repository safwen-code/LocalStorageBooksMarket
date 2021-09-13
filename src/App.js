import "./App.css";
import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbars from "./Components/Navbars";

import AddBooks from "./Components/AddBooks";
import useLocalStorages from "./Hooks/useLocalStorages";
import Edite from "./Components/Edite";
import BooksList from "./Components/BookList";
const App = () => {
  const [books, setbooks] = useLocalStorages("books", []);
  return (
    <Router>
      <Navbars />
      <Switch>
        <Container>
          <Route
            render={(props) => (
              <BooksList {...props} books={books} setbooks={setbooks}s />
            )}
            path="/"
            exact={true}
          />
          <Route
            path="/addDoc"
            render={(props) => (
              <AddBooks {...props} books={books} setbooks={setbooks} />
            )}
          />
          <Route
            path="/Edite/:id"
            render={(props) => (
              <Edite {...props} books={books} setbooks={setbooks} />
            )}
          />
        </Container>
      </Switch>
    </Router>
  );
};

export default App;
