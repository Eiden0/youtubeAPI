console.log('background_task');
const axios = require('axios');
const querystring = require('querystring');
const {insertMany, getLastVideoTime} = require('./model/video');
const getAPIKey = require('./helpers/get_api_keys')
const config = require('./config/config')

const startVideoMining = async() => {
    let lastVideoTime = await _getLastFetchedRecordTime();
    _getMinedVideoData(lastVideoTime);
};

const _getLastFetchedRecordTime = async () => {
    let lastVideoTime = null;
    let lastVideoTimeObj = await getLastVideoTime();
    if(lastVideoTimeObj && lastVideoTimeObj.data) {
        lastVideoTime = lastVideoTimeObj.data.publishTime;
    }
    return lastVideoTime || config.SEARCH.PUBLISHED_AFTER;
};

const _getMinedVideoData = (lastVideoTime) => {
    const apiKey = getAPIKey();

    // GET parameters
    const parameters = {
        part: config.SEARCH.PART,
        key: apiKey,
        q: config.SEARCH.SEARCH_QUERY,
        type: config.SEARCH.TYPE,
        order: config.SEARCH.ORDER,
        publishedAfter: lastVideoTime,
        maxResults: config.SEARCH.LIMIT
    }
    const get_request_args = querystring.stringify(parameters);

    let URL = config.SEARCH.URL_END_POINT + "?" + get_request_args;

    axios.get(URL)
    .then(function (response) {
        _saveMinedVideoDetails(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

const _saveMinedVideoDetails = (response) => {
    const docsArray = [];
    response.data.items.forEach(function (element) {
        const obj = {};
        obj.video_title = element.snippet.title;
        obj.description = element.snippet.description;
        obj.image = element.snippet.thumbnails.default.url;
        obj.date = element.snippet.publishedAt;
        docsArray.push(obj);
    });
    console.log("Saving Video Data: ", JSON.stringify(docsArray, null, 4));
    insertMany(docsArray);
}

module.exports = startVideoMining;