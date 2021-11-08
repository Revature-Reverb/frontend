import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Logo from '../assets/images/reverb_logo2.png'
import RevatureLogo from '../assets/images/rev-logo.png'

const Landing = ()=> {

    const toReturn = <>Landing Page</>

    return(
        <>
            <Container fluid="md" className="">
                <img
                    alt="Reverb Logo"
                    src={Logo}
                    width="540"
                    height="210"
                    className="d-inline-block align-top"
                />
                <br/>
                by
                <img 
                alt="Revature Logo"
                src={RevatureLogo}
                width="150"
                height="47"
                />
                <Row className="justify-content-md-center">
                    <Col xs="6">
                        <Card id="landingCard">
                            <Card.Text>
                            Reverb is a new social media for users that allow you to collaborate and communicate with other users.
                            Users can customize their “Stage” user profiles and listen in to other users’ posts from around the world.
                            If someone’s post really reverberates with a user, they can “ReverB” it or just give it a passing vibe check.
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Landing
