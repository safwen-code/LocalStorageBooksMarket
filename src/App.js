import "./App.css";
import React from "react";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Navbars from "./Components/Navbars";
import AddBooks from "./Components/AddBooks";
import useLocalStorages from "./Hooks/useLocalStorages";
import Edite from "./Components/Edite";
import BooksList from "./Components/BookList";

import BooksContext from "./Context/BooksContext";

const App = () => {
  const [books, setbooks] = useLocalStorages("books", []);
  return (
    <Router>
      <Navbars />
      <BooksContext.Provider value={{ books, setbooks }}>
        <Switch>
          <Container>
            <Route path="/" exact={true} component={BooksList} />
            <Route path="/addDoc" component={AddBooks} />
            <Route path="/Edite/:id" component={Edite} />
            <Route component={() => <Redirect to="/" />} />
          </Container>
        </Switch>
      </BooksContext.Provider>
    </Router>
  );
};

export default App;
