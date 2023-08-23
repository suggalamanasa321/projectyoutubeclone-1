import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'
import vid from '../../components/Video/vid.mp4';
import { useSelector } from 'react-redux'

function ShowVideoList({videoId}) {
  const vids=useSelector(s=>s.videoReducer)
  console.log(vids.data)
 
    // const vids=[{
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
    <div className='container_showVideoGrid'>
      {
        vids.data.filter(q=>q._id===videoId).map(vi =>
        {
          return(
          <div key={vi._id} className="video_box_app">
            <ShowVideo vid={vi}/>
            
          </div>
          )
        })
      }

    </div>
  )
}

export default ShowVideoList;

