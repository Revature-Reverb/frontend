import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Post from './Post';
import { BrowserRouter } from 'react-router-dom';
import { PostModel } from '../models/postModel';
import { Profile } from '../models/profileModel';

describe('Post testing', () => {

  it('should show Oh Yeah', ()=>{

    const aProfile:Profile = {
        id: 0,
        first_name: '',
        last_name: '',
        profile_img: '',
        header_img: '',
        about_me: '',
        birthday: '',
        hobby: '',
        location: ''
    }

    const aPost: PostModel = {
        id: 0,
        title: '',
        postText: '',
        imageURL: '',
        date: '',
        profile: aProfile,
        comments: []
    }
    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
            <Post post={aPost} leaveComment={undefined} shouldUpdateLikes={[]}/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Oh Yeah")).toBeInTheDocument();
  })

});