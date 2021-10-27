import React from "react";
import {Card, FloatingLabel, Form} from "react-bootstrap";

const SubmitPost : React.FC = () => {
    return(
        <Card>
            <Card.Header>
                <h1>Submit Post!</h1>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    What is on your mind?
                </Card.Title>
                <Form.Select>
                    <option value="Text">Text</option>
                    <option value="Photo">Photo</option>
                    <option value="Link">Link</option>
                </Form.Select>
                <FloatingLabel controlId="floatingTextarea2" label="">
                <Form.Control
                    as="textarea"
                    placeholder="What is on your mind today?"
                    style={{ height: '100px', width: '300px' }}
                />
                </FloatingLabel>
            </Card.Body>
        </Card>
    );
}

export default SubmitPost;