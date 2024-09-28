import Tweet from "../Tweet/Tweet";
import './TweetList.css'

function TweetList({tweets}) {
    //console.log("Reach here")
    return(
        <ul className="tweet-list">
            {
                tweets.map((tweet)=>(
                    <li key={tweet.id} className="tweet-like-wrapper">
                        <Tweet content={tweet.content} likeCount={tweet.likeCount}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default TweetList;