function Tweet({content , likeCount}) {
    //console.log("inside tweet")
    return(
        <>
            <div className="tweet-content">{content}</div>
            <div className="tweet-like">{likeCount} likes</div>
        </>
    )
}

export default Tweet;