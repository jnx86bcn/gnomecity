import { ActionTypes } from '../actions';

export const global = (state = {}, action: any) => {

    switch (action.type) {
        case ActionTypes.SET_CITY:
            return {
                ...state,
                city:  action.payload
            }
        case ActionTypes.SET_GNOMES:
            return {
                ...state,
                gnomes:  action.payload
            }
        case ActionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case ActionTypes.SET_SHOW_FILTERS:
            return {
                ...state,
                showFilter: action.payload
            }
        default:
            return {};
    };

}