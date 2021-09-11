import "./App.css";
import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbars from "./Components/Navbars";

import AddBooks from "./Components/AddBooks";
import Booklist from "./Components/Booklist";
const App = () => {
  return (
    <Router>
      <Navbars />
      <Switch>
        <Container>
          <Route path="/" component={Booklist} exact={true} />
          <Route path="/addDoc" component={AddBooks} />
        </Container>
      </Switch>
    </Router>
  );
};

export default App;
