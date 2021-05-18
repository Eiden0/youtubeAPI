var express = require('express');
var router = express.Router();

const {smartSearchVideo} = require('../model/video');

const searchVideo = async (video_title) => {
    let result = await smartSearchVideo(video_title);
    console.log("Result for video title: ", video_title,
        " is : ", JSON.stringify(result, null, 4));
    return result;
};

module.exports = {
    searchVideo,
};
