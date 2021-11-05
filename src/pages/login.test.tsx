import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Login from './login';
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
  it('should show Register a new account', ()=>{
    const { getByText } = render(
    <Provider store={store}>
        <BrowserRouter>
          <Login/>
        </BrowserRouter>
    </Provider>
    );
    expect(getByText("Register a new account")).toBeInTheDocument();
  })

});