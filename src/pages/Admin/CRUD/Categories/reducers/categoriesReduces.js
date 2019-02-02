import {
    FETCH_CATEGORIES
} from '../actions/actionTypes'

const typesMap = {
    [FETCH_CATEGORIES]: (state, payload) => {
        return payload;
    }
}

export const categoriesList = (state = [], {type, payload}) => {
    if(typesMap[type]){
        return typesMap[type](state, payload);
    }
    return state;
}