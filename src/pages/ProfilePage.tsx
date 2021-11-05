import React from "react";
import { Row } from "react-bootstrap";
import ProfileInformation from "../components/ProfileInformation";
import ProfilePosts from "../components/ProfilePosts";

export default function ProfilePage(props: any) {

    return(
        <>
        <Row>
            <ProfileInformation beep={props.beep}/>
        </Row>
        {/* <Row style={{marginTop:'2rem'}}>
            <ProfilePosts />
        </Row> */}
        </>
    )
}