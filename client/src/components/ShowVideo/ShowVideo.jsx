import React from 'react'
import './ShowVideo.css'
import {Link} from 'react-router-dom'
import moment from 'moment'

function ShowVideo({ vid }) {
    console.log(vid)
    return (
        <>
            <Link to={`/videopage/${vid._id}`}>
                <video
                    src={`http://localhost:5500/${vid.filePath}`}
                    className='video_ShowVideo'

                ></video>
            </Link>
            <div className='video_description'>
                <div className="channel_logo_App">
                    <div className='fstChar_logo_App'>
                        <>{vid.Uploader && vid.Uploader.charAt(0).toUpperCase()}</>
                    </div>

                </div>
                <div className='video_details'>
                    <p className='title_video_ShowVideo'>{vid.videoTitle}</p>
                    <pre className='vid_view_UploadTime'>{vid.Uploader}</pre>
                    <pre className='vid_view_UploadTime'>
                        {vid.Views} views <span className='dot'></span> {moment(vid.createdAt).fromNow()} 
                    </pre>

                </div>
            </div>

        </>
    )
}

export default ShowVideo
