import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth"
import { Container } from 'react-bootstrap'
import { store } from '../app/store'
import { useAppDispatch } from '../app/hooks'
import { login } from '../slices/authSlice'
import { Link } from 'react-router-dom'

export default function Login() {
  
  const dispatch = useAppDispatch();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // Verifying login credentials through firebase, alerting with error message coming from Firebase
  function loginAccount(event: any) {
    event.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          dispatch(login());

          console.log("Login user credentials: ", user);
          console.log("Access Token: ", user.getIdToken());
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          console.log("Login user error msg: ", errorMessage);
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
            <h2 className="text-center mb-4">Login</h2>
            <Form>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button className="w-100 mt-2" type="submit" onClick={loginAccount}>Login</Button>
              {/* <Button className="w-100 mt-2" type="submit" onClick={checkAuth}>Login</Button> */}
            </Form>
            <div className="text-center">
              <Link to="/register">Register a new account</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}