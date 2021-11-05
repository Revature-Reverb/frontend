import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import ProfileInformation from './ProfileInformation';
import { BrowserRouter } from 'react-router-dom';

describe('ProfileInformation testing', () => {

  it('should show Edit Profile', ()=>{

    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
            <ProfileInformation/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Edit Profile")).toBeInTheDocument();
  })

});