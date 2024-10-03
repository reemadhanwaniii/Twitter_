import Tweet from "../Tweet/Tweet";
import './TweetList.css'

function TweetList({tweets,onEditTweet}) {
    //console.log("Reach here")
    
    //console.log(date)
    return(
        <ul className="tweet-list">
            {
                tweets.map((tweet)=>(
                    <li key={tweet.id} className="tweet-like-wrapper">
                        <Tweet 
                            id={tweet.id}
                            content={tweet.content} 
                            likeCount={tweet.likeCount} 
                            createdAt={tweet.createdAt.toString()}
                            onEdit={onEditTweet}
                        />
                    </li>
                ))
            }
        </ul>
    )
}

export default TweetList;