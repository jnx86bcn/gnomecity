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


    // Get News displays 8 items ordered
    // it("Get News displays 8 items ordered", async () => {

    //     const { getByTestId } = render(<HelloWorld description={''} testEnviroment={true} context={null} />);

    //     const container = getByTestId(/webPart/i);
    //     await act(async () => {
    //         fireEvent.click(getByTestId(/getButton/i));

    //         await container.getElementsByTagName("li");

    //         let items = getAllByRole(container, /item/i);
    //         expect(items).toHaveLength(8);

    //         //let arrayOrderend: string = items.map(a => Number(a.getAttribute('data-id'))).sort((n1, n2) => n1 - n2).toString();
    //         let array: string = items.map(a => Number(a.getAttribute('data-id'))).toString();
    //         expect(array).toBe([1, 4, 7, 12, 19, 23, 24, 56].toString());
    //     });
    // });
});