import React, { useEffect, useState } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { getProfileAsync, getProfileByIdAsync, selectProfile } from "../slices/profileSlice";
import { checkProfileOwnership } from "../remote/reverb-api/profile.api";
import Image from 'react-bootstrap/Image'


export default function ProfileInformation(props: any) {
    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();
    const history = useHistory();
    const params: {id: string} = useParams();
    const [showEditButton, setShowEditButton] = useState(false);
    const [doneLoading, setDoneLoading] = useState(false);
    useEffect(() => {
        setDoneLoading(false);
        if(Object.keys(params).length == 0) {
            dispatch(getProfileAsync(profile));
            setShowEditButton(true);
            setTimeout(() => setDoneLoading(true), 100);
        } else {
            dispatch(getProfileByIdAsync(params.id));
            checkProfileOwnership(params.id).then((owns) => {
                setShowEditButton(owns);
                setTimeout(() => setDoneLoading(true), 100);
            })
        }
      }, [props.beep]); // beep beep :^)

    const goToEditProfile = () => {
        history.push("/editProfile");
    }
    return(
        doneLoading ? (
        <Grid container direction="column" alignItems="center" justify="center">
        <Card id="ProfilePage">
            <Stack direction={"horizontal"} gap={1}>
                <Card.Img src={profile.profile_img} id="ProfileImg" />
                <Card.Img src={profile.header_img} id="HeaderImg" />
            </Stack>
            <br />
            <Card.Body>
                <Card.Title id = "ProfileName">{profile.first_name} {profile.last_name}</Card.Title>
                <br /><br />
                <Card.Text id="AboutMe">
                    <h5>About Me</h5>
                    {profile.about_me}
                </Card.Text>
                <br />
                <Card.Text id="AboutMe">
                    <h5>Fast Facts</h5>
                    Birthday: {profile.birthday}
                    <br />
                    Hobbies: {profile.hobby}
                    <br />
                    Location: {profile.location}
                </Card.Text>
            </Card.Body>
        </Card>
        {showEditButton ? <Button id="EditProfileButton" onClick={goToEditProfile}>Edit Profile</Button> : <></>}
        </Grid>) : (<Image src = {"https://app.revature.com/assets/images/ajax-loader-logo.0cd555cc.gif"} 
        style={{height:'192px', width: '300px'}} fluid/>)
    )
}