const config = {
    KEY:{
        KEY1 : "AIzaSyBMWHaGXFWQI0Cw0VbVDS7k0ircQpi-5s8",
        KEY2 : "AIzaSyAyFOxtcFuDfqEyQqa7Xkhgn73Rn9iQM04", //you can add multiple keys here to increase our quota
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
        MONGO_URI: "mongodb+srv://eiden:Shibashis*12@cluster0.rupja.mongodb.net/youtube_video?retryWrites=true&w=majority"
    },
}
module.exports = config;