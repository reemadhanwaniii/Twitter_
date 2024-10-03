import { useCallback, useState } from "react";
import AddTweet from "../AddTweet/AddTweet";
import TweetList from "../TweetList/TweetList";

function Twitter(){
    
    const dummyTweets = [
        {
          id:0,content:"hey what's going on",likeCount:90,createdAt:new Date()
        },
        {
            id:1,content:"We are a blockchain team",likeCount:89,createdAt:new Date()
        },
        {
            id:2,content:"Deluluuuuu",likeCount:7,createdAt:new Date()
        }
      ]
    
      const [tweets,setTweets] = useState(dummyTweets);

      const handleAddTweet = useCallback((text) =>{

        const nextId = (tweets.length) > 0?tweets[tweets.length-1].id +1:0;

        setTweets([...tweets,{
            id : nextId,
            content : text,
            likeCount : Math.floor(Math.random()*10),
            createdAt : new Date()
        }])
      },[])

      const handleEditTweet = useCallback((tweet) => {
            setTweets(
                tweets.map((currentTweet)=>{
                    if(currentTweet.id === tweet.id) return tweet;
                    else return currentTweet
                })
            )
      },[])

      const sortTweets =() => {
        tweets.sort((t1,t2) => t2.createdAt.getTime() - t1.createdAt.getTime());
        setTweets([...tweets]);
      }

      return (
        <>
         <AddTweet onAddTweet={handleAddTweet} />
         <button onClick={sortTweets}>
            Sort Tweet by Created At
        </button>
         <TweetList tweets={tweets} onEditTweet = {handleEditTweet}/>
        </>
      )
}

export default Twitter;