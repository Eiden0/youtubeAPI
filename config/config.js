const config = {
    KEY:{
        KEY1 : "enter your key1 here",
        KEY2 : "enter your key2 here", //you can add multiple keys here to increase our quota
    },
    SEARCH: {
        URL_END_POINT: "https://www.googleapis.com/youtube/v3/search",
        SEARCH_QUERY: "cricket",
        PART: "snippet",
        TYPE: "video",
        ORDER: "date",
        PUBLISHED_AFTER: "2019-07-01T01:59:53Z",
        LIMIT: 20,
    },
    db_credentials: {
        MONGO_URI: "enter your mongo db credentials here"
    },
}
module.exports = config;
