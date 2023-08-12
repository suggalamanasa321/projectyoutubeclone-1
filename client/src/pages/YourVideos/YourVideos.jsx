import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../components/Video/vid.mp4'
import './YourVideos.css'

function YourVideos() {
  const vids=[{
    _id:1,
    video_src: vid,
    chanel:'62bafe6752cea35a6c30685f',
    title:'video 1',
    Uploader:"ABC",
    description: 'description of video 1'
  },
  {
    _id:2,
    video_src:vid,
    chanel:'cdd',
    title:'video 2',
    Uploader:"BCD",
    description: 'description of video 2'

  },
  {
    _id:3,
    video_src:vid,
    chanel:'add',
    title:'video 3',
    Uploader:"CDE",
    description: 'description of video 3'

  },
  {
    _id:4,
    video_src:vid,
    chanel:'add',
    title:'video 3',
    Uploader:"DEF",
    description: 'description of video 3'

  },
];
  return (
    <div className='container_pages_app'>
        <LeftSidebar/>
        <div className="container2_pages_app">
          <div className='container_yourvideo_page'>
          <h1>Your Videos</h1>
          <ShowVideoGrid vids={vids}/>
          </div>
        </div>
    
    </div>
  )
}

export default YourVideos