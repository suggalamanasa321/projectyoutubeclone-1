import React from "react";
import { FaEdit, FaUpload } from "react-icons/fa";
import "./DescribeChannel.css";
import { useSelector } from "react-redux";

function DescribeChannel({ setEditCreateChannelBtn, Cid, setvidUploadPage }) {

  const channels = useSelector((state) => state.channelReducers);
  // console.log(Cid);
  const currentChannel = channels.filter((c) => c._id === Cid)[0] || {};

  const CurrentUser = useSelector((state) => state.currentUserReducer) || {}; // check code responsible to update currentUserReducer state 

  return (
    <div className="container3_channel">
      <div className="channel_logo_channel">
        <b>{currentChannel.name && currentChannel.name.charAt(0).toUpperCase()}</b>
      </div>
      <div className="description_channel">
        <b>{currentChannel.name}</b>
        <p>{currentChannel.desc}</p>
      </div>
      {CurrentUser.result._id === currentChannel._id && (
        <>
          <p
            className="editbtn_channel"
            onClick={() => {
              setEditCreateChannelBtn(true);
            }}
          >
            <FaEdit />
            <b>Edit channel</b>
          </p>
          <p className="uploadbtn_channel" onClick={() => setvidUploadPage(true)}>
            <FaUpload />
            <b>upload video </b>
          </p>
        </>
      )}
    </div>
  );
}

export default DescribeChannel;