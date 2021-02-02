import logo from "./logo.svg";
import "./App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import Home from "./Home";
import About from "./About";
import Users from "./Users";

function App() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/users">Users</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
        </Nav>
       
      </Navbar>

      <Switch>
        <Route path="/about" component={About}></Route>
        <Route path="/users" component={Users}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
