import * as React from 'react';

import { App } from '.';
import { fireEvent, render, getAllByRole } from '@testing-library/react';

import 'jest';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers/rootReducer';

const store = createStore(
    rootReducer
)

describe('<App />', () => {

    // Test for checking if it is working
    test('render OK!!', () => {
        render(<Provider store={store}><App/></Provider>);
    });

});