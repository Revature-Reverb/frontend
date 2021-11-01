import React, { useEffect } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import defaultImage from '../blankUserIcon.png';
import Logo from '../reverb_logo2.png';
import axios from 'axios';

let userName = 'Craig';
let profileBody = 'This is just a placeholder for whatever is to come from the profile body'
let imageSource = false;

export default function ProfileInformation() {
    const history = useHistory();

    useEffect(() => {
        getProfileInformation();
      });

    const goToEditProfile = () => {
        history.push("/editProfile");
    }
    function getProfileInformation() {
        /*
        let userId = 1
        // ^^^ Needs to be real id or something?
        let axiosUrl = `http://localhost:8080/api/profile/${userId}`
        axios
            .get(axiosUrl)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log({err});
                alert(err.response);
            });
        */
       console.log("axios call is commented in the code");
    }
    return(
        <Card style={{ border: '2px solid gray' }}>
            <Stack direction={"horizontal"} gap={1}>
                <Card.Img src={imageSource ? 'refactor for image' : defaultImage } style={{ border: '2px solid black', height:'96px', width:'50%'}}/>
                <Card.Img src={Logo} style={{ border: '2px solid blue', height:'96px'}}/>
            </Stack>
            <Card.Body>
                <Card.Title style={{ textAlign:'center' }}>{userName}!</Card.Title>
                <Card.Text style={{ backgroundColor: 'skyblue'}}>
                {profileBody}
                </Card.Text>
                <Button variant="primary" onClick={goToEditProfile}>EditProfile</Button>
            </Card.Body>
        </Card>
    )
}