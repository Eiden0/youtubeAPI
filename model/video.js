const connectdb = require('../helpers/db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

connectdb()

const videoSchema = new Schema({
    video_title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    img: {
        type: String,
    },
    date: {
        type: Date,
    },
});

let Videos = mongoose.model('videos', videoSchema);

const insert = (doc) => {
    return Videos.create(doc);
}

const insertMany = (docsArray) => {
    return Videos.insertMany(docsArray);
}

const getLastVideoTime = () => {
    return Videos.findOne().sort({'data.publishTime': -1}).limit(1).select({'data.publishTime': 1}).lean();
};

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

const smartSearchVideo = (video_title) => {
    const regex = new RegExp(escapeRegex(video_title), 'gi');
    return Videos.find({'video_title': regex}).lean();
};

module.exports = {
    insert,
    smartSearchVideo,
    insertMany,
    getLastVideoTime
};
