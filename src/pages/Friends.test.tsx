import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Friends from './Friends';
import { BrowserRouter } from 'react-router-dom';

describe('Friends testing', () => {

  it('should show Friends page', ()=>{
    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
            <Friends/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Friends Page")).toBeInTheDocument();
  })

});