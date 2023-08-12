import React from 'react'
import './ShowVideo.css'
import {Link} from 'react-router-dom'

function ShowVideo({ vid }) {
    return (
        <>
            <Link to={`/videopage/${vid._id}`}>
                <video
                    src={`${vid.video_src}`}
                    className='video_ShowVideo'

                ></video>
            </Link>
            <div className='video_description'>
                <div className="channel_logo_App">
                    <div className='fstChar_logo_App'>
                        <>{vid && vid.Uploader ? vid.Uploader.charAt(0) : null}</>
                    </div>

                </div>
                <div className='video_details'>
                    <p className='title_video_ShowVideo'>title</p>
                    <pre className='vid_view_UploadTime'>1-1-2023</pre>
                    <pre className='vid_view_UploadTime'>
                        5 views <span className='dot'></span> video uploaded 1 year ago
                    </pre>

                </div>
            </div>

        </>
    )
}

export default ShowVideo
