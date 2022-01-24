const express = require('express');
const casual = require('casual');

const app = express();
app.get('/api/tweet/tweet_id/like', (req, res) => {
    const tweet_id = req.params.tweetId;
    var likes_count = req.params.likes_count;
    likes_count = 15;
    res.send({
        data:
        {
            "tweetId": "tweet101",
            "favorite_tweet": casual.boolean,
            "likes":likes_count+1,
        }
    }
    )
})


app.get('/api/auth/user_handle/logout', (req, res) => {
    const user_handle = req.params.userid;
    res.send({
        data:
        {
            "logout": "done",
            "message":"You have successfully logout",
        }
    }
    )
})

app.get('/api/tweet/tweet_id/retweet', (req, res) => {
    const tweet_id = req.params.tweetId;
    res.send({
        data:
        {
            create_retweet:
            {
                result:{
                    result_Id:casual.random,
                    legacy:{
                        "full text":casual.sentence,
                    }
                }
            }
        }
    }
    )
})


app.listen(3000, () => {
    console.log('server is running on port : ' + 3000)
})
