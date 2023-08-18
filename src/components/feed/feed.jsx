import Share from '../share/share.jsx'
import Post from '../Post/post.jsx';
import './feed.css'
import {Posts} from '../../dummyData.js'
const Feed = () => {
    return (
        <div className='feed'>
            <div className='feedwrapper'>
            <Share/>
            {Posts.map((p) => (
                <Post key={p.id} post={p}/>
            ))}
            </div>
        </div>
    );
}

export default Feed;
