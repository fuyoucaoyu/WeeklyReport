/**
 * @file
 */

import * as Types from '../actions/ActionTypes';

const initialState = {
    isLoggedIn: true,
    sessionId: '',
    username: '',
}

let userReducer = function (state = initialState, action) {
    let newState;
    switch (action.type) {
        case Types.USER_NEED_LOGIN:
            newState = {...state, isLoggedIn: false};
            // console.log(newState);
            // return newState;
            break;
        case Types.USER_LOGGED_IN:
            newState = {...state, isLoggedIn: true};
            break;
        case Types.FETCH_USER_BD_INFO:
            return {...state};
        case Types.FETCH_USER_PROGRAM_INFO:
            return {...state};
        default:
            // console.log(state);
            // newState = state;
            newState = {...state, isLoggedIn: false};
            // return state;
    }

    console.log(newState);
    return newState;
}

export default userReducer;