import React from "react";
import {Button, Card, Col, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";

const Post : React.FC = () => {
    
    return(
        <Card bg='light' style={{width: "500px"}}>
            <Card.Header>
                <Card.Title>Amazing Post Title</Card.Title>
                <Card.Subtitle>Joe Smith - 11/01/2021</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Card.Img variant='top' src="https://placeholder.pics/svg/300"/>
                <Card.Text>
                    This is some junk text. This is some junk text. This is some junk text.
                    This is some junk text. This is some junk text. This is some junk text.
                    This is some junk text. This is some junk text. This is some junk text.
                    This is some junk text. This is some junk text. This is some junk text.
                    This is some junk text. This is some junk text. This is some junk text.
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
                    <Button variant="warning">ReverB</Button>
                    <Button>Comment</Button>
                </Card.Body>
        </Card>S
    );
}

export default Post;
