import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store/store';
import Router from './router';

const target = document.querySelector('#root')

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Router />
            </div>
        </ConnectedRouter>
    </Provider>,
    target
)
