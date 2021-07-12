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

            // console.log(tweet);
            //retweet the tweet

            T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
                // console.log(data);

                console.log("Retweet successful");
            });
            //like the tweet 
            T.post('favorites/create', { id: tweet.id_str })

                .then(result => {
                    console.log('Liked tweet successfully!');
                }).catch(console.error);

        }
        else {
            console.log('No tweet on the Hastage', searchHastage.q);
        }
    });
}
//function recall
retweet();
// to set time interval for retweet new after every 1000s
setInterval(retweet, 300*1000)