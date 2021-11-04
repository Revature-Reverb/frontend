import React, {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SubmitPost from '../components/SubmitPost'
import { getPostsAsync, selectPosts } from '../slices/postSlice'
import Post from '../components/Post'

const Feed = ()=> {
    const dispatch = useDispatch();
    dispatch(getPostsAsync({}));

    const posts = useSelector(selectPosts);


    const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Create Post
      </Button>

      <SubmitPost
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {posts.map(post => (<Post title={post.title} text={post.postText} profile={post.profile}  />))}
    </>
  );
}

export default Feed