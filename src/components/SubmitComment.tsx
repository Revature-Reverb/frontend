import React, {useEffect, useState} from "react";
import { useDispatch } from 'react-redux'
import {Button, Form } from "react-bootstrap";
import { commmentCommentAysc } from "../slices/commentSlice";

const SubmitComment : React.FC = () => {
    const [comment, setComment] = useState({});

    let initialState: PostState  = {
        text: ""
    }
    const dispatch = new useDispatch();

    function dispatchComment = (event: ReactFormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(commmentCommentAysc(comment));

        return comment

    }
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