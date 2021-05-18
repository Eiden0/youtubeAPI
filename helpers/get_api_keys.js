const config = require('../config/config');

const { API_KEY1, API_KEY2 } = config.SEARCH.KEY;

const API_KEYS = [
    `${API_KEY1}`,
    `${API_KEY2}`,
]; 

let idx = 0;

function key(){
    idx = (idx + 1) % PI_KEYS.length;
    return API_KEYS[idx];
}

module.exports = key;