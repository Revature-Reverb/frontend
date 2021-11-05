import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SubmitPost from '../components/SubmitPost'
import { getPostsAsync, postPostAsync, selectPosts } from '../slices/postSlice'
import Post from '../components/Post'
import SubmitComment from '../components/SubmitComment';
import { createComment } from '../remote/reverb-api/comment.api';
import { PostModel } from '../models/postModel';
import { Comment } from '../models/commentModel';

const Feed = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectPosts);

  const [modalShowPost, setModalShowPost] = useState(false);
  const [modalShowComment, setModalShowComment] = useState(false);

  const [postId, setPostId] = useState(0);

  const [shouldUpdateLikes, setShouldUpdateLikes] = useState([false]);



  // useEffect(
  //   () => { updateAll() }
  //   , []);


  const updateAll = () => {
    dispatch(getPostsAsync({}))
    setShouldUpdateLikes([!shouldUpdateLikes[0]]); // :^)
    console.log("Updated feed");
  }



  const initialPost: PostModel = {
    id: 0,
    title: "",
    postText: "",
    imageURL: "",
    date: "",
    profile: {
      id: 0,
      first_name: "",
      last_name: "",
      birthday: "",
      hobby: "",
      location: "",
      profile_img: "",
      header_img: "",
      about_me: ""
    },
    comments: []
  }

  const initialComment: Comment = {
    commentId: 0,
    commentText: "",
    date: "",
    profile: {
      id: 0,
      first_name: "",
      last_name: "",
      birthday: "",
      hobby: "",
      location: "",
      profile_img: "",
      header_img: "",
      about_me: ""
    }
  }

  const [comment, setComment] = useState(initialComment);
  const [post, setPost] = useState(initialPost);

  const leavePost = () => {
    setPost(initialPost);
    setModalShowPost(true);
  }

  const leaveComment = (postId: number) => {
    setComment(initialComment);
    setPostId(postId);
    setModalShowComment(true);
  }

  const dispatchComment = () => {
    createComment(postId, comment).then(() => { updateAll() });
  }

  const dispatchPost = () => {
    dispatch(postPostAsync(post));
  }

  return (
    <>
      <Button variant="primary" onClick={() => leavePost()}>
        Create Post
      </Button>
      <Button variant="primary" onClick={() => updateAll()}>
        Refresh
      </Button>

      <SubmitPost
        setPost={setPost}
        post={post}
        dispatchPost={dispatchPost}
        show={modalShowPost}
        onHide={() => setModalShowPost(false)}
      />

      <SubmitComment
        setComment={setComment}
        comment={comment}
        show={modalShowComment}
        dispatchComment={dispatchComment}
        onHide={() => setModalShowComment(false)}
        postId={postId}
      />


      {posts.map((post) => (<Post shouldUpdateLikes={shouldUpdateLikes}
        post={post} leaveComment={leaveComment} key={post.id} />)).reverse()}
    </>
  );
}

export default Feed