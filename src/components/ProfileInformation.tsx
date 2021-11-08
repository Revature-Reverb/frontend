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
        <Card style={{ width: '35rem', border: '2px solid gray' }}>
            <Stack direction={"horizontal"} gap={1}>
                <Card.Img src={profile.profile_img} style={{ border: '2px solid black',borderRadius:"50%", height:'96px', width:'50%'}}/>
                <Card.Img src={profile.header_img} style={{ border: '2px solid blue', height:'96px'}}/>
            </Stack>
            <Card.Body>
                <Card.Title style={{ textAlign:'center' }}>Name: {profile.first_name} {profile.last_name}</Card.Title>
                <Card.Text style={{ textAlign:'center' }}>Birthday: {profile.birthday}</Card.Text>
                <Card.Text style={{ textAlign:'center' }}>Hobbies: {profile.hobby}</Card.Text>
                <Card.Text style={{ textAlign:'center' }}>Location: {profile.location}</Card.Text>
                <Card.Text style={{ backgroundColor: 'skyblue'}}>
                {profile.about_me}
                </Card.Text>
                {showEditButton ? <Button variant="primary" onClick={goToEditProfile}>Edit Profile</Button> : <></>}
            </Card.Body>
        </Card>
        </Grid>) : (<Image src = {"https://app.revature.com/assets/images/ajax-loader-logo.0cd555cc.gif"} 
        style={{height:'192px', width: '300px'}} fluid/>)
    )
}