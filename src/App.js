import "./App.css";
import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbars from "./Components/Navbars";

import AddBooks from "./Components/AddBooks";
import Booklist from "./Components/Booklist";
import useLocalStorage from "./Hooks/useLocalStorage";
const App = () => {
  const [books, setbooks] = useLocalStorage("books", []);
  return (
    <Router>
      <Navbars />
      <Switch>
        <Container>
          <Route
            render={(props) => (
              <Booklist {...props} books={books} setbooks={setbooks} />
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
        </Container>
      </Switch>
    </Router>
  );
};

export default App;
