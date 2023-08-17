import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="posttop">
                  <div className="posttopleft">
                  <img className="postprofileimg" src=".\assets\profile picture\dp3.jpg" alt=""/>
                  <span className="postusername">lily Atwood</span>
                  </div>
                  <span className="postdate">
                  5 mins ago</span>
                  <div className="posttopright">
                  <MoreVertIcon/>
                  </div>
                </div>
                <div className="postcenter">
                  <span className="posttext">
                  Hey! Its my first post. :)
                  </span>
                  <img className="postimg" src="../assets/posts/post8.jpg" alt=""/>
                </div>
                <div className="postbottom">
                  <div className="postbottomleft">
                  <img className="likeicon" src="../assets/heart.png" alt=""/>
                  <img className="likeicon" src="../assets/like.png" alt=""/>
                  <span className="postlikecounter">32 people liked this.</span>
                  </div>
                  <div className="postbottomright">
                  <span className="postcommenttext">
                  9 comments.
                  </span>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
