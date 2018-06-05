import * as types from './actiontypes';

// Action creators

export function changeAppRoot(root) {
	return {
		type: types.ROOT_CHANGED,
		root: root
	};
}

// Dispatch actionCreators


export function login() {
    return async function(dispatch, getState) {
        dispatch(changeAppRoot('after-login'));
    };
}

export function appInitialized() {
    return async function(dispatch, getState) {
        dispatch(changeAppRoot('login'));
    };
}

export function gotoUserRegistration() {
    return async function(dispatch, getState) {
        dispatch(changeAppRoot('user-registration'));
    }
}