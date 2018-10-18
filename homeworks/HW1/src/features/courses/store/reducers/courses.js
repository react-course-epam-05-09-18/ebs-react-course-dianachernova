import {GET_ALL_COURSES} from '../actions'
export const initialState = {}; 

export const actionsHandlers = new Map([
	[GET_ALL_COURSES, (state, action) => action.payload]
]);

export const coursesReducer = (state = initialState, action) => { 
	const {
		type,
	} = action;

	if (!actionsHandlers.has(type)) {
		return state;
	}

	return actionsHandlers.get(type)(state, action);
}
