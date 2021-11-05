import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import SubmitPost from './SubmitPost';
import { BrowserRouter } from 'react-router-dom';
import { PostModel } from '../models/postModel';
import { Profile } from '../models/profileModel';
import App from '../App';

describe('SubmitPost testing', () => {

  it('should show Post to Reverb', ()=>{

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
          <App></App>
            <SubmitPost aPost="abc"/>
            <SubmitPost/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Reverb")).toBeInTheDocument();
  })

});