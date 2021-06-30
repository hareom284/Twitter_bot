# To create twitter using twit and node.js

## First You need a twitter developer account

To create developer account go this [link](https://developer.twitter.com/en/) and then you need to submit the form to get approve follow link this method read this [link](https://www.wppocket.com/apply-for-a-twitter-developer-account/) and get approved go to second.

## Second step

Go to this [link](https://developer.twitter.com/en/portal/projects-and-apps) and creat twitter app show below like this

![See the Image](1.png)

And then You need to generate those put it on fourth step

![See the image][2.png]

## Third step install twit in your computer like below

```
       npm install twit --save

```

## Third step

You need to create folder which can be any name and on this folder you will need to creat a two subfiles

- The first file you can name config.js

```
  //Config Object
let config = {
   //this key you can get from developer
   consumer_key: "",
   consumer_secret: "",
   access_token: "",
   access_token_secret: ""
};
//Export the Config to access from the main bot app.
module.exports = config;

```

- The second file you can name index.js

```

    let Twit = require("twit");

  //Create an Instance of Twitter API and Authenticate using App Keys
let T = new Twit(require("./config"));

// search specific hastage and you can change hastage and try another
let searchHastage = { q: '#WhatsHappeningInMyanmar', count: 1, result_type: 'recent' };
function retweet() {


   //this below line is use for searching hastage and save in data variable
   T.get("search/tweets", searchHastage, (err, data) => {
       if (err) {
           console.log('Cannot Grab ', searchHastage.q);
           return;
       }
       // below if check it is available or not hastage with this
       if (data && data.statuses.length > 0) {
           let tweet = data.statuses[0];

           console.log(tweet);
           //retweet

           T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
               console.log(data);

               console.log("Retweet successful");
               });

           }
       else {
           console.log('No tweet on the Hastage', searchHastage.q);
       }
   });
  }
   //function recall
   retweet();
    // to set time interval for retweet new after every 1000s
   setInterval(retweet,1000 *1000)

```
