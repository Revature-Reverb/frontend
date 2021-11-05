import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Post from './Post';
import { BrowserRouter } from 'react-router-dom';

describe('Post testing', () => {

  it('should show Create Post', ()=>{
    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
            <Post post={undefined} leaveComment={undefined}/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Create Post")).toBeInTheDocument();
  })

});