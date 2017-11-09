import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers';

export const history = createHistory();
const logger = createLogger();

const initialState = {};
const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history),
    logger
]

if(process.env.NODE_ENV === 'development'){
    const devToolsExtension = window.devToolsExtension;

    if(typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composeEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers
)

export default store;