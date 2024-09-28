function Tweet({content , likeCount}) {
    return(
        <>
            <div className="tweet-content">{content}</div>
            <div className="tweet-like">{likeCount} likes</div>
        </>
    )
}

export default Tweet;