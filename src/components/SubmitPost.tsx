import React from "react";
import {Button, Card, Form} from "react-bootstrap";

const SubmitPost : React.FC = () => {
    return(
        <Card>
            <Card.Header>
                <h1>New Post</h1>
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
                <Form.Control
                    as="textarea"
                    placeholder="What is on your mind today?"
                />
                <Button type="submit">Post</Button>
            </Card.Body>
        </Card>
    );
}

export default SubmitPost;