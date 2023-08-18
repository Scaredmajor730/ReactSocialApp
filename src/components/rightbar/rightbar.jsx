import './rightbar.css';
import {Users} from '../../dummyData'
import Online from '../online/online';

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
               {Users.map((u)=> (
                <Online key={u.id} user={u}/>
               ))}
             </ul>
            </div>
        </div>
    );
}

export default Rightbar;
