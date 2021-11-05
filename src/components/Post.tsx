import React from "react";
import {Button, Card, Col, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { Profile } from '../models/profileModel';
import { PostModel } from '../models/postModel'


const Post = ({post, leaveComment}:{post: PostModel, leaveComment: any}) => {

    return(
        <Card bg='light' style={{width: "500px"}}>
            <Card.Header>
                <Card.Title>{""+post.title}</Card.Title>
                <Card.Subtitle>{""+post.profile.first_name} {""+post.profile.last_name}</Card.Subtitle>
                <Button variant="warning" style={{float: 'right', marginTop: "-2.5rem"}}>ReverB!</Button>
            </Card.Header>
            <Card.Body>
                <Card.Img variant='top' src={""+post.imageURL}/>
                <Card.Text>
                    {post.postText}
                </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {post.comments.map(comment => (

                    <ListGroupItem>
                        {comment.commentText}
                        <footer style={{float: "right", fontSize: "0.8rem", marginTop: "0.8rem"}}>
                            {comment.profile.first_name} {comment.profile.last_name} | <Card.Link>Reply</Card.Link>
                        </footer>
                    </ListGroupItem>

                    ))}
                    
                </ListGroup>
                <Card.Body>
                    <Button onClick={() => leaveComment(post.id)}>Leave Comment</Button>
                </Card.Body>
        </Card>
    );
}

export default Post;
