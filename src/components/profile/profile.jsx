import Topbar from '../../components/topbar/topbar'
import Sidebar from '../../components/sidebar/sidebar'
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/rightbar'
import './profile.css'

const Profile = () => {
    return (
        <>
        <Topbar/>
        <div className='profile'>
         <Sidebar/>
         <div className='profileright'>
         <div className='profilerighttop'>
         <img className='profilecoverimg' src='../assets/profile picture/dp3.jpg' alt=""/>
         <img className='profileuserimg' src='../assets/profile picture/dp9.jpg' alt=""/>
         </div>
         <div className='profileinfo'>
         <h4 className='profileinfoname'>MKD</h4>
         <span className='profileinfodesc'>Hello My Friends!</span>
         </div>
         <div className='profilerightbottom'>
         <Feed/>
         <Rightbar profile/>
         </div>
         </div>
        </div>
        </>
    )
}

export default Profile;
