import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import SubmitComment from './SubmitComment';
import { BrowserRouter } from 'react-router-dom';
import { PostModel } from '../models/postModel';
import { Profile } from '../models/profileModel';
import App from '../App';

describe('SubmitComment testing', () => {

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
            <SubmitComment aPost="abc"/>
            <SubmitComment/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Reverb")).toBeInTheDocument();
  })

});