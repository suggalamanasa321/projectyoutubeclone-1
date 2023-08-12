import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import './LikeWatchLaterSaveBtns.css'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine } from 'react-icons/ri'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'


function LikeWatchLaterSaveBtns() {
    const [saveVideo, setSaveVideo] = useState(true);
    const [DislikeBtn, setDislikeBtn] = useState(false);
    const[LikeBtn, setLikeBtn] = useState(false);
    const toggleSaveVideo =()=>{
        if(saveVideo){
            setSaveVideo(false);
        }else{
            setSaveVideo(true);
        }

    }   
    const toggleLikeBtn = ()=>{
        if(LikeBtn){
            setLikeBtn(false);
        }else{
            setLikeBtn(true);
        }
    } 
    const toggleDisLikeBtn = ()=>{
        if(DislikeBtn){
            setDislikeBtn(false);
        }else{
            setDislikeBtn(true);
        }
    } 
    return (
        <div className='btns_cont_VideoPage'>
            <div className="btn_VideoPage">
                <BsThreeDots />
            </div>
            <div className="btn_VideoPage">
                <div className='like_VideoPage' onClick={()=>toggleLikeBtn()}>
                    {
                        LikeBtn ? (
                            <>
                                <AiFillLike size={22} className='btns_videoPage' />
                            
                            </>
                        ) : (
                            <>
                                <AiOutlineLike size={22} className='btns_videoPage' />
                                
                            </>
                        )}
                        <b>1</b>
                </div>
                <div className='like_VideoPage' onClick={()=>toggleDisLikeBtn()}>
                    {
                        DislikeBtn ? (
                            <>
                                <AiFillDislike size={22} className='btns_videoPage' />
                            
                            </>
                        ) : (
                            <>
                                <AiOutlineDislike size={22} className='btns_videoPage' />
                                
                            </>
                        )}
                        <b>DISLIKE</b>
                </div>
                <div className='like_VideoPage' onClick={()=>toggleSaveVideo()}>
                    {
                        saveVideo ? (
                            <>
                                <RiPlayListAddFill size={22} className='btns_videoPage' />
                                <b>Save</b>
                            </>
                        ) : (
                            <>
                                <MdPlaylistAddCheck size={22} className='btns_videoPage' />
                                <b>Saved</b>
                            </>
                        )}
                        
                </div>
                
                <div className='like_VideoPage'>

                    <>
                        <RiHeartAddFill size={22} className='btns_videoPage' />
                        <b>Thanks</b>
                    </>


                </div>
                <div className='like_VideoPage'>

                    <>
                        <RiShareForwardLine size={22} className='btns_videoPage' />
                        <b>Share</b>
                    </>


                </div>
                
                
            </div>
        </div>
    )
}

export default LikeWatchLaterSaveBtns
