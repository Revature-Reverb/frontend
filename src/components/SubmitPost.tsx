import React from "react";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";

function SubmitPost(props:any){

    function closeSubmit(event: React.MouseEvent<HTMLButtonElement>){
        if(props.post.title!="" && props.post.postText!="") {
            props.onHide();
            props.dispatchPost();
        } else {
            alert("Posts must have a title and body!");
        }
    }

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            id="createPostModal"
            >
            <Modal.Header closeButton >
                <Modal.Title>
                    New Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* Picture Input */}
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={11}>
                            <Form.Control
                                placeholder="image URL"
                                onChange={(event)=> props.setPost({...props.post, imageURL: event.target.value})} />
                        </Col>
                    </Form.Group>

                    {/* Title Input */}
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={11}>
                            <Form.Control
                                placeholder="Post Title"
                                style={{height: "25px"}}
                                onChange={(event)=> props.setPost({...props.post, title: event.target.value})}
                            />
                        </Col>
                    </Form.Group>

                    {/* Text Input */}
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={12}>
                            <Form.Control
                                as="textarea"
                                placeholder="Post"  
                                style={{height: "100px"}}
                                onChange={(event)=> props.setPost({...props.post, postText: event.target.value})}
                            />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {/* Submit Button */}
                <Button id="submitPostBtn" type="button" onClick={closeSubmit}>Post to Reverb</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SubmitPost;