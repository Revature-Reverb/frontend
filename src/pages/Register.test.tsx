import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Register from './register';
import { BrowserRouter } from 'react-router-dom';

describe('The Register page', () => {

  it('should show Email', ()=>{
    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
            <Register/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Email")).toBeInTheDocument();
  })
});