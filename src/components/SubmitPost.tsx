import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import { postPostAsync } from "../slices/postSlice";

function SubmitPost(props:any){

    const dispatch = useDispatch();

    const initialPost = {
        id: 0,
        title: "",
        postText: "",
        imageURL: "",
        date: "",
        profile: {
            id: 0,
            first_name: "",
            last_name: "",
            birthday: "",
            hobby: "",
            location: "",
            profile_img: "",
            header_img: "",
            about_me: ""
        },
        comments: []
    }

    const [post, setPost] = useState(initialPost);

    const dispatchPost = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
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
                <Form>
                    {/* Picture Input */}
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Col sm={11}>
                            <Form.Control
                                placeholder="image URL"
                                id="image"
                                onChange={(event)=> setPost({...post, imageURL: event.target.value})} />
                        </Col>
                    </Form.Group>

                    {/* Title Input */}
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Col sm={11}>
                            <Form.Control
                                placeholder="Post Title"
                                style={{height: "25px"}}
                                id="link"
                                onChange={(event)=> setPost({...post, title: event.target.value})}
                            />
                        </Col>
                    </Form.Group>

                    {/* Text Input */}
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Col sm={12}>
                            <Form.Control
                                as="textarea"
                                placeholder="Post"
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