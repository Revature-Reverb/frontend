import React, { useState } from "react";
import { Button, Card, Col, Form, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { Profile } from '../models/profileModel';
import { PostModel } from '../models/postModel'
import { Likes } from "../models/likesModel";
import { checkIfPostCanBeLiked, getNumLikes, likePost } from "../remote/reverb-api/likes.api";


const Post = ({ post, leaveComment }: { post: PostModel, leaveComment: any }) => {

    const initialLikes: number = 0;
    const [likes, setLikes] = useState(initialLikes);
    const [canLike, setCanLike] = useState(false);

    const updateLikes = () => {
        getNumLikes(post.id).then((data) => { setLikes(data) });
    }

    const likePostFunc = () => {
        likePost(post.id).then(() => {
            //post was liked successfully
            //makes it so user cannot press like button again
            setCanLike(false);
            updateLikes();
        }).catch((e) => {
            //unsuccessful
            console.log(e)
        })
    }

    //checks to see if the post can be liked
    checkIfPostCanBeLiked(post.id).then(canLikeReturn => setCanLike(!canLikeReturn));

    //updates the number of likes
    updateLikes();

    return (
        <Card bg='light' style={{ width: "500px" }}>
            <Card.Header>
                <Card.Title>{"" + post.title}</Card.Title>
                <Card.Subtitle>{"" + post.profile.first_name} {"" + post.profile.last_name}</Card.Subtitle>
                <Card.Text>{""+post.date}</Card.Text>
                <Button onClick={() => likePostFunc()} variant="warning"
                    style={{ float: 'right', marginTop: "-5rem" }} disabled={!canLike}>{canLike ? "ReverB!" : "Oh Yeah"}</Button>
                <Card.Subtitle style={{ float: 'right', marginTop: "-2.5rem" }}>{likes} ReverBs</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Card.Img variant='top' src={"" + post.imageURL} />
                <Card.Text>
                    {post.postText}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {post.comments.map(comment => (
                    
                    <ListGroupItem>
                        {comment.commentText}
                        <footer style={{ float: "right", fontSize: "0.8rem", marginTop: "0.8rem" }}>
                            {comment.profile.first_name} {comment.profile.last_name} | {comment.date}
                        </footer>
                    </ListGroupItem>

                ))}

            </ListGroup>
            <Card.Body>
                <Button onClick={() => leaveComment("",post.id)}>Leave Comment</Button>
            </Card.Body>
        </Card>
    );
}

export default Post;
