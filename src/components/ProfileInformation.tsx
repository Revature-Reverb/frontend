import React, { useEffect } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import defaultImage from '../blankUserIcon.png';
import Logo from '../reverb_logo2.png';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import { getUserAsync } from '../slices/userSlice';
import axios from 'axios';
import { Grid } from "@material-ui/core";
import {User} from '../models/userModel';
import { getProfileAsync, selectProfile } from "../slices/profileSlice";
import { Profile } from "../models/profileModel";

let userName = 'Craig';
let profileBody = 'This is just a placeholder for whatever is to come from the profile body'
let imageSource = false;

export default function ProfileInformation() {
    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();
    const history = useHistory();
    // let dud: User= {
    //     userid: "0",
    //     email: "fake@email.com",
    //     profile: {
    //         id: 0,
    //         firstname: "my first name",
    //         lastname: "my last name",
    //         about_me:"about me"
    //     }
    // };

    // let profile: Profile = {
    //     id: 0,
    //     first_name: "My first name",
    //     last_name: "My last name",
    //     profile_img: "https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png",
    //     header_img: "https://static.onecms.io/wp-content/uploads/sites/28/2021/05/06/portand-oregon-PORTLANDTG0521.jpg",
    //     about_me: "I like to eat food in general."
    // }


    useEffect(() => {
        // dispatch(getUserAsync(dud));
        dispatch(getProfileAsync(profile));
      }, []);

    const goToEditProfile = () => {
        history.push("/editProfile");
    }
    return(
        <Grid container direction="column" alignItems="center" justify="center">
        <Card style={{ width: '35rem', border: '2px solid gray' }}>
            <Stack direction={"horizontal"} gap={1}>
                <Card.Img src={profile.profile_img} style={{ border: '2px solid black', height:'96px', width:'50%'}}/>
                <Card.Img src={profile.header_img} style={{ border: '2px solid blue', height:'96px'}}/>
            </Stack>
            <Card.Body>
                <Card.Title style={{ textAlign:'center' }}>{profile.first_name}</Card.Title>
                <Card.Text style={{ backgroundColor: 'skyblue'}}>
                {profile.about_me}
                </Card.Text>
                <Button variant="primary" onClick={goToEditProfile}>Edit Profile</Button>
            </Card.Body>
        </Card>
        </Grid>
    )
}