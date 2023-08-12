import React from 'react'
import vid from '../../components/Video/vid.mp4'
import './VideoPage.css'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns';
import Comments from '../../components/Comments/Comments';

function VideoPage() {
    return (
        <>
            <div className="container_VideoPage">
                <div className="container2_VideoPage">
                    <div className='video_display_screen_videoPage'>
                        <video src={vid}
                            className={"video_ShowVideo_videoPage"}
                            controls
                        // autoPlay
                        ></video>
                        <div className='video_details_VideoPage'>
                            <div className='video_btns_title_VideoPage_cont'>
                                <p className='video_title_VideoPage'>Title</p>
                                <div className='views_date_btns_VideoPage'>
                                    <div className='views_VideoPage'>
                                        5 views <div className="dot"></div> uploaded 1 year ago
                                    </div>
                                    <LikeWatchLaterSaveBtns/>
                                </div>
                            </div>
                                
                            <div className='channel_details_VideoPage'>
                                <b className='channel_logo_VideoPage'>
                                    <p>C</p>
                                </b>
                                <p className='channel_name_videoPage'>Channel name</p>
                            </div>
                            <div className='comments_VideoPage'>
                                <h2>
                                    <u>Comments</u>
                                </h2>
                                <Comments/>
                            </div>


                        </div>
                    </div>
                    <div className='moreVideoBar'>
                    More Video
                    </div>

                </div>
            </div>

        </>
    )
}

export default VideoPage; 
