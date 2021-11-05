import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useAppDispatch } from '../app/hooks'
import { Link } from 'react-router-dom'
import { setTokenAsync } from '../slices/authSlice'
import { reverbClientWithAuth } from '../remote/reverb-api/reverbClient'

export default function Login() {

  const dispatch = useAppDispatch();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // Verifying login credentials through firebase, alerting with error message coming from Firebase
  async function loginAccount(event: any) {
    event.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {

      let email: string = emailRef.current.value;
      let password: string = passwordRef.current.value;
      
      // Token is set to store on login
      await dispatch(setTokenAsync({email, password}));
      
      // Call to backend on successful log in that ensures user is already stored in our database, if it is not then the user is added to the database.
      reverbClientWithAuth.post("/api/user/login");

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