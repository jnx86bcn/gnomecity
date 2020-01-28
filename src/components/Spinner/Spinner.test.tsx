import * as React from 'react';

import { Spinner } from '.';

import 'jest';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers/rootReducer';
import { render, fireEvent } from '@testing-library/react'

const store = createStore(
    rootReducer
)

describe('<Spinner />', () => {

    test('render KO!!', () => {
        render(<Provider store={store}><Spinner /></Provider>);
    });
    
});