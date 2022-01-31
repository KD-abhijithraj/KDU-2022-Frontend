const express = require("express") 
const casual = require("casual") 
const faker = require('Faker')

const cors = require('cors')
const { range } = require("express/lib/request");
const app = express();
app.use(cors())

var ind=1
casual.define('tweet', function(userName) {
    let tweet =  {
            userName: casual.name,
            userImage: "https://picsum.photos/200/300?random="+ind,
            userHandle: "@"+casual.last_name,
            createdAt : casual.date(format="YYYY-MMM-DD"),
            tweet : casual.text,
            tweetImage: "https://picsum.photos/200/300?random="+ind+ind,

            stats : {
                likes : casual.integer(10, 1000),
                retweets : casual.integer(5, 100),
                replies : casual.integer(1, 20)
            }
        }
	return tweet;

});

let getTweets = (limit) => {
    let tweets = []
    for(let i = 0; i < limit; i++){
        userName = casual.name
        let tweet = casual.tweet(userName)
        tweets.push(tweet);
        ind++
    }
    return tweets
}
app.listen(3100, () => {
 console.log("Server running on port 3100");
});

app.get("/getTweets", (req, res, next) => {
    let tweets = JSON.parse(JSON.stringify(getTweets(30)));
    res.send(tweets); 
});
