import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function ProfilePosts() {
    return(
        <Card style={{ width: '25rem', height: '15rem', border: '2px solid slategray' }}>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Img style={{ height:'40px', backgroundColor: 'coral' }}/>
                    </Col>
                    <Col>
                        <Card.Text>From User Name Here (Possibly hyperlink?)</Card.Text>
                    </Col>
                </Row>
                <Row style={{border: '2px solid black', minHeight: '80%'}}>
                    <span>Actual Posts and comments go here (collapseable comments)</span>
                </Row>
            </Card.Body>
        </Card>
    )
}