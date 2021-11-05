import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {register, unregister} from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import App from './App'

describe('The ServiceWorker page', () => {

  it('should show Reverb', ()=>{
    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
            {register()}
            {unregister()}
            <App/>
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Reverb")).toBeInTheDocument();
  })
});

