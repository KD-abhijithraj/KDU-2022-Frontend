 function CreateDOMObject()
    {
      const Object = {}

      Object.tweetsContainer = document.createElement("div")
      Object.tweet = document.createElement("div")
      Object.profileImage = document.createElement("div")
      Object.imageProfile = document.createElement("img")
      Object.tweetMiddle = document.createElement("div")
      Object.tweetHeader = document.createElement("div")
      Object.h2 = document.createElement("h2")
      Object.username = document.createElement("span")
      Object.dot = document.createElement("span")
      Object.time = document.createElement("span")
      Object.button = document.createElement("button")
      Object.imageMore = document.createElement("img")
      Object.tweetContent = document.createElement("div")
      Object.para = document.createElement("p")
      Object.imgContainer = document.createElement("div")
      Object.contentImg = document.createElement("img")
      return Object;
    }
    function syleDOMObject(Object) {
        Object.tweetsContainer.className = "tweets-container",
        Object.tweet.className = "tweet"
        Object.profileImage.className = "profile-img"
        Object.profileImage.loading = "lazy"
        Object.tweetMiddle.className = "tweet-middle"
        Object.tweetHeader.className = "tweet-header"
        Object.username.className = "username"
        Object.dot.className = "dot"
        Object.dot.innerText = "."
        Object.username.className = "time"
        Object.button.className = "post-more"
        Object.imageMore.width = "50%"
        Object.imageMore.height = "50%"
        Object.imageMore.src = "images/more.png";
        Object.tweetContent.className = "tweet-content"
        Object.imgContainer.className = "img-container"
        Object.contentImg.className = "img-container"
    
    }

    function InsertDOMData(DOMObject, tweets, ind)
    {
      DOMObject.imageProfile.src = tweets[ind]["userImage"]
      DOMObject.h2.innerHTML = tweets[ind]["userName"]
      DOMObject.userName = tweets[ind]["userHandle"]
      DOMObject.time.innerText = tweets[ind]["createdAt"]
      DOMObject.contentImg.src = tweets[ind]["tweetImage"]
      DOMObject.para.innerHTML = tweets[ind]["tweet"]
    }

    function appendChild(DOMObject)
    {
      DOMObject.tweetsContainer.appendChild(DOMObject.tweet)
      DOMObject.tweet.appendChild(DOMObject.profileImage)
      DOMObject.profileImage.appendChild(DOMObject.imageProfile)
      DOMObject.tweet.appendChild(DOMObject.tweetMiddle)
      DOMObject.tweetMiddle.appendChild(DOMObject.tweetHeader)
      DOMObject.tweetHeader.appendChild(DOMObject.h2)
      DOMObject.tweetHeader.appendChild(DOMObject.username)
      DOMObject.tweetHeader.appendChild(DOMObject.dot)
      DOMObject.tweetHeader.appendChild(DOMObject.time)
      DOMObject.tweetHeader.appendChild(DOMObject.button)
      DOMObject.button.appendChild(DOMObject.imageMore)
      DOMObject.tweetMiddle.appendChild(DOMObject.tweetContent)
      DOMObject.tweetContent.appendChild(DOMObject.para)
      DOMObject.tweetContent.appendChild(DOMObject.imgContainer)
      DOMObject.imgContainer.appendChild(DOMObject.contentImg)
      document.getElementById("getweetData").appendChild(DOMObject.tweetsContainer)
    }

      const response = fetch("http://localhost:3100/getTweets")
      .then(response => response.json())
      .then(tweets =>{
        for(ind in tweets)
        {
          console.log(tweets[ind]["userName"])
          DOMObject = CreateDOMObject()
          syleDOMObject(DOMObject)
          InsertDOMData(DOMObject, tweets, ind)
          appendChild(DOMObject)
        }
      })