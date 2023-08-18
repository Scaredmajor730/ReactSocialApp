import './online.css'

const Online = ({user}) => {
    return (
        
            <li className='rightbarfriend'>
                 <div className='rightbarprofileimgcontainer'>
                  <img className='rightbarprofileimg' src={user.profilePicture} alt=''/>
                  <span className='rightbaronline'></span>
                 </div>
                 <span className='rightbarusername'>{user.username}</span>
                
              </li>
        
    );
}

export default Online;
