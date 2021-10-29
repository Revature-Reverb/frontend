import React, { useEffect } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from 'axios';

let userName = 'Craig';
let profileBody = 'This is just a placeholder for whatever is to come from the profile body'

export default function ProfileInformation() {
    const history = useHistory();

    useEffect(() => {
        getProfileInformation();
      });

    const goToEditProfile = () => {
        history.push("/editProfile");
    }
    function getProfileInformation() {
        console.log('axios call needed here');
    }
    return(
        <Card style={{ width: '25rem', border: '2px solid gray' }}>
            <Stack direction={"horizontal"} gap={1}>
                <Card.Img style={{ border: '2px solid black', height:'96px', width:'50%', backgroundColor: 'coral'}}/>
                <Card.Img style={{ border: '2px solid blue', height:'96px', backgroundColor: 'purple'}}/>
            </Stack>
            <Card.Body>
                <Card.Title style={{ textAlign:'center' }}>Hello {userName}!</Card.Title>
                <Card.Text style={{ backgroundColor: 'skyblue'}}>
                {profileBody}
                </Card.Text>
                <Button variant="primary" onClick={goToEditProfile}>EditProfile</Button>
            </Card.Body>
        </Card>
    )
}