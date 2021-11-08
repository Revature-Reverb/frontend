import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

export default function Register() {

  // Registering user into backend database
  const registerUser = (token: string) => {

    const url = 'http://localhost:8080/api/user/register';
    const header = {
      'Authorization': token,
      'Content-Type': 'application/json'
    };
    axios.post(url, '', { headers: header, withCredentials: true })
      .then(response => console.log("RESPONSE", response))
      .catch(err => console.log(err));
  }

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // Registering account to firebase, currently only checking if email input is in email format and password is longer than 6 characters.
  function registerAccount(event: any) {
    event.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      // Creating a user within firebase, a user object is returned which contains its token
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then(async (userCredential) => {
          const user = userCredential.user;
          // Call back end to register user
          const token = await userCredential.user.getIdToken(true);
          registerUser(token);

          swal("Success!", "Registration complete, please log in!", "success");
        })
        .catch((error) => {
          const errorCode = error.code.slice(5);
          const errorMessage = error.message;
          swal("Uh oh!", errorCode, "error")
        });
    }
  }

  return (
    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="loginRow">
        <Col>
          <h2>Register</h2>
          <div id="loginDiv" className="d-flex">
            <Card id="loginCard">
              <Card.Body>
                <Form id="inputLogin">
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Button className="w-100 mt-2" type="submit" onClick={registerAccount}>Sign Up</Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
