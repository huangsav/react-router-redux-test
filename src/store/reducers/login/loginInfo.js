import { INPUT_USERNAME, INPUT_PASSWORD } from '../../actionTypes';

export const userName = (state = '', action) => {
    switch (action.type) {
        case INPUT_USERNAME:
            return action.payload;
            break;
        default:
            return state;
    }
}

export const password = (state = '', action) => {
    switch (action.type) {
        case INPUT_PASSWORD:
            return action.payload;
            break;
        default:
            return state;
    }
}