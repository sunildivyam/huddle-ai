import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { PostsPage, PostPage, UserProfilePage, AppHeader } from '../';
import { Container, Row, Col } from 'react-bootstrap';

export function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs><AppHeader/></Col>
        </Row>
        <Row>
          <Col xs>
            <Switch>
              <Route exact path="/posts">
                <PostsPage />
              </Route>
              <Route exact path="/posts/:id">
                <PostPage />
              </Route>
              <Route path="/users/:id">
                <UserProfilePage />
              </Route>
              <Route path="*">
                <Redirect to="/posts" />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}
