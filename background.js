const axios = require('axios');
const querystring = require('querystring');
const {insertMany, getLastVideoTime} = require('./model/video');
const get_api_key = require('./helpers/get_api_keys')

const startVideoMining = async() => {
    let lastVideoTime = await _getLastFetchedRecordTime();
    _getMinedVideoData(lastVideoTime);
};

const _getLastFetchedRecordTime = async () => {
    let lastVideoTime = null;
    let lastVideoTimeObj = await getLastVideoTime();
    console.log(lastVideoTimeObj.data);
    if(lastVideoTimeObj && lastVideoTimeObj.data) {
        lastVideoTime = lastVideoTimeObj.data.publishTime;
    }
    return lastVideoTime || config.SEARCH.PUBLISHED_AFTER;
};

const _getMinedVideoData = (lastVideoTime) => {
    let current_key = get_api_key();

    // GET parameters
    const parameters = {
        part: config.SEARCH.PART,
        key: current_key,
        q: config.SEARCH.SEARCH_QUERY,
        type: config.SEARCH.TYPE,
        order: config.SEARCH.ORDER,
        publishedAfter: lastVideoTime,
        maxResults: config.SEARCH.MAX_RESULTS
    }
    const get_request_args = querystring.stringify(parameters);

    let URL = config.SEARCH.URL_END_POINT + "?" + get_request_args;

    axios.get(URL)
    .then(function (response) {
        _saveMinedVideoDetails(response, config.SEARCH.SEARCH_QUERY);
    })
    .catch(function (error) {
        console.log(error);
    });
}

const _saveMinedVideoDetails = (response, video_title) => {
    const docsArray = [];
    response.data.items.forEach(function (element) {
        const obj = {};
        obj.video_title = video_title;
        obj.data = element.snippet;
        delete obj.data.channelTitle;
        delete obj.data.liveBroadcastContent;
        docsArray.push(obj);
    });
    console.log("Saving Video Data: ", JSON.stringify(docsArray, null, 4));
    insertMany(docsArray);
}

module.exports = startVideoMining;