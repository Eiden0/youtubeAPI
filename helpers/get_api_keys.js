const config = require('../config/config');

const API_KEY1 = config.KEY.KEY1;
const API_KEY2 = config.KEY.KEY2

const YOUTUBE_API_KEYS = [
    `${API_KEY1}`,
    `${API_KEY2}`,
];
let idx = 0;

module.exports = () => {
    idx = (idx + 1) % YOUTUBE_API_KEYS.length;
    return YOUTUBE_API_KEYS[idx];
};