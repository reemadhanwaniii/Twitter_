import Tweet from "../Tweet/Tweet";
import './TweetList.css'
import { memo } from "react";

function TweetList({tweets,onEditTweet}) {
    //console.log("Reach here")
    
    //console.log(date)
    const MemoizedTweet = memo(Tweet);
    return(
        <ul className="tweet-list">
            {
                tweets.map((tweet)=>(
                    <li key={tweet.id} className="tweet-like-wrapper">
                        <MemoizedTweet 
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