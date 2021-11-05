import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SubmitPost from '../components/SubmitPost'
import { getPostsAsync, selectPosts } from '../slices/postSlice'
import Post from '../components/Post'
import SubmitComment from '../components/SubmitComment';

const Feed = () => {
  const dispatch = useDispatch();
  useEffect(
    () => {dispatch(getPostsAsync({})) }
  ,[]);

  console.log("Updated feed");

  const posts = useSelector(selectPosts);

  const [modalShowPost, setModalShowPost] = useState(false);
  const [modalShowComment, setModalShowComment] = useState(false);

  const [postId, setPostId] = useState(0);

  const leaveComment = (postId: number) => {
    setPostId(postId);
    setModalShowComment(true);
  }

  return (
    <>
      <Button variant="primary" onClick={() => setModalShowPost(true)}>
        Create Post
      </Button>

      <SubmitPost
        show={modalShowPost}
        onHide={() => setModalShowPost(false)}
      />

      <SubmitComment
        show={modalShowComment}
        onHide={() => setModalShowComment(false)}
        postId={postId}
      />


      {posts.map(post => (<Post post={post} leaveComment={leaveComment}/>)).reverse()}
    </>
  );
}

export default Feed