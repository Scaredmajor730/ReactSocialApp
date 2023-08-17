import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@material-ui/icons"

const Topbar = () => {
    return (
        <div className="topbarcontainer">
             <div className="topbarleft">
                 <span className="logo">MKDSocial</span>
             </div>
             <div className="topbarcenter">
                 <Search className="searchicon"/>
                 <input type='text' placeholder='Search For Friends, Posts or Videos'
                 className="searchi"/>
             </div>
             <div className="topbarright">
                <div className="topbarlinks">
                     <span className="topbarlink">
                      HomePage
                     </span>
                     <span className="topbarlink">
                       Timeline
                     </span>
                </div>
                <div className="topbaricons">
                     <div className="topbariconitem">
                       <Person/>
                       <span className="topbariconbadge">1</span>
                     </div>
                     <div className="topbariconitem">
                       <Chat/>
                       <span className="topbariconbadge">1</span>
                     </div>
                     <div className="topbariconitem">
                       <Notifications/>
                       <span className="topbariconbadge">1</span>
                     </div>
                     
                </div>
                <img src=".\assets\profile picture\dp1.jpg" alt="" className="topbarimg"/>
              </div>
        </div>
    );
}

export default Topbar;
