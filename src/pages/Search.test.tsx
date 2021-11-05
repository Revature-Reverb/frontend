import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Search from './Search';
import { BrowserRouter } from 'react-router-dom';

describe('The Search page', () => {

  it('should show Search Page', ()=>{
    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
            <Search/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Search Page")).toBeInTheDocument();
  })
});