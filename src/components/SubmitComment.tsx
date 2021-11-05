import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createComment } from "../remote/reverb-api/comment.api";
import { getPostsAsync } from "../slices/postSlice";

function SubmitComment(props: any) {
    const initialComment = {
        commentId: 0,
        commentText: "",
        profile: {
            id: 0,
            first_name: "",
            last_name: "",
            profile_img: "",
            header_img: "",
            about_me: ""
        }
    }

    const [comment, setComment] = useState(initialComment);
    const dispatch = useDispatch();

    const dispatchComment = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("tried to send comment with post id " + props.postId);
        createComment(props.postId, comment)
            .then(
                () => { dispatch(getPostsAsync({})) }
            );
    };

    function closeSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        if (comment.commentText !== "") {
            dispatchComment(event);
            setComment(initialComment);
        }
        props.onHide();
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            id="createCommentModal"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    New Comment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* Text Input */}
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Col sm={12}>
                            <Form.Control
                                as="textarea"
                                placeholder="Comment"
                                id="text"
                                style={{ height: "100px" }}
                                onChange={(event) => setComment({ ...comment, commentText: event.target.value })}
                            />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {/* Submit Button */}
                <Button type="button" onClick={closeSubmit}>Leave Comment</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SubmitComment;