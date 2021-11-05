import React from 'react'
import { Container, Card } from 'react-bootstrap'
import Logo from '../assets/images/rev-logo.png'
const Landing = ()=> {

    const toReturn = <>Landing Page</>

    return(
        <>
            <div>
            <Container fluid="md">
                <img
                    alt=""
                    src={Logo}
                    width="180"
                    height="70"
                    className="d-inline-block align-top"
                />
                <br/>
                <br/>
                <Card style={{width:"600px",height:"250px",borderWidth:"10px",borderRadius:"10px", borderColor:"#B9B9BA",backgroundColor:"#B9B9BA"}}>
                    <Card.Title>Reverb</Card.Title>
                <Card.Text>
                    Reverb is a new social media for users that allow you to collaborate and communicate with other users.
                    Users can customize their “Stage” user profiles and listen in to other users’ posts from around the world.
                    If someone’s post really reverberates with a user, they can “ReverB” it or just give it a passing vibe check.
                </Card.Text>
                </Card>
                </Container>
            </div>
        </>
    )
}

export default Landing
