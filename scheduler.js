const Schedule = require('node-schedule');
const config = require('./config/config');
const background_task = require('./background');

const VideoInterval = () => {
    Schedule.scheduleJob(config.Interval, function() {
        background_task();
    });
}

module.exports = {
    VideoInterval
}