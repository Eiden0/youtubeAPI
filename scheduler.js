// const Schedule = require('node-schedule');
const config = require('./config/config');
const background_task = require('./background');

const VideoInterval = () => {
    background_task();
    setInterval(background_task, 10000*1000);
}

const closeInterval = () => {
    clearInterval(background_task);
}

module.exports = {
    VideoInterval,
    closeInterval
}