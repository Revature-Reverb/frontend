import React, { useEffect } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { getProfileAsync, selectProfile } from "../slices/profileSlice";


export default function ProfileInformation() {
    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getProfileAsync(profile));
      }, [dispatch, profile]);

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