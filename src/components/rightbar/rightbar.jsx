import './rightbar.css';

const Rightbar = () => {
    return (
        <div className='rightbar'>
            <div className='rightbarwrapper'>
            <div className='birthdaycontainer'>
            <img className='birthdayimg' src="../assets/birthday.jpg" alt=""/>
            <span className='birthdaytext'>
            {" "} <b>Rohan</b> and 5 others have birthday today
            </span>
            </div>
            <img className='rightbarad' src="../assets/ad.png" alt=""/>
            <h4 className='rightbartitle'>Online friends</h4>
             <ul className='rightbarfriendlist'>
              <li className='rightbarfriend'>
                 <div className='rightbarprofileimgcontainer'>
                  <img className='rightbarprofileimg' src='../assets/profile picture/dp5.jpg' alt=''/>
                  <span className='rightbaronline'></span>
                 </div>
                 <span className='rightbarusername'>Leslie Winkle</span>
                
              </li>
             </ul>
            </div>
        </div>
    );
}

export default Rightbar;
