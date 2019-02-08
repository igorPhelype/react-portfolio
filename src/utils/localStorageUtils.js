const keys = {
    user: 'user'
}

/**
 * 
 * @param {*} key 
 * @param {*} value 
 */
export const saveOnLocalStorage = (key, value) => {
    localStorage.setItem(keys[key], JSON.stringify(value));
}

/**
 * 
 * @param {*} key 
 * @param {*} parser 
 */
export const getFromLocalStorage = (key, parser = (value) => JSON.parse(value)) => {
    return parser(localStorage.getItem(keys[key]));
}
