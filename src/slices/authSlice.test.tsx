import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { setTokenAsync, authSlice} from './authSlice';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe( 'The TestPage page', () =>
{

    it( 'should show Reverb', () =>
    {
        const { getByText } = render(
        <Provider store={ store } >
            <BrowserRouter>
                setTokenAsync();
                authSlice();
                <App/>
            </BrowserRouter>
        </Provider>
        );
        expect( getByText( "Reverb" ) ).toBeInTheDocument();
    } )
} );