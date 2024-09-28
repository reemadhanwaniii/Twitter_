import "./Tweet.css"


function Tweet({content , likeCount}) {
    //console.log("inside tweet")
    return(
        <div className="tweet-wrapper">
            <div className="tweet-content">{content}</div>
            <div className="tweet-like">{likeCount} likes</div>
        </div>
    )
}

export default Tweet;