import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('logged in navbar', () => {

  it('should show register', ()=>{
    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
              <Navbar loggedIn={""} />
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Register")).toBeInTheDocument();
  })
  it('should show login', ()=>{
    const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
              <Navbar loggedIn={""} />
          </BrowserRouter>
      </Provider>
    );
    expect(getByText("Login")).toBeInTheDocument();
  })

});
describe('logged in navbar', () => {
  
  it('should show home', ()=>{  
    const { getByText } = render(
    <Provider store={store}>
        <BrowserRouter>
            <Navbar loggedIn={"a"} />
        </BrowserRouter>
    </Provider>
  );
    expect(getByText("Home")).toBeInTheDocument();
  })
  it('should show profile', ()=>{  
    const { getByText } = render(
    <Provider store={store}>
        <BrowserRouter>
            <Navbar loggedIn={"a"} />
        </BrowserRouter>
    </Provider>
  );
    expect(getByText(/Profile/i)).toBeInTheDocument();
  })
  it('should show friends', ()=>{  
    const { getByText } = render(
    <Provider store={store}>
        <BrowserRouter>
            <Navbar loggedIn={"a"} />
        </BrowserRouter>
    </Provider>
  );
    expect(getByText('Friends')).toBeInTheDocument();
  })
  it('should show settings', ()=>{  
    const { getByText } = render(
    <Provider store={store}>
        <BrowserRouter>
            <Navbar loggedIn={"a"} />
        </BrowserRouter>
    </Provider>
  );
    expect(getByText(/Settings/i)).toBeInTheDocument();
  })
  it('should show logout', ()=>{  
    const { getByText } = render(
    <Provider store={store}>
        <BrowserRouter>
            <Navbar loggedIn={"a"} />
        </BrowserRouter>
    </Provider>
  );
    expect(getByText(/Logout/i)).toBeInTheDocument();
  })
 })
