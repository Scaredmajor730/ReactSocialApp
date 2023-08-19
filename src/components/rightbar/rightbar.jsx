import './rightbar.css';
import {Users} from '../../dummyData'
import Online from '../online/online';

const Rightbar = ({profile}) => {

    const HomeRightBar = () => {
        return (
            <div>
                        <div className='birthdaycontainer'>
            <img className='birthdayimg' src="../assets/birthday.jpg" alt=""/>
            <span className='birthdaytext'>
            {" "} <b>Rohan</b> and 5 others have birthday today
            </span>
            </div>
            <img className='rightbarad' src="../assets/ad.png" alt=""/>
            <h4 className='rightbartitle'>Online friends</h4>
             <ul className='rightbarfriendlist'>
               {Users.map((u)=> (
                <Online key={u.id} user={u}/>
               ))}
             </ul>
            </div>
        );
    };

    const ProfileRightBar = () =>{
        return (
            <>
            <h4 className='rightbattitle'>User Information</h4>
            <div className='rightbarinfo'>
             <div className='rightbarinfoitem'>
              <span className='rightbarinfokey'>
              City:</span>
              <span className='rightbarinfovalue'>
              New York</span>
             </div>
             <div className='rightbarinfoitem'>
              <span className='rightbarinfokey'>
              From:</span>
              <span className='rightbarinfovalue'>
              Madrid</span>
             </div>
             <div className='rightbarinfoitem'>
              <span className='rightbarinfokey'>
              Relationship:</span>
              <span className='rightbarinfovalue'>
              Single</span>
             </div>
            </div>
            <h4 className='rightbartitle'>User Friends</h4>
            <div className='rightbarfollowings'>
              <div className='rightbarfollowing'>
                <img src="../assets/profile picture/dp7.jpg" alt="" className='rightbarfollowingimg'/>
                <span className='rightbarfollowingname'>John Carter</span>
              </div>
              <div className='rightbarfollowing'>
                <img src="../assets/profile picture/dp3.jpg" alt="" className='rightbarfollowingimg'/>
                <span className='rightbarfollowingname'>John Carter</span>
              </div>
              <div className='rightbarfollowing'>
                <img src="../assets/profile picture/dp9.jpg" alt="" className='rightbarfollowingimg'/>
                <span className='rightbarfollowingname'>John Carter</span>
              </div>
              <div className='rightbarfollowing'>
                <img src="../assets/profile picture/dp14.jpg" alt="" className='rightbarfollowingimg'/>
                <span className='rightbarfollowingname'>John Carter</span>
              </div>
              <div className='rightbarfollowing'>
                <img src="../assets/profile picture/dp12.jpg" alt="" className='rightbarfollowingimg'/>
                <span className='rightbarfollowingname'>John Carter</span>
              </div>
              <div className='rightbarfollowing'>
                <img src="../assets/profile picture/dp15.jpg" alt="" className='rightbarfollowingimg'/>
                <span className='rightbarfollowingname'>John Carter</span>
              </div>
            </div>
            </> 
        )
    }


    return (
        <div className='rightbar'>
            <div className='rightbarwrapper'>
                   {profile ? <ProfileRightBar/> : <HomeRightBar/>}
            </div>
        </div>
    );
}

export default Rightbar;
