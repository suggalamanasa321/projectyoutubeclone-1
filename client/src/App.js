import './App.css';
import Navbar from './components/Navbar';
import React, { useEffect } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import AllRoutes from './components/AllRoutes';
import DrawerSidebar from './components/LeftSidebar/DrawerSidebar';
import { useState } from 'react';
import CreateEditChannel from './pages/Channel/CreateEditChannel';
import { useDispatch } from 'react-redux';
import { fetchAllChannel } from './actions/channelUser';
import VideoUpload from './pages/VideoUpload/VideoUpload';
import { getAllVideo } from './actions/video';
import { getAlllikedVideo } from './actions/likedVideo';
import { getAllwatchLater } from './actions/watchLater';
import { getAllHistory } from './actions/History';


function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchAllChannel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
  },[dispatch]);

  const[toggleDrawerSidebar, setToggleDrawerSidebar]=useState({
    display:'none',
  });

  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==='none'){
      setToggleDrawerSidebar({
        display:'flex',
      });
    }else{
      setToggleDrawerSidebar({
        display:'none',
      });

    }
  };

const[vidUploadPage, setvidUploadPage]=useState(false);
const[EditCreateChannelBtn, setEditCreateChannelBtn]=useState(false);
  return (
    <Router>
      {
        vidUploadPage && <VideoUpload setvidUploadPage={setvidUploadPage} />
      }
      
      {
        EditCreateChannelBtn && (<CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn}/>
      )}  
      <Navbar
      setEditCreateChannelBtn={setEditCreateChannelBtn}
      toggleDrawer={toggleDrawer}
       />
      
      <DrawerSidebar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
      />
      
      <AllRoutes setvidUploadPage={setvidUploadPage} setEditCreateChannelBtn={setEditCreateChannelBtn}/>

    </Router>


  );
}

export default App;
