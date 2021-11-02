import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { Stack } from 'react-bootstrap';
import Navbar from './components/Navbar';
import MainRouter from './router/MainRouter';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders main app', async () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
    <div className="App">
      <Stack direction="horizontal" gap={5}>
        <Navbar/>
        <div className="justify-content-center" style={{width:"100%", height:"100vh", overflowY:"scroll"}} >
          <MainRouter/>
        </div>
      </Stack>
    </div>
      </Router>
    </Provider>
  );

  await expect(getByText(/login/i)).toBeInTheDocument();
});
