import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import ProfilePosts from './ProfilePosts';
import { BrowserRouter } from 'react-router-dom';

describe('ProfilePosts testing', () => {

  it('should show From User Name Here (Possibly hyperlink?)', ()=>{

    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
            <ProfilePosts/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("From User Name Here (Possibly hyperlink?)")).toBeInTheDocument();
  })

});