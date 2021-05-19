// const Schedule = require('node-schedule');
const config = require('./config/config');
const background_task = require('./background');

const VideoInterval = () => {
    background_task();
    setInterval(background_task, 1000*1000);
}

module.exports = {
    VideoInterval
}