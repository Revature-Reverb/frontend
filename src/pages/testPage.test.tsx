import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import TestPage from './testPage';
import { BrowserRouter } from 'react-router-dom';

describe('The TestPage page', () => {

  it('should show Need Default Page', ()=>{
    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
            <TestPage/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Need Default Page")).toBeInTheDocument();
  })
});