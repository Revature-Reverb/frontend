import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {Button, Card, Col, Form, Modal, ModalProps, Row} from "react-bootstrap";
import { postPostAsync } from "../slices/postSlice";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";

function SubmitPost(props:any){

    const dispatch = useDispatch();

    let initialPost = {
        title: "",
        postText: "",
        imageURL: "https://testimageurl.com",
        profile: {
            id: 0,
            first_name: "",
            last_name: "",
            profile_img: "",
            header_img: "",
            about_me: ""
        },
        comments: []
    }

    const [post, setPost] = useState(initialPost);

    const dispatchPost = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // dispatch
        dispatch(postPostAsync(post));
    };

    function closeSubmit(event: React.MouseEvent<HTMLButtonElement>){
        dispatchPost(event);
        props.onHide();
    }

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            id="createPostModal"
            >
            <Modal.Header closeButton>
                <Modal.Title>
                    New Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1>New Post</h1>
                <Form>
                    {/* Picture Input */}
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={1}>
                            Photo
                        </Form.Label>
                        <Col sm={11}>
                            <Form.Control 
                                placeholder="URL"
                                id="image"
                                onChange={(event)=> setPost({...post, imageURL: "https://testimageurl.com/"})} />
                        </Col>
                    </Form.Group>

                    {/* Title Input */}
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm={1}>Title</Form.Label>
                        <Col sm={11}>
                            <Form.Control
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
                                onChange={(event)=> setPost({...post, postText: event.target.value})}
                            />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {/* Submit Button */}
                <Button type="button" onClick={closeSubmit}>Post to Reverb</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SubmitPost;