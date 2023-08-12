import React from 'react'
import { FaEdit, FaUpload } from 'react-icons/fa'
import './DescribeChannel.css'
// import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import channel from './Channel'


function DescribeChannel({ setEditCreateChannelBtn, Cid }) {
    // const channels = useSelector((state) => state.channelReducers);
    // const currentChannel = channels.filter((c) => c._id === Cid)[0];
    // const CurrentUser = useSelector((state) => state.currentUserReducer);
    // console.log(currentChannel)
    const channels = useSelector((state) => state.channelReducers);

    const currentChannel = channels.filter((c) => c._id === Cid)[0];

    const CurrentUser = useSelector((state) => state.currentUserReducer);


    console.log(channels);
    console.log(CurrentUser);
    console.log(currentChannel);

    return (
        <div className='container3_channel'>
            <div className='channel_logo_channel'>
                <b>{currentChannel.name.charAt(0).toUpperCase()}</b>

            </div>
            <div className='description_channel'>
                <b>{currentChannel.name}</b>
                <p>{currentChannel.desc}</p>
            </div>
            <p className='editbtn_channel' onClick={() => { setEditCreateChannelBtn(true) }}>
                <FaEdit />
                <b>Edit channel</b>
            </p>
            <p className='uploadbtn_channel'>
                <FaUpload />
                <b>upload video </b>
            </p>



        </div>
    )
}

export default DescribeChannel
