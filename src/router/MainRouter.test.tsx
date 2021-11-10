import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import MainRouter from './MainRouter';
import { BrowserRouter } from 'react-router-dom';

describe('The MainRouter page', () => {

  it('should show MainRouter Page', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <MainRouter loggedIn={''} />
        </BrowserRouter>
      </Provider>
    );
    expect(getByText("Reverb")).toBeInTheDocument();
  })
});