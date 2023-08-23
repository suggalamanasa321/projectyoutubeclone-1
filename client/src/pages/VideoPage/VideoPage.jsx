import React, { useEffect } from 'react'
// import vid from '../../components/Video/vid.mp4'
import './VideoPage.css'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns';
import Comments from '../../components/Comments/Comments';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {Link, useParams} from 'react-router-dom';
import { addToHistory } from '../../actions/History';
import { viewVideo } from '../../actions/video';
function VideoPage() {
    const {vid}=useParams();
    // console.log(vid)
    // const channels = useSelector((state) => state.channelReducers);
    // const currentChannel = channels.filter((c) => c._id === vid)[0] || {};


    const vids = useSelector((state) => state.videoReducer);
    // console.log(vids)
    const vv = vids.data ? vids.data.filter((q) => q._id === vid)[0] : {};
    const dispatch = useDispatch();
    const CurrentUser = useSelector((state) => state.currentUserReducer);

    const handleHistory=()=>{
        dispatch(
            addToHistory(
                {
                  videoId: vid,
                  Viewer: CurrentUser.result._id,
                }
            )
        );
    };
    const handleViews=()=>{
        dispatch(viewVideo({
            id:vid
        }))


    }
    useEffect(()=>{
        if(CurrentUser){
        handleHistory();
        }
        handleViews();
    },[]);
    return (
        <>
            <div className="container_VideoPage">
                <div className="container2_VideoPage">
                    <div className='video_display_screen_videoPage'>
                        <video src={`http://localhost:5500/${vv.filePath}`}
                            className={"video_ShowVideo_videoPage"}
                            controls
                        // autoPlay
                        ></video>
                        <div className='video_details_VideoPage'>
                            <div className='video_btns_title_VideoPage_cont'>
                                <div className='video_title_VideoPage'>{vv.videoTitle}</div>
                                <div className='views_date_btns_VideoPage'>
                                    <div className='views_VideoPage'>
                                        {vv.Views} views <div className="dot"></div>{" "} uploaded {moment(vv.createdAt).fromNow()}
                                    </div>
                                    <LikeWatchLaterSaveBtns vv={vv} vid={vid}/>
                                </div> 
                            </div>
                                
                            <Link to={`/channel/${vv.videoChannel}`} className='channel_details_VideoPage'>
                                <b className='channel_logo_VideoPage'>
                                <p>{vv.Uploader.charAt(0).toUpperCase()}</p>
                                {/* <p>C</p> */}
                                </b>
                                <p className='channel_name_videoPage'>{vv.Uploader}</p>
                            </Link>
                            <div className='comments_VideoPage'>
                                <h2>
                                    <u>Comments</u>
                                </h2>
                                <Comments videoId={vv._id}/>
                            </div>


                        </div>
                    </div>
                    <div className='moreVideoBar'>
                    More Video
                    </div>

                </div>
            </div>

        </>
    );
}

export default VideoPage; 
