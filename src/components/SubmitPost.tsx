import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import { postPostAsync } from "../slices/postSlice";

const SubmitPost : React.FC = () => {

    const dispatch = useDispatch();

    let initialPost = {
        title: "",
        text: "",
        imageURL: "https://testimageurl.com"
    }

    const [post, setPost] = useState(initialPost);

    const dispatchPost = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // dispatch
        dispatch(postPostAsync(post));
    };

    return(
        <Card>
            <Card.Header>
                <h1>New Post</h1>
            </Card.Header>
            <Card.Body>

            <Form onSubmit={dispatchPost}>
                {/* Picture Input */}
                <Form.Group as={Row} className="mb-3" controlId="">
                    <Form.Label column sm={1}>
                        Photo
                    </Form.Label>
                    <Col sm={11}>
                        <Form.Control type="file"
                         onChange={(event)=> setPost({...post, imageURL: "https://testimageurl.com/"})} />
                    </Col>
                </Form.Group>

                {/* Title Input */}
                <Form.Group as={Row} className="mb-3" controlId="">
                    <Form.Label column sm={1}>Link</Form.Label>
                    <Col sm={11}>
                        <Form.Control
                            as="textarea"
                            placeholder=""
                            style={{height: "25px"}}
                            id="link"
                            onChange={(event)=> setPost({...post, title: event.target.value})}
                        />
                    </Col>
                </Form.Group>

                {/* Text Input */}
                <Form.Group as={Row} className="mb-3" controlId="">
                    <Form.Label column sm={2}>What is on your mind?</Form.Label>
                    <Col sm={12}>
                        <Form.Control
                            as="textarea"
                            placeholder=""
                            id="text"   
                            style={{height: "100px"}}
                            onChange={(event)=> setPost({...post, text: event.target.value})}
                        />
                    </Col>
                </Form.Group>

                {/* Submit Button */}
                <Button type="submit">Post to ReverB</Button>
            </Form>
            </Card.Body>
        </Card>
    );
}

export default SubmitPost;