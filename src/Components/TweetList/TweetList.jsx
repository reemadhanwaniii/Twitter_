import Tweet from "../Tweet/Tweet"

function TweetList({tweets}) {
    //console.log("Reach here")
    return(
        <ul>
            {
                tweets.map((tweet)=>(
                    <li key={tweet.id}>
                        <Tweet content={tweet.content} likeCount={tweet.likeCount}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default TweetList;