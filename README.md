# YouTube-API

To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from YouTube for a given tag/search query in a paginated response.
> This project contains 2 APIs
> which can be used to GET & SEARCH YouTube videos.

### How To Run Project

-  Details related to project as in search query/ video tag and found in config file.

- Clone the repo and run `npm install`

- Package Run command `npm start` or `node index.js` or `SET DEBUG=youtubeAPI:* & npm run devstart` for hot reload

- Hosted Database used is Mongo created online account on Atlas Mongodb

### Tech Stack
* NodeJS
* Express
* MongoDB

### Background task
We have a function  in the file `/background.js` which hits the Youtube Data API, and get all results, and store these results in the database every 2 mins.
This function is bound to run every 2 min, **and uses multiple API Keys**, through the helper function in `/helpers/get_api_keys.js`

## Exposed End Points
### Get All Videos
File: `/routes/getAll.js` <br /> 
GET `http://localhost:8888/getAll` <br /> 
To get all the data from the mongoDB Database 

### Search
File: `/routes/searchVideo.js` <br /> 
GET `http://localhost:8888/search` <br /> 
API Get End Point : `http://localhost:1337/searchVideo?video_title=kohli`

### close DB connection
File: `/scheduler.js`  <br /> 
GET `http://localhost:8888/close`