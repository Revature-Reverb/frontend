import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Settings from './Settings';
import { BrowserRouter } from 'react-router-dom';

describe('The Settings page', () => {

  it('should show Settings Page', ()=>{
    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
            <Settings/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Settings Page")).toBeInTheDocument();
  })
});