import './closefriend.css'

const Closefriend = ({user}) => {
    return (
         <li className='sidebarfriend'>
             <img className='sidebarfriendimg' src={user.profilePicture} alt=""/>
             <span className='sidebarfriendname'>{user.username}</span>
         </li>
    );
}

export default Closefriend;
