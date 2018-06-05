import * as types from '../actions/actiontypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
	root: 'login'
});

// root reducer

export function root(state = initialState, action = {}) {
	switch(action.type) {
    
	case types.ROOT_CHANGED:
		return state.merge({
			root: action.root
		});
            
	default:
		return state;
	}
}