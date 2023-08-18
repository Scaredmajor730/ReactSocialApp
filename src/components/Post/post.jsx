import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData"
import { useState } from "react"

const Post = ({post}) => {
    const [like,setlike] = useState(post.like)
    const [isLiked,setIsliked] = useState(false)

    const likehandler = () => {
      setlike(isLiked ? like-1 : like+1)
      setIsliked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="posttop">
                  <div className="posttopleft">
                  <img className="postprofileimg" src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt=""/>
                  <span className="postusername">
                  {Users.filter((u) => u.id === post.userId)[0].username}
                  </span>
                  </div>
                  <span className="postdate">
                  {post.date}</span>
                  <div className="posttopright">
                  <MoreVertIcon/>
                  </div>
                </div>
                <div className="postcenter">
                  <span className="posttext">
                  {post.desc}
                  </span>
                  <img className="postimg" src={post.photo} alt=""/>
                </div>
                <div className="postbottom">
                  <div className="postbottomleft">
                  <img className="likeicon" src="../assets/heart.png" onClick={likehandler} alt=""/>
                  <img className="likeicon" src="../assets/like.png" onClick={likehandler} alt=""/>
                  <span className="postlikecounter">{like} people liked this.</span>
                  </div>
                  <div className="postbottomright">
                  <span className="postcommenttext">
                  {post.comment} comments
                  </span>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
