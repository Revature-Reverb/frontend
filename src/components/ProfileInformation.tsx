import React, { useEffect } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import defaultImage from '../assets/images/blankUserIcon.png';
import Logo from '../assets/images/reverb_logo2.png';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import { getUserAsync } from '../slices/userSlice';
import axios from 'axios';
import {User} from '../models/userModel';

let userName = 'Craig';
let profileBody = 'This is just a placeholder for whatever is to come from the profile body'
let imageSource = false;

export default function ProfileInformation() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const history = useHistory();
    let dud: User= {
        userid: "0",
        email: "fake@email.com",
        profile: {
            id: 0,
            firstname: "my first name",
            lastname: "my last name",
            about_me:"about me"
        }
    };

    useEffect(() => {
        // dispatch(getUserAsync(dud));
      });

    const goToEditProfile = () => {
        history.push("/editProfile");
    }
    return(
        <Card style={{ border: '2px solid gray', width:'50%' }}>
            <Stack direction={"horizontal"} gap={1}>
                <Card.Img src={imageSource ? 'refactor for image' : defaultImage } style={{ border: '2px solid black', height:'96px', width:'50%'}}/>
                <Card.Img src={Logo} style={{ border: '2px solid blue', height:'96px'}}/>
            </Stack>
            <Card.Body>
                <Card.Title style={{ textAlign:'center' }}>{dud.profile.firstname}!</Card.Title>
                <Card.Text style={{ backgroundColor: 'skyblue'}}>
                {profileBody}
                </Card.Text>
                <Button variant="primary" onClick={goToEditProfile}>EditProfile</Button>
            </Card.Body>
        </Card>
    )
}