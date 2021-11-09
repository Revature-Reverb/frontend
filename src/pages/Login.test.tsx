import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';

describe('login test', () => {

  it('should show Login', ()=>{
    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
            <Login/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Email")).toBeInTheDocument();
  })
  it('should show Password', ()=>{
    const { getByText } = render(
    <Provider store={store}>
        <BrowserRouter>
          <Login/>
        </BrowserRouter>
    </Provider>
    );
    expect(getByText("Password")).toBeInTheDocument();
  })

});