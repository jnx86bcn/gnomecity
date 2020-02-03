import * as React from 'react';

import { Filters, SearchBar } from '.';

import 'jest';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers/rootReducer';
import { render, fireEvent } from '@testing-library/react'

const store = createStore(
    rootReducer
)

describe('<SearchBar />', () => {

    test('test click open filters', () => {

        const { getByTestId,getByPlaceholderText } = render(<Provider store={store}><SearchBar /></Provider>);

        fireEvent.click(getByTestId(/ButtonFilter/i));

    });

});

describe('<Filters />', () => {

    test('test inputs and buttons in filter component', () => {

        const { getByTestId } = render(<Provider store={store}><Filters /></Provider>);

        fireEvent.change(getByTestId (/ddlEdadMin/i),{ target: { option: '30 años' }});
        fireEvent.change(getByTestId (/ddlEdadMax/i),{ target: { option: '50 años' }});

        fireEvent.change(getByTestId (/ddlFriends/i),{ target: { option: '30 o más' }});

        fireEvent.change(getByTestId (/ddlJobs/i),{ target: { option: '4 o más' }});

        fireEvent.click(getByTestId (/ButtonFilterSearch/i));
    });

});