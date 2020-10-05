import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import PageWithLocalState from './pages/PageWithLocalState/PageWithLocalState.js';
import PageWithReduxState from './pages/PageWithReduxState/PageWithReduxState.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container className="App">
      <Router>
        <div>
          <Nav variant="pills" defaultActiveKey="/">
            <Nav.Item >
              <Nav.Link
                href="/"
                as={Link}
                to="/">
                Without Redux
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                as={Link}
                to="/redux">
                With Redux
              </Nav.Link>
            </Nav.Item>
          </Nav>    
          <Switch>
            <Route path="/redux">
              <Provider store={store}>
                <PageWithReduxState />
              </Provider>
            </Route>
            <Route path="/">
              <PageWithLocalState />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}
export default App;
