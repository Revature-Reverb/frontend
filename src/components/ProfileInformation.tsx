import React, { useEffect } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { Grid } from "@material-ui/core";

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
        <Grid container direction="column" alignItems="center" justify="center">
        <Card style={{ width: '35rem', border: '2px solid gray' }}>
            <Stack direction={"horizontal"} gap={1}>
                <Card.Img style={{ border: '2px solid black', borderRadius:'50%', height:'100%', width:'40%', backgroundColor: 'coral'}}/>
                <Card.Img style={{ border: '2px solid blue', height:'96px', backgroundColor: 'purple'}}/>
            </Stack>
            <Card.Body>
                <Card.Title style={{ textAlign:'center' }}>Hello {userName}!</Card.Title>
                <Card.Text style={{ backgroundColor: 'skyblue'}}>
                {profileBody}
                </Card.Text>
                <Button variant="primary" onClick={goToEditProfile}>Edit Profile</Button>
            </Card.Body>
        </Card>
        </Grid>
    )
}