import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Feed from './Feed';
import { BrowserRouter } from 'react-router-dom';

describe('Feed testing', () => {

  it('should show Create Post', ()=>{
    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
            <Feed/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Create Post")).toBeInTheDocument();
  })

});