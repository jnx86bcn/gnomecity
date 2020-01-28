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

    test('test inputs and buttons in search component', () => {

        const { getByTestId,getByPlaceholderText } = render(<Provider store={store}><SearchBar /></Provider>);

        fireEvent.change(getByPlaceholderText('Ciudad'),{ target: { value: 'Barcelona' }});

        fireEvent.click(getByTestId(/ButtonSearch/i));

        fireEvent.click(getByTestId(/ButtonFilter/i));

        fireEvent.click(getByTestId(/CheckIsPro/i));

    });

});

describe('<Filters />', () => {

    test('test inputs and buttons in filter component', () => {

        const { getByTestId } = render(<Provider store={store}><Filters /></Provider>);

        fireEvent.change(getByTestId (/ddlPricesMin/i),{ target: { option: '30,000' }});
        fireEvent.change(getByTestId (/ddlPricesMax/i),{ target: { option: '150,000' }});

        fireEvent.change(getByTestId (/ddlSizesMin/i),{ target: { option: '30 m2' }});
        fireEvent.change(getByTestId (/ddlSizesMax/i),{ target: { option: '100 m2' }});

        fireEvent.change(getByTestId (/ddlRooms/i),{ target: { option: '3+' }});

        fireEvent.click(getByTestId (/ButtonFilterSearch/i));
    });

});