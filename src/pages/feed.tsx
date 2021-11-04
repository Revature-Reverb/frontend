import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import SubmitPost from '../components/SubmitPost'

const Feed = ()=> {

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
    </>
  );
}

export default Feed