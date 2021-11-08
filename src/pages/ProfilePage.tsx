import React from "react";
import { Row } from "react-bootstrap";
import ProfileInformation from "../components/ProfileInformation";

export default function ProfilePage(props: any) {

    return(
        <>
        <Row>
            <ProfileInformation beep={props.beep}/>
        </Row>
        </>
    )
}