import React from "react";
import { useHistory } from "react-router-dom";
import { Button} from "react-bootstrap";


export default function TestPage() {

    
    const history = useHistory();

    const goToProfile = () => {
        history.push("/ProfilePage")
    }


    return(
        <>
        <span>Need Default Page</span>
        <Button onClick={goToProfile}>To Profile</Button>
        </>
    )
}