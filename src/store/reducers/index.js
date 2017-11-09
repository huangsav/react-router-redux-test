import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as loginInfo from './login';
import * as registInfo from './regist';

export default combineReducers({
    router: routerReducer,
    ...loginInfo,
    ...registInfo
})