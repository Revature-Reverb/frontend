import React from "react";
import {Button, Card, Col, Form, Row} from "react-bootstrap";

const SubmitPost : React.FC = () => {
    return(
        <Card>
            <Card.Header>
                <h1>New Post</h1>
            </Card.Header>
            <Card.Body>

            <Form>
                {/* Picture Input */}
                <Form.Group as={Row} className="mb-3" controlId="">
                    <Form.Label column sm={1}>
                        Photo
                    </Form.Label>
                    <Col sm={11}>
                        <Form.Control type="file" />
                    </Col>
                </Form.Group>

                {/* Link Input */}
                <Form.Group as={Row} className="mb-3" controlId="">
                    <Form.Label column sm={1}>Link</Form.Label>
                    <Col sm={11}>
                        <Form.Control
                            as="textarea"
                            placeholder=""
                            style={{height: "25px"}}
                            id="link"
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