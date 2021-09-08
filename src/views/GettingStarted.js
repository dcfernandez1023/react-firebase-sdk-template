import React, { useState, useEffect } from 'react';

import {
  Container,
  Row,
  Col,
  ListGroup
} from 'react-bootstrap';

const GettingStarted = () => {
  return (
    <Container>
      <br/>
      <br/>
      <Row>
        <Col>
          <h1>
            <img style={{width: "50px", height: "50px"}} src="https://logo.clearbit.com/react.com"/> React + <img style={{width: "50px", height: "50px"}} src="https://logo.clearbit.com/firebase.com"/> Firebase
            Web App Template
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{width: "60%"}}>
             This template is set up for reading/writing to Cloud Firestore, deploying with Firebase Hosting,
             and using Google's sign-in window. All you have to do is follow the instructions below.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item> Replace {"<INSERT_YOUR_PROJECT_ID>"} in .firebaserc with your Firebase project id </ListGroup.Item>
            <ListGroup.Item> Get your firebaseConfig from your project's settings and replace it in /src/firebase/firebaseApp.js </ListGroup.Item>
            <ListGroup.Item> Run npm install -g firebase-tools (if you don't already have firebase-tools) </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default GettingStarted;
