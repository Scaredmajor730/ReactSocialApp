import Share from '../share/share.jsx'
import Post from '../Post/post.jsx';
import './feed.css'
const Feed = () => {
    return (
        <div className='feed'>
            <div className='feedwrapper'>
            <Share/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            </div>
        </div>
    );
}

export default Feed;
