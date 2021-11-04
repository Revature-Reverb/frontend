import React from "react";
import {Button, Card, Col, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { Profile } from '../models/profileModel';

function Post({title, text, profile}:{title: String, text: String, profile: Profile}) {

    return(
        <Card bg='light' style={{width: "500px"}}>
            <Card.Header>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>`{profile.first_name} {profile.last_name}` </Card.Subtitle>
                <Button variant="warning" style={{float: 'right', marginTop: "-2.5rem"}}>ReverB!</Button>
            </Card.Header>
            <Card.Body>
                <Card.Img variant='top' src="https://placeholder.pics/svg/300"/>
                <Card.Text>
                    {text}
                </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        This is a comment.
                        <footer style={{float: "right", fontSize: "0.8rem", marginTop: "0.8rem"}}>
                            Jane Doe - 11/10/2021 | <Card.Link>Reply</Card.Link>
                        </footer>
                    </ListGroupItem>
                    <ListGroupItem>
                        This is a longer comment.
                        This is a longer comment.
                        This is a longer comment.
                        This is a longer comment.
                        This is a longer comment.
                        This is a longer comment.
                        This is a longer comment.
                        <footer style={{float: "right", fontSize: "0.8rem", marginTop: "0.8rem"}}>
                            Bob Smith - 11/11/2021 | <Card.Link>Reply</Card.Link>
                        </footer>
                    </ListGroupItem>
                    <ListGroupItem>
                        This is another comment.
                        <footer style={{float: "right", fontSize: "0.8rem", marginTop: "0.8rem"}}>
                            Mark Micket - 11/12/2021 | <Card.Link>Reply</Card.Link>
                        </footer>
                    </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button>Comment</Button>
                </Card.Body>
        </Card>
    );
}

export default Post;
