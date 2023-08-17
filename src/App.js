import Topbar from './components/topbar/topbar';
import Sidebar from './components/topbar/sidebar/sidebar';
import Feed from './components/topbar/feed/feed';
import Rightbar from './components/topbar/rightbar/rightbar';

export default function Home() {
  return (
    <>
     <Topbar/>
     <div className='homeContainer'>
     <Sidebar/>
     <Feed/> 
     <Rightbar/>
      </div>
    </>
  );
}

