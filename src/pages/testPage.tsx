import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TestComponent from "../components/testcomponent";

export default function TestPage() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xl={12}>
                        <TestComponent/>
                    </Col>
                        
                    <Col>
                        <TestComponent/>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}