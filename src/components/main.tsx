import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../branding/styles/main.scss';
import { App } from './App';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers/rootReducer';
import { Provider } from 'react-redux';

export const main = document.getElementById('main');

const store = createStore(
    rootReducer
)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,main);