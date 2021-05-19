# YouTube-API

An API for storing and searching Youtube Data
> This project contains 2 APIs
> which can be used to GET & SEARCH YouTube Data.

### How To Run Project

- Details related to project as in search query/ video tag and found in config file.

- Clone the repo and run `npm install`

- Package Run command `npm start` or `SET DEBUG=youtubeAPI:* & npm run devstart` for hot reload

- Hosted Database used is Mongo created online account on Atlas Mongodb

### Tech Stack
* NodeJS
* Express
* MongoDB

##### The starting point of the application is in `/bin/www`
##### The homepage of this application is `http://localhost:3000/`

### Background task
We have a function  in the file `/background.js` which hits the Youtube Data API, and get all results, and store these results in the database every 2 mins.
This function is bound to run every 2 min, **and uses multiple API Keys**, through the helper function in `/helpers/get_api_keys.js`

## Exposed End Points
### Get All Videos
File: `/routes/getAll.js` <br /> 
GET `http://localhost:3000/getAll` <br /> 
To get all the data from the mongoDB Database 

### Search
File: `/routes/searchVideo.js` <br /> 
GET `http://localhost:3000/search` <br /> 
API Get End Point : `http://localhost:1337/search?video_title=kohli`

### close DB connection
File: `/scheduler.js`  <br />
GET `http://localhost:3000/close`
