import "./Tweet.css"
import { useState } from "react";

function Tweet({id,content , likeCount ,createdAt,onEdit}) {
    //console.log("inside tweet")
    const [isEditing,setIsEditing] = useState(false);

    return(
        <div className="tweet-wrapper">
            <div className="tweet-edit-wrapper">
                <div className="tweet-content">
                    {(isEditing)?(
                        <input 
                               type="text"
                               value={content}
                               onChange={(e)=>{
                                onEdit({
                                    id: id,
                                    content: e.target.value,
                                    likeCount: likeCount,
                                    createdAt: createdAt
                                })
                            }}
                        />
                    ):content}
                </div>
                <div className="edit-tweet">
                    <button onClick={()=>setIsEditing(!isEditing)}>
                        {(isEditing)?'Save':'Edit'}
                    </button>
                </div>
            </div>
            
            <div className="tweet-like-created-wrapper">
                <div className="tweet-like">{likeCount} likes</div>
                <div className="created-at"><b>Tweeted At</b> {createdAt}</div>
            </div>
        </div>
    )
}

export default Tweet;