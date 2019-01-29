import {
    SET_USER
} from '../actions/actionTypes'

const typesMap = {
    [SET_USER]: (state, payload) => {
        return payload;
    }
}

export const userReducer = (state = null, {type, payload}) => {
    if(typesMap[type]){
        return typesMap[type](state, payload);
    }
    return state;
}