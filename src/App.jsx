import './App.css'
import TweetList from './Components/TweetList/TweetList'

function App() {

  const dummyTweets = [
    {
      id:0,content:"hey what's going on",likeCount:90
    },
    {
        id:1,content:"We are a blockchain team",likeCount:89
    },
    {
        id:2,content:"Deluluuuuu",likeCount:7
    }
  ]

  return (
    <>
     <TweetList tweets={dummyTweets}/>
    </>
  )
}

export default App
