import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'
import './ShowVideoGrid.css'

function ShowVideoGrid({ vids }) {
  if (!Array.isArray(vids) || vids.length === 0) {
    return <div>No videos to display</div>;
  }

  return (
    <div className='container_showVideoGrid'>
      {
        vids.reverse().map(vi =>
        {
          return(
          <div key={vi._id} className="video_box_app">
            <ShowVideo vid={vi} />
          </div>
          )
          })
      }
    </div>
  )

}

export default ShowVideoGrid;
