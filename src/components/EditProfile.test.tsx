import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import EditProfile from './EditProfile';
import { BrowserRouter } from 'react-router-dom';

describe('EditProfile testing', () => {

  it('should show First Name', ()=>{

    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
            <EditProfile/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("First Name")).toBeInTheDocument();
  })

});