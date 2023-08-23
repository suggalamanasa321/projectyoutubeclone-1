import React from 'react'
import vid from '../../components/Video/vid.mp4'
import WHL from '../../components/WHL/WHL';
import { useSelector } from 'react-redux';

function WatchLater() {

  const watchLaterList = useSelector((state) => state.WatchLaterReducer)
  console.log(watchLaterList)
//   const WatchLater=[{
//     _id:1,
//     video_src: vid,
//     chanel:'62bafe6752cea35a6c30685f',
//     title:'video 1',
//     Uploader:"ABC",
//     description: 'description of video 1'
//   },
//   {
//     _id:2,
//     video_src:vid,
//     chanel:'cdd',
//     title:'video 2',
//     Uploader:"BCD",
//     description: 'description of video 2'

//   },
//   {
//     _id:3,
//     video_src:vid,
//     chanel:'add',
//     title:'video 3',
//     Uploader:"CDE",
//     description: 'description of video 3'

//   },
//   {
//     _id:4,
//     video_src:vid,
//     chanel:'add',
//     title:'video 3',
//     Uploader:"DEF",
//     description: 'description of video 3'

//   },
// ];
  return (
  
    <WHL page={"watch later"} videoList={watchLaterList}/>
    
  )
}

export default WatchLater
