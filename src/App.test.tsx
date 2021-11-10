import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App testing', () => {

  it('should show First Name', async ()=>{

    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Reverb")).toBeInTheDocument();
  })

});