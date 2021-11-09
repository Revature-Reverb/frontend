import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import SubmitPost from './SubmitPost';
import { BrowserRouter } from 'react-router-dom';
import { PostModel } from '../models/postModel';
import { Profile } from '../models/profileModel';
import App from '../App';

describe('SubmitPost testing', () => {

  it('should show Post to Reverb', ()=>{

    const initialPost: PostModel = {
      id: 0,
      title: "title",
      postText: "text",
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

    const dummyFunc = jest.fn();

    let submitPostComponent = (<><SubmitPost
      setPost={() => { } }
      post={initialPost}
      dispatchPost={dummyFunc}
      show={true}
      onHide={() => { } } /><SubmitPost /></>);

    const { getByText, getByTestId } = render(
      <Provider store={store}>
          <BrowserRouter>
            {submitPostComponent}
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("New Post")).toBeInTheDocument();

    const button = getByTestId("submitButton");
    fireEvent.click(button);
    expect(dummyFunc).toBeCalled();
  })

});