interface CreaateDOMObject {
    tweetsContainer: HTMLElement,
    tweet: HTMLElement,
    profileImage: HTMLElement,
    imageProfile: HTMLElement,
    tweetMiddle: HTMLElement,
    tweetHeader: HTMLElement,
    h2: HTMLElement,
    username: HTMLElement,
    dot: HTMLElement,
    time: HTMLElement,
    button: HTMLElement,
    imageMore: HTMLElement,
    tweetContent: HTMLElement,
    para: HTMLElement,
    imgContainer: HTMLElement,
    contentImg: HTMLElement
}

function NewCreateDOMObject() {
    const Object = {
        tweetsContainer : document.createElement("div"),
        tweet : document.createElement("div"),
        profileImage : document.createElement("div"),
        imageProfile : document.createElement("img"),
        tweetMiddle : document.createElement("div"),
        tweetHeader : document.createElement("div"),
        h2 : document.createElement("h2"),
        username : document.createElement("span"),
        dot : document.createElement("span"),
        time : document.createElement("span"),
        button : document.createElement("button"),
        imageMore : document.createElement("img"),
        tweetContent : document.createElement("div"),
        para : document.createElement("p"),
        imgContainer : document.createElement("div"),
        contentImg : document.createElement("img")
    }

    return Object;
}

function NewStyle(Object) {
    Object.tweetsContainer.className = "tweets-container",
    Object.tweet.className = "tweet"
    Object.profileImage.className = "profile-img"
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
function NewInsertDOMData(DOMObject, tweets, ind) {
    DOMObject.imageProfile.src = tweets[ind]["userImage"]
    DOMObject.h2.innerHTML = tweets[ind]["userName"]
    DOMObject.userName = tweets[ind]["userHandle"]
    DOMObject.time.innerText = tweets[ind]["createdAt"]
    DOMObject.contentImg.src = tweets[ind]["tweetImage"]
    DOMObject.para.innerHTML = tweets[ind]["tweet"]
}

function NewappendChild(DOMObject) {
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

function getData()
{
    var ind:any
    var DOMObject: any
    const response = fetch("http://localhost:3100/getTweets")
    .then(response => response.json())
    .then(tweets => {
        for (ind in tweets) {
            console.log(tweets[ind]["userName"])
            DOMObject = CreateDOMObject()
            InsertDOMData(DOMObject, tweets, ind)
            appendChild(DOMObject)
        }
    })
}
getData()
