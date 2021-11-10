import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { getProfileAsync, updateProfileAsync} from './profileSlice';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe( 'The ProfileSlice', () =>
{

    it( 'should show Reverb', () =>
    {
        const { getByText } = render(
        <Provider store={ store } >
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
        );
        expect( getByText( "Reverb" ) ).toBeInTheDocument();
    } )
} );