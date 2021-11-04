import React from "react";
import {Button, Form} from "react-bootstrap";

const SubmitComment : React.FC = () => {
    return(
        //start of form to create a comment
        <Form> 
            <Form.Group  controlId = "commentForm">   
                <Form.Control type = "text" placeholder="Add a comment"/>
                <br />
                <Button> Cancel </Button> <Button> Comment </Button> 
            </Form.Group>
        </Form>
     );
}

export default SubmitComment;