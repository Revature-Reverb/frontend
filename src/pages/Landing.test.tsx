import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Landing from './Landing';
import { BrowserRouter } from 'react-router-dom';

describe('The landing page', () => {

  it('should show Reverb', ()=>{
    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
            <Landing/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Reverb")).toBeInTheDocument();
  })
});