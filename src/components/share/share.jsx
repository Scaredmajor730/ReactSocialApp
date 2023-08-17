import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MoodIcon from '@mui/icons-material/Mood';

const Share = () => {
    return (
        <div className='share'>
            <div className='shareWrapper'>
             <div className='sharetop'>
             <img src=".\assets\profile picture\dp1.jpg" className="shareprofileimg" alt="" />
             <input placeholder="What's In Your Mind" className='shareinput'/>
             </div>
             <hr className='sharehr'/>
             <div className='sharebottom'>
              <div className='shareoptions'>
               <div className='shareoption'>
                  <PermMediaIcon htmlColor="tomato" className='shareicon'/>
                 <div className='shareoptiontext'>Photo or Video</div>
               </div>
               <div className='shareoption'>
                  <PhotoAlbumIcon htmlColor="blue"className='shareicon'/>
                 <div className='shareoptiontext'>Tag</div>
               </div>
               <div className='shareoption'>
                  <AddLocationIcon htmlColor="green" className='shareicon'/>
                 <div className='shareoptiontext'>Location</div>
               </div>
               <div className='shareoption'>
                  <MoodIcon htmlColor="goldenrod"className='shareicon'/>
                 <div className='shareoptiontext'>Feelings</div>
               </div>
              </div>
              <button className='sharebutton'>Share</button>
             </div>
            </div>
        </div>
    );
}

export default Share;
