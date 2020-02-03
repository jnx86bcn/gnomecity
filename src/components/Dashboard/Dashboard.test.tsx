import * as React from 'react';

import { Dashboard,DashboardItem,DashboardItemDetail } from '.';

import 'jest';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers/rootReducer';
import { render } from '@testing-library/react'

const store = createStore(
    rootReducer
)

describe('<Dashboard />', () => {

    test('test click open dashboard', () => {

        render(<Provider store={store}><Dashboard /></Provider>);

    });

});

describe('<DashboardItem />', () => {

    test('test click open dashboard', () => {

        render(<Provider store={store}><DashboardItem /></Provider>);

    });

});

describe('<DashboardItemDetail />', () => {

    test('test click open dashboard', () => {

        render(<Provider store={store}><DashboardItemDetail /></Provider>);

    });

});