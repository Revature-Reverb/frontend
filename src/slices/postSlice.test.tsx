import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import {postPostAsync, getPostsAsync } from './postSlice';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe( 'The PostSlice', () =>
{

    it( 'should show Reverb', () =>
    {
        const { getByText } = render(
        <Provider store={ store } >
            <BrowserRouter>
                postPostAsync();
                getPostsAsync();
                <App/>
            </BrowserRouter>
        </Provider>
        );
        expect( getByText( "Reverb" ) ).toBeInTheDocument();
    } )
} );