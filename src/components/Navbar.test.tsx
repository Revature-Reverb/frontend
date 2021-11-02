import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

test('renders the logged out navbar 1', async () => {
  const { getByText } = render(
    
    <Provider store={store}>
        <BrowserRouter>
            <Navbar/>
        </BrowserRouter>
    </Provider>
  );

  await expect(getByText(/Login/i)).toBeInTheDocument();
});
test('renders the logged out navbar 2', async () => {
    const { getByText } = render(
      
      <Provider store={store}>
          <BrowserRouter>
              <Navbar/>
          </BrowserRouter>
      </Provider>
    );
  
    await expect(getByText(/Register/i)).toBeInTheDocument();
  });