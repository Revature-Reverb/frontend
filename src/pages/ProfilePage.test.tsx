import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import ProfilePage from './ProfilePage';
import { BrowserRouter } from 'react-router-dom';

describe('The ProfilePage page', () => {

  it('should show Edit Profile', ()=>{
    const { getByRole } = render(
      <Provider store={store}>
          <BrowserRouter>
            <ProfilePage/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByRole("img")).toBeInTheDocument();
  })
});