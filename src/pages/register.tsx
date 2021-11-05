import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {

  // Registering user into backend database
  const registerUser = (token: string) => {

    const url = 'http://localhost:8080/api/user/register';
    const header = {
      'Authorization': token,
      'Content-Type': 'application/json'
    };
    axios.post(url, '',  {headers: header, withCredentials: true}  )
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

          alert("Registered user: " + user);
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
          // ..
        });
    }
  }

  return (
    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form>
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
        <div className="w-100, text-center mt-2">
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </Container>
  )
}
