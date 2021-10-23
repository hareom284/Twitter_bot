//Config Object 
require('dotenv').config()

let config = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret
};
console.log(config)
//Export the Config to access from the main bot app.
module.exports = config;