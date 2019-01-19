import {
    LOGIN_USER
} from '../actions/actionTypes'

const typesMap = {
    [LOGIN_USER]: (state, payload) => {
        return payload;
    }
}

export const userReducer = (state = null, {type, payload}) => {
    if(typesMap[type]){
        return typesMap[type](state, payload);
    }
    return state;
}