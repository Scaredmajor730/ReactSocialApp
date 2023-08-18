import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PeopleIcon from '@mui/icons-material/People';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import { Users } from '../../dummyData'
import Closefriend from '../closeFriend/closefriend';


const Sidebar = () => {
    return (
        <div className="sidebar">
          <div className='sidebarwrapper'>
            <ul className='sidebarlist'>
                 <li className='sidebarlistitem'>
                     <RssFeedIcon className='sidebaricon'/> 
                     <span className='sidebarlistitemtext'>
                              Feed
                     </span>
                 </li>
                 <li className='sidebarlistitem'>
                     <ChatIcon className='sidebaricon'/>
                     <span className='sidebarlistitemtext'>
                              Chats
                     </span>
                 </li>
                 <li className='sidebarlistitem'>
                      <VideoLibraryIcon className='sidebaricon'/>
                     <span className='sidebarlistitemtext'>
                        Videos
                      </span>
                 </li>
                 <li className='sidebarlistitem'>
                      <PeopleIcon className='sidebaricon'/>
                     <span className='sidebarlistitemtext'>
                        Groups
                      </span>
                 </li>
                 <li className='sidebarlistitem'>
                      <BookmarksIcon className='sidebaricon'/>
                     <span className='sidebarlistitemtext'>
                        Bookmarks
                      </span>
                 </li>
                 <li className='sidebarlistitem'>
                      <QuestionMarkIcon className='sidebaricon'/>
                     <span className='sidebarlistitemtext'>
                        Question
                      </span>
                 </li>
                 <li className='sidebarlistitem'>
                      <WorkIcon className='sidebaricon'/>
                     <span className='sidebarlistitemtext'>
                        Jobs
                      </span>
                 </li>
                  <li className='sidebarlistitem'>
                      <EventIcon className='sidebaricon'/>
                     <span className='sidebarlistitemtext'>
                        Events
                      </span>
                 </li>
                  <li className='sidebarlistitem'>
                      <MenuBookIcon className='sidebaricon'/>
                     <span className='sidebarlistitemtext'>
                        Courses
                      </span>
                 </li>
            </ul>
            <button className='sidebarbutton'>Show More</button>
            <hr className='sidebarHr'/>
            <ul className='sidebarfriendlist'>
             {Users.map(u=>(
                <Closefriend key={u.id} user={(u)}/>
             ))}     
                </ul>
                </div>
        </div>
    );
}

export default Sidebar;
