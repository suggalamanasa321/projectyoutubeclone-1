import React from 'react'
import Home from '../pages/Home/Home'
import {Routes, Route} from "react-router-dom";
import Library from '../pages/Library/Library';
import YourVideos from '../pages/YourVideos/YourVideos';
import WatchHistory from '../pages/WatchHistory/WatchHistory';
import WatchLater from '../pages/WatchLater/WatchLater';
import LikedVideo from '../pages/LikedVideo/LikedVideo';
import VideoPage from '../pages/VideoPage/VideoPage';
import Channel from '../pages/Channel/Channel'
import Search from "../pages/Search/Search";

function AllRoutes({setEditCreateChannelBtn,setvidUploadPage}) {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/watchlater' element={<WatchLater/>}/>
        <Route path='/likedvideo' element={<LikedVideo/>}/>
        <Route path='/history' element={<WatchHistory/>}/>
        <Route path='/yourVideos' element={<YourVideos/>}/>
        <Route path='/videopage/:vid' element={<VideoPage/>}/>
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path='/channel/:Cid' element={<Channel  setvidUploadPage={setvidUploadPage} setEditCreateChannelBtn={setEditCreateChannelBtn}/>}/>
    </Routes>
  );
}

export default AllRoutes;
