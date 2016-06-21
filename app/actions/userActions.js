/**
 * @file
 */

import * as Types from './ActionTypes';

export function needLogin() {
    return {
        type: Types.USER_NEED_LOGIN
    };
};

export function loggedIn() {
    return {
        type: Types.USER_LOGGED_IN
    };
}